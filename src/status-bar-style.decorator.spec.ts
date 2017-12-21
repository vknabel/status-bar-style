import { ViewDidEnter, ViewDidLeave } from './core.helper';
import { StatusBarMock } from './testing/status-bar.mock';
import { StatusBar } from '@ionic-native/status-bar';
import { ProvidesStatusBar, StatusBarStyle, StatusBarContentStyle } from './status-bar-style.decorator';

function createMockedComponent(): any {
    return class MockedComponent {
        public style: StatusBarContentStyle = 'none';
        constructor(
            public readonly statusBar: StatusBar
        ) { }
    };
}

describe('statusbar decorator without #ionViewDidEnter', () => {
    let sut: ProvidesStatusBar & ViewDidEnter & ViewDidLeave;

    describe('and no style', () => {
        beforeEach(() => {
            const decorated = StatusBarStyle('none')(createMockedComponent());
            sut = new decorated(new StatusBarMock());
        });

        it('has defined #ionViewDidEnter', () => {
            expect(sut.ionViewDidEnter).toEqual(jasmine.any(Function));
        });

        it('#ionViewDidEnter hides statusbar', () => {
            const spy = spyOn(sut.statusBar, 'hide');
            sut.ionViewDidEnter();
            expect(spy).toHaveBeenCalled();
        });
    });

    describe('and default style', () => {
        beforeEach(() => {
            const decorated = StatusBarStyle('default')(createMockedComponent());
            sut = new decorated(new StatusBarMock());
        });

        it('has defined #ionViewDidEnter', () => {
            expect(sut.ionViewDidEnter).toEqual(jasmine.any(Function));
        });

        it('#ionViewDidEnter shows statusbar', () => {
            const spy = spyOn(sut.statusBar, 'show');
            sut.ionViewDidEnter();
            expect(spy).toHaveBeenCalled();
        });

        it('#ionViewDidEnter has default style', () => {
            const spy = spyOn(sut.statusBar, 'styleDefault');
            sut.ionViewDidEnter();
            expect(spy).toHaveBeenCalled();
        });
    });

    describe('and lightContent style', () => {
        beforeEach(() => {
            const decorated = StatusBarStyle('lightContent')(createMockedComponent());
            sut = new decorated(new StatusBarMock());
        });

        it('has defined #ionViewDidEnter', () => {
            expect(sut.ionViewDidEnter).toEqual(jasmine.any(Function));
        });

        it('#ionViewDidEnter shows statusbar', () => {
            const spy = spyOn(sut.statusBar, 'show');
            sut.ionViewDidEnter();
            expect(spy).toHaveBeenCalled();
        });

        it('#ionViewDidEnter has lightContent style', () => {
            const spy = spyOn(sut.statusBar, 'styleLightContent');
            sut.ionViewDidEnter();
            expect(spy).toHaveBeenCalled();
        });
    });

    describe('and blackTranslucent style', () => {
        beforeEach(() => {
            const decorated = StatusBarStyle('blackTranslucent')(createMockedComponent());
            sut = new decorated(new StatusBarMock());
        });

        it('has defined #ionViewDidEnter', () => {
            expect(sut.ionViewDidEnter).toEqual(jasmine.any(Function));
        });

        it('#ionViewDidEnter shows statusbar', () => {
            const spy = spyOn(sut.statusBar, 'show');
            sut.ionViewDidEnter();
            expect(spy).toHaveBeenCalled();
        });

        it('#ionViewDidEnter has blackTranslucent style', () => {
            const spy = spyOn(sut.statusBar, 'styleBlackTranslucent');
            sut.ionViewDidEnter();
            expect(spy).toHaveBeenCalled();
        });
    });

    describe('and blackOpaque style', () => {
        beforeEach(() => {
            const decorated = StatusBarStyle('blackOpaque')(createMockedComponent());
            sut = new decorated(new StatusBarMock());
        });

        it('has defined #ionViewDidEnter', () => {
            expect(sut.ionViewDidEnter).toEqual(jasmine.any(Function));
        });

        it('#ionViewDidEnter shows statusbar', () => {
            const spy = spyOn(sut.statusBar, 'show');
            sut.ionViewDidEnter();
            expect(spy).toHaveBeenCalled();
        });

        it('#ionViewDidEnter has blackOpaque style', () => {
            const spy = spyOn(sut.statusBar, 'styleBlackOpaque');
            sut.ionViewDidEnter();
            expect(spy).toHaveBeenCalled();
        });
    });
});
