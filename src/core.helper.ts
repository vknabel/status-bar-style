export interface ClassOf<T> {
    prototype: T;
};

/* Helper for Ionic Lifecycle Hooks */
export interface ViewWillEnter {
    ionViewWillEnter(): void;
}

export interface ViewDidEnter {
    ionViewDidEnter(): void;
}

export interface ViewWillLeave {
    ionViewWillLeave(): void;
}

export interface ViewDidLeave {
    ionViewDidLeave(): void;
}
