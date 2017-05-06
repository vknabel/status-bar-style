# StatusBarStyle

[![CircleCI](https://img.shields.io/circleci/project/github/vknabel/status-bar-style.svg?style=flat-square)](https://circleci.com/gh/vknabel/status-bar-style)
[![Codecov](https://img.shields.io/codecov/c/github/vknabel/status-bar-style.svg?style=flat-square)](https://codecov.io/gh/vknabel/status-bar-style)
[![npm (scoped)](https://img.shields.io/npm/v/@ionic-decorator/status-bar-style.svg?style=flat-square)](https://www.npmjs.com/package/@ionic-decorator/status-bar-style)

The `@StatusBarStyle`-Decorator automatically adjusts the style of the StatusBar for your page.
It uses Ionic Native's `StatusBar` and applys your requested style when the page will be presented.

```typescript
@StatusBarStyle('lightContent')
@IonicPage()
@Component({
    templateUrl: './your.page.html'
})
export class YourPage {
    constructor(
        public readonly statusBar: StatusBar
    ) { }
}
```

## Installation

```bash
$ npm install --save @ionic-decorator/status-bar-style @ionic-native/core @ionic-native/status-bar
$ ionic plugin add --save cordova-plugin-statusbar
```

## Author

Valentin Knabel, [@vknabel](https://twitter.com/vknabel), dev@vknabel.com

## License

@ionic-decorator/status-bar-style is available under the [MIT](LICENSE) license.
