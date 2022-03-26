declare let _$_: {
    new (): {};
} & typeof globalThis;
declare class $ extends _$_ {
}
declare namespace $ {
    export type $ = typeof $$;
    export class $$ extends $ {
    }
    namespace $$ {
        type $$ = $;
    }
    export {};
}

declare namespace $ {
    const $mol_ambient_ref: unique symbol;
    type $mol_ambient_context = $;
    function $mol_ambient(this: $ | void, overrides: Partial<$>): $;
}

declare namespace $ {
    function $mol_delegate<Value extends object>(proto: Value, target: () => Value): Value;
}

declare namespace $ {
    const $mol_owning_map: WeakMap<any, any>;
    function $mol_owning_allow<Having>(having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_get<Having, Owner extends object>(having: Having, Owner?: {
        new (): Owner;
    }): Owner | null;
    function $mol_owning_check<Owner, Having>(owner: Owner, having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_catch<Owner, Having>(owner: Owner, having: Having): boolean;
}

declare namespace $ {
    function $mol_fail(error: any): never;
}

declare namespace $ {
    function $mol_fail_hidden(error: any): never;
}

declare namespace $ {
    type $mol_type_writable<T> = {
        -readonly [P in keyof T]: T[P];
    };
}

declare namespace $ {
    class $mol_object2 {
        static $: typeof $$;
        [$mol_ambient_ref]: typeof $$;
        get $(): $;
        set $(next: $);
        static create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        static [Symbol.toPrimitive](): any;
        static toString(): any;
        destructor(): void;
        toString(): any;
        toJSON(): any;
    }
}

declare namespace $ {
    class $mol_after_tick extends $mol_object2 {
        task: () => void;
        promise: any;
        cancelled: boolean;
        constructor(task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    var $mol_dom_context: typeof globalThis;
}

declare namespace $ {
}

declare namespace $ {
    function $mol_style_attach(id: string, text: string): HTMLStyleElement | null;
}

declare let $my_lom_dom_context: typeof globalThis;

declare function $my_lom_dom_render(node: Element | DocumentFragment, children: NodeList | Array<Node | string | null>): void;

declare class $my_lom_view {
    static root: () => typeof $my_lom_view;
    static mount(): void;
    dom_name(): string;
    attr(): {
        [key: string]: string | number | boolean | null;
    };
    event(): {
        [key: string]: (e: Event) => any;
    };
    field(): {
        [key: string]: any;
    };
    sub(): Array<$my_lom_view | Node | string | number | boolean>;
    _dom_node: Element;
    dom_node(): Element;
    dom_node_actual(): Element;
    dom_tree(): Element;
}

declare class $my_lom_storage {
    static value<Value>(key: string, next?: Value): any;
}

declare class $my_lom_button extends $my_lom_view {
    dom_name(): string;
    title(): string;
    click(e: Event): void;
    sub(): string[];
    event(): {
        click: (e: Event) => void;
    };
}
declare class $my_lom_button_minor extends $my_lom_button {
    attr(): {
        $my_lom_button_minor: boolean;
    };
}

declare class $my_lom_input extends $my_lom_view {
    dom_name(): string;
    type(): string;
    _value: string;
    value(next?: string): string;
    event_change(e: Event): void;
    field(): {
        value: string;
    };
    attr(): {
        type: string;
    };
    event(): {
        input: (e: Event) => void;
    };
}

declare namespace $ {
}

declare class $my_counter extends $my_lom_view {
    count(next?: number): any;
    count_str(next?: string): string;
    inc(): void;
    dec(): void;
    _Inc: $my_lom_view;
    Inc(): $my_lom_view;
    _Dec: $my_lom_view;
    Dec(): $my_lom_view;
    _Count: $my_lom_view;
    Count(): $my_lom_view;
    sub(): $my_lom_view[];
}

export = $;