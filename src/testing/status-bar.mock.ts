import { Injectable } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';

@Injectable()
export class StatusBarMock implements StatusBar {
    public isVisible = false;

    constructor() { }

    public overlaysWebView(doesOverlay: boolean): void { }
    public styleDefault(): void { }
    public styleLightContent(): void { }
    public styleBlackTranslucent(): void { }
    public styleBlackOpaque(): void { }
    public backgroundColorByName(colorName: string): void { }
    public backgroundColorByHexString(hexString: string): void { }

    public hide(): void {
        this.isVisible = false;
    }
    public show(): void {
        this.isVisible = true;
    }
}
