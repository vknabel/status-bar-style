import { danger, warn, TextDiff, results, schedule } from 'danger';

schedule(async () => {
  checkIfWorkIsInProgress();
  checkIfPullRequestIsBig();
  await checkIfAllTestsAreEnabled();
  if (!pullRequestIsTrivial()) {
    checkChangelogForChanges();
    await checkChangelogChangesForAttribution();
  }
});

export interface NamedDiff {
  name: string;
  diff: TextDiff | null;
}

function checkIfWorkIsInProgress(): void {
  if (isWorkInProgress()) {
    warn('Marked as work in progress.');
  }
}

function checkIfPullRequestIsBig(threshold: number = 500): void {
  if (isPullRequestBig(threshold)) {
    warn(':exclamation: Big Pull Request');
  }
}

function checkChangelogForChanges(): void {
  if (!didTouchChangelog()) {
    warn('Please add a changelog entry for your changes.');
  }
}

async function checkChangelogChangesForAttribution(): Promise<void> {
  const changelogDiff = await diffForChangelog();
  if (!hasAttributionInDiff(changelogDiff)) {
    warn('Please add your GitHub name to the changelog entry, so we can attribute you correctly.');
  }
}

async function checkIfAllTestsAreEnabled(): Promise<void> {
  const testDiffsWithName = await diffsForAllTests();
  testDiffsWithName.filter(isThisTestDisabled)
    .forEach(namedDiff => {
      fail(`The file \`${namedDiff.name}\` still contains disabled/focused tests (like \`xit\` or \`fdescribe\`).`);
    });
}

function isPullRequestBig(threshold: number): boolean {
  return danger.github.pr.additions + danger.github.pr.deletions > threshold;
}

function isWorkInProgress(): boolean {
  return includes(danger.github.pr.title, 'WIP');
}

function hasAttributionInDiff(diff: TextDiff | null): boolean {
  const contributorName = danger.github.pr.user.login;
  return diff != null && includes(diff.added, contributorName);
}

function pullRequestIsTrivial(): boolean {
  return includes((danger.github.pr.body + danger.github.pr.title), '#trivial');
}

function didTouchChangelog(): boolean {
  return includes(danger.git.modified_files, 'CHANGELOG.md');
}

function isThisTestDisabled(namedDiff: NamedDiff): boolean {
  return namedDiff.diff != null && includes(namedDiff.diff.added, 'xit', 'xdescribe', 'fit', 'fdescribe');
}

function diffForChangelog(): Promise<TextDiff | null> {
  return danger.git.diffForFile('CHANGELOG.md');
}

async function diffsForAllTests(): Promise<NamedDiff[]> {
  return Promise.all(modifiedTestFiles()
    .map(namedDiffForFile));
}
async function namedDiffForFile(fileName: string): Promise<NamedDiff> {
  return {
    name: fileName,
    diff: await danger.git.diffForFile(fileName)
  };
}

function modifiedTestFiles(): string[] {
  console.log(danger.git.modified_files
    .filter(fileName => includes(fileName, 'testing/', '.mock.ts', '.spec.ts')))
  return danger.git.modified_files
    .filter(fileName => includes(fileName, 'testing/', '.mock.ts', '.spec.ts'));
}

function includes<T>(array: { indexOf: (item: T) => number }, ...items: T[]): boolean {
  return items.reduce((included, item) => included || array.indexOf(item) !== -1, false);
}
