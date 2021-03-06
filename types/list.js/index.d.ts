// Type definitions for list.js 1.5
// Project: http://listjs.com
// Definitions by: Jeffrey Meng <https://github.com/jeffreymeng>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

interface ListOptions {
    valueNames?: string[];
    item?: string;
    listClass?: string;
    searchClass?: string;
    sortClass?: string;
    indexAsync?: boolean;
    page?: number;
    i?: number;
    pagination?: boolean;
}

interface SortOptions {
    order?: string;
    alphabet?: string;
    insensitive?: boolean;
    sortFunction?: ((a: object, b: object) => number|undefined);
}

declare class List {
    listContainer: HTMLElement;
    list: HTMLElement;
    items: object[];
    visibleItems: object[];
    matchingItems: object[];
    searched: boolean;
    filtered: boolean;

    constructor(element: string|HTMLElement, options?: ListOptions, values?: object[]);

    add(values: object[], callback?: (item: ListItem) => void): void;
    remove(valueName: string, value: any): number;
    get(valueName: string, value: any): ListItem[];
    sort(valueName: string, options: SortOptions): void;
    search(searchString: string, columns?: string[]): void;
    clear(): void;
    filter(filterFunction: (item: ListItem) => boolean): void;
    size(): number;
    show(i: number, page: number): void;
    update(): void;
    reIndex(): void;
    fuzzySearch(searchString: string, columns?: string[]): void;
    on(event: string, callback: () => void): void;
}

declare class ListItem {
    elm: HTMLElement;

    values(newValues: object): void;
    values(): object;
    show(): void;
    hide(): void;
    matching(): boolean;
    visible(): boolean;
}

export = List;
