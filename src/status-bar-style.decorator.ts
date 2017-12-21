import { StatusBar as NativeStatusBar } from '@ionic-native/status-bar';
import { ClassOf } from './core.helper';

export type StatusBarContentStyle = 'none'
    | 'default'
    | 'lightContent'
    | 'blackTranslucent'
    | 'blackOpaque';

export interface ProvidesStatusBar {
    readonly statusBar: NativeStatusBar;
}

export type PreferStatusBarDecorator = <PageClass extends ClassOf<ProvidesStatusBar> & Function>(target: PageClass) => PageClass | void;
export function StatusBarStyle(configuration: StatusBarContentStyle | (() => StatusBarContentStyle)): PreferStatusBarDecorator {
    return <PageClass extends ClassOf<ProvidesStatusBar> & Function>(target: PageClass) => {
        patchTargetMethodWithSideEffect(target, 'ionViewDidEnter', function (): void {
            const resolvedConf = configuration instanceof Function ? configuration.bind(target)() : configuration;
            applyConfigurationToStatusBar(resolvedConf, this.statusBar);
        });
        return target;
    };
}

function patchTargetMethodWithSideEffect<T>(target: ClassOf<T>, methodName: string, action: () => void): void {
    const downcastedTarget: any = <any>target.prototype;
    const previous = downcastedTarget[methodName] || (() => void (0));
    downcastedTarget[methodName] = function (): void {
        previous.bind(this)();
        action.bind(this)();
    };
}

function applyConfigurationToStatusBar(style: StatusBarContentStyle, statusBar: NativeStatusBar): void {
    switch (style) {
        case 'none':
            statusBar.hide();
            break;
        case 'default':
            statusBar.styleDefault();
            statusBar.show();
            break;
        case 'lightContent':
            statusBar.styleLightContent();
            statusBar.show();
            break;
        case 'blackTranslucent':
            statusBar.styleBlackTranslucent();
            statusBar.show();
            break;
        case 'blackOpaque':
            statusBar.styleBlackOpaque();
            statusBar.show();
            break;
    }
}
