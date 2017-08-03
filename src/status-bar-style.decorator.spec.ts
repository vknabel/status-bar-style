import { ViewWillEnter, ViewWillLeave } from './core.helper';
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

describe('statusbar decorator without #ionViewWillEnter', () => {
    let sut: ProvidesStatusBar & ViewWillEnter & ViewWillLeave;

    describe('and no style', () => {
        beforeEach(() => {
            const decorated = StatusBarStyle('none')(createMockedComponent());
            sut = new decorated(new StatusBarMock());
        });

        it('has defined #ionViewWillEnter', () => {
            expect(sut.ionViewWillEnter).toEqual(jasmine.any(Function));
        });

        it('#ionViewWillEnter hides statusbar', () => {
            const spy = spyOn(sut.statusBar, 'hide');
            sut.ionViewWillEnter();
            expect(spy).toHaveBeenCalled();
        });
    });

    describe('and default style', () => {
        beforeEach(() => {
            const decorated = StatusBarStyle('default')(createMockedComponent());
            sut = new decorated(new StatusBarMock());
        });

        it('has defined #ionViewWillEnter', () => {
            expect(sut.ionViewWillEnter).toEqual(jasmine.any(Function));
        });

        it('#ionViewWillEnter shows statusbar', () => {
            const spy = spyOn(sut.statusBar, 'show');
            sut.ionViewWillEnter();
            expect(spy).toHaveBeenCalled();
        });

        it('#ionViewWillEnter has default style', () => {
            const spy = spyOn(sut.statusBar, 'styleDefault');
            sut.ionViewWillEnter();
            expect(spy).toHaveBeenCalled();
        });
    });

    describe('and lightContent style', () => {
        beforeEach(() => {
            const decorated = StatusBarStyle('lightContent')(createMockedComponent());
            sut = new decorated(new StatusBarMock());
        });

        it('has defined #ionViewWillEnter', () => {
            expect(sut.ionViewWillEnter).toEqual(jasmine.any(Function));
        });

        it('#ionViewWillEnter shows statusbar', () => {
            const spy = spyOn(sut.statusBar, 'show');
            sut.ionViewWillEnter();
            expect(spy).toHaveBeenCalled();
        });

        it('#ionViewWillEnter has lightContent style', () => {
            const spy = spyOn(sut.statusBar, 'styleLightContent');
            sut.ionViewWillEnter();
            expect(spy).toHaveBeenCalled();
        });
    });

    describe('and blackTranslucent style', () => {
        beforeEach(() => {
            const decorated = StatusBarStyle('blackTranslucent')(createMockedComponent());
            sut = new decorated(new StatusBarMock());
        });

        it('has defined #ionViewWillEnter', () => {
            expect(sut.ionViewWillEnter).toEqual(jasmine.any(Function));
        });

        it('#ionViewWillEnter shows statusbar', () => {
            const spy = spyOn(sut.statusBar, 'show');
            sut.ionViewWillEnter();
            expect(spy).toHaveBeenCalled();
        });

        it('#ionViewWillEnter has blackTranslucent style', () => {
            const spy = spyOn(sut.statusBar, 'styleBlackTranslucent');
            sut.ionViewWillEnter();
            expect(spy).toHaveBeenCalled();
        });
    });

    describe('and blackOpaque style', () => {
        beforeEach(() => {
            const decorated = StatusBarStyle('blackOpaque')(createMockedComponent());
            sut = new decorated(new StatusBarMock());
        });

        it('has defined #ionViewWillEnter', () => {
            expect(sut.ionViewWillEnter).toEqual(jasmine.any(Function));
        });

        it('#ionViewWillEnter shows statusbar', () => {
            const spy = spyOn(sut.statusBar, 'show');
            sut.ionViewWillEnter();
            expect(spy).toHaveBeenCalled();
        });

        it('#ionViewWillEnter has blackOpaque style', () => {
            const spy = spyOn(sut.statusBar, 'styleBlackOpaque');
            sut.ionViewWillEnter();
            expect(spy).toHaveBeenCalled();
        });
    });
});
