export interface ClassOf<T> {
    prototype: T;
};

/* Helper for Ionic Lifecycle Hooks */
export interface ViewWillEnter {
    ionViewWillEnter(): void;
}

export interface ViewWillLeave {
    ionViewWillLeave(): void;
}
