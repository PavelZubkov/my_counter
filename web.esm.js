"use strict";
function require( path ){ return $node[ path ] };
"use strict"

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var globalThis = globalThis || ( typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : this )
var $ = ( typeof module === 'object' ) ? ( module['export'+'s'] = globalThis ) : globalThis
$.$$ = $

;

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "../" ) ] }; 
;
"use strict";
Error.stackTraceLimit = 50;
var $;
(function ($) {
})($ || ($ = {}));
module.exports = $;
//mam.ts
;

$node[ "../mam.ts" ] = $node[ "../mam.ts" ] = module.exports }.call( {} , {} )
;
"use strict";
var $;
(function ($) {
    $.$mol_ambient_ref = Symbol('$mol_ambient_ref');
    function $mol_ambient(overrides) {
        return Object.setPrototypeOf(overrides, this || $);
    }
    $.$mol_ambient = $mol_ambient;
})($ || ($ = {}));
//mol/ambient/ambient.ts
;
"use strict";
var $;
(function ($) {
    const instances = new WeakSet();
    function $mol_delegate(proto, target) {
        const proxy = new Proxy(proto, {
            get: (_, field) => {
                const obj = target();
                let val = Reflect.get(obj, field);
                if (typeof val === 'function') {
                    val = val.bind(obj);
                }
                return val;
            },
            has: (_, field) => Reflect.has(target(), field),
            set: (_, field, value) => Reflect.set(target(), field, value),
            getOwnPropertyDescriptor: (_, field) => Reflect.getOwnPropertyDescriptor(target(), field),
            ownKeys: () => Reflect.ownKeys(target()),
            getPrototypeOf: () => Reflect.getPrototypeOf(target()),
            setPrototypeOf: (_, donor) => Reflect.setPrototypeOf(target(), donor),
            isExtensible: () => Reflect.isExtensible(target()),
            preventExtensions: () => Reflect.preventExtensions(target()),
            apply: (_, self, args) => Reflect.apply(target(), self, args),
            construct: (_, args, retarget) => Reflect.construct(target(), args, retarget),
            defineProperty: (_, field, descr) => Reflect.defineProperty(target(), field, descr),
            deleteProperty: (_, field) => Reflect.deleteProperty(target(), field),
        });
        instances.add(proxy);
        return proxy;
    }
    $.$mol_delegate = $mol_delegate;
    Reflect.defineProperty($mol_delegate, Symbol.hasInstance, {
        value: (obj) => instances.has(obj),
    });
})($ || ($ = {}));
//mol/delegate/delegate.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_owning_map = new WeakMap();
    function $mol_owning_allow(having) {
        try {
            if (!having)
                return false;
            if (typeof having !== 'object')
                return false;
            if (having instanceof $mol_delegate)
                return false;
            if (typeof having['destructor'] !== 'function')
                return false;
            return true;
        }
        catch {
            return false;
        }
    }
    $.$mol_owning_allow = $mol_owning_allow;
    function $mol_owning_get(having, Owner) {
        if (!$mol_owning_allow(having))
            return null;
        while (true) {
            const owner = $.$mol_owning_map.get(having);
            if (!owner)
                return owner;
            if (!Owner)
                return owner;
            if (owner instanceof Owner)
                return owner;
            having = owner;
        }
    }
    $.$mol_owning_get = $mol_owning_get;
    function $mol_owning_check(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having) !== owner)
            return false;
        return true;
    }
    $.$mol_owning_check = $mol_owning_check;
    function $mol_owning_catch(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having))
            return false;
        $.$mol_owning_map.set(having, owner);
        return true;
    }
    $.$mol_owning_catch = $mol_owning_catch;
})($ || ($ = {}));
//mol/owning/owning.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail(error) {
        throw error;
    }
    $.$mol_fail = $mol_fail;
})($ || ($ = {}));
//mol/fail/fail.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail_hidden(error) {
        throw error;
    }
    $.$mol_fail_hidden = $mol_fail_hidden;
})($ || ($ = {}));
//mol/fail/hidden/hidden.ts
;
"use strict";
//mol/type/writable/writable.ts
;
"use strict";
var $;
(function ($) {
    class $mol_object2 {
        static $ = $;
        [$mol_ambient_ref] = null;
        get $() {
            if (this[$mol_ambient_ref])
                return this[$mol_ambient_ref];
            const owner = $mol_owning_get(this);
            return this[$mol_ambient_ref] = owner?.$ || $mol_object2.$;
        }
        set $(next) {
            if (this[$mol_ambient_ref])
                $mol_fail_hidden(new Error('Context already defined'));
            this[$mol_ambient_ref] = next;
        }
        static create(init) {
            const obj = new this;
            if (init)
                init(obj);
            return obj;
        }
        static [Symbol.toPrimitive]() {
            return this.toString();
        }
        static toString() {
            if (Symbol.toStringTag in this)
                return this[Symbol.toStringTag];
            return this.name;
        }
        destructor() { }
        toString() {
            return this[Symbol.toStringTag] || this.constructor.name + '()';
        }
        toJSON() {
            return this.toString();
        }
    }
    $.$mol_object2 = $mol_object2;
})($ || ($ = {}));
//mol/object2/object2.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_tick extends $mol_object2 {
        task;
        promise;
        cancelled = false;
        constructor(task) {
            super();
            this.task = task;
            this.promise = Promise.resolve().then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_tick = $mol_after_tick;
})($ || ($ = {}));
//mol/after/tick/tick.ts
;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));
//mol/dom/context/context.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = self;
})($ || ($ = {}));
//mol/dom/context/context.web.ts
;
"use strict";
var $;
(function ($) {
    let all = [];
    let el = null;
    let timer = null;
    function $mol_style_attach(id, text) {
        all.push(`/* ${id} */\n\n${text}`);
        if (timer)
            return el;
        const doc = $mol_dom_context.document;
        if (!doc)
            return null;
        el = doc.createElement('style');
        el.id = `$mol_style_attach`;
        doc.head.appendChild(el);
        timer = new $mol_after_tick(() => {
            el.innerHTML = '\n' + all.join('\n\n');
            all = [];
            el = null;
            timer = null;
        });
        return el;
    }
    $.$mol_style_attach = $mol_style_attach;
})($ || ($ = {}));
//mol/style/attach/attach.ts
;
"use strict";
let $my_lom_dom_context;
//my/lom/dom/context/context.ts
;
"use strict";
$my_lom_dom_context = self;
//my/lom/dom/context/context.web.ts
;
"use strict";
setInterval(() => {
    $my_lom_dom_context.document.documentElement.setAttribute('my_lom_theme', new Date().getSeconds() < 30 ? 'light' : 'dark');
}, 1_000);
//my/lom/theme/theme.ts
;
"use strict";
function $my_lom_dom_render(node, children) {
    const node_set = new Set(children);
    let next = node.firstChild;
    for (const view of children) {
        if (view === null)
            continue;
        if (view instanceof Node) {
            while (true) {
                if (!next) {
                    node.append(view);
                    break;
                }
                if (next === view) {
                    next = next.nextSibling;
                    break;
                }
                else {
                    if (node_set.has(next)) {
                        next.before(view);
                        break;
                    }
                    else {
                        const nn = next.nextSibling;
                        next.remove();
                        next = nn;
                    }
                }
            }
        }
        else {
            if (next && next.nodeName === '#text') {
                const str = String(view);
                if (next.nodeValue !== str)
                    next.nodeValue = str;
                next = next.nextSibling;
            }
            else {
                const text = $my_lom_dom_context.document.createTextNode(String(view));
                node.insertBefore(text, next);
            }
        }
    }
    while (next) {
        const curr = next;
        next = curr.nextSibling;
        curr.remove();
    }
}
//my/lom/dom/render/render.ts
;
"use strict";
class $my_lom_view {
    static root;
    static mount() {
        const node = $my_lom_dom_context.document.querySelector('#root');
        if (!node)
            return;
        const View = this.root();
        const obj = new View;
        node.replaceWith(obj.dom_tree());
        setInterval(() => obj.dom_tree(), 100);
    }
    dom_name() {
        return 'div';
    }
    attr() {
        return {};
    }
    event() {
        return {};
    }
    field() {
        return {};
    }
    sub() {
        return [];
    }
    _dom_node = null;
    dom_node() {
        if (this._dom_node)
            return this._dom_node;
        const node = $my_lom_dom_context.document.createElement(this.dom_name());
        Object.entries(this.event()).forEach(([name, fn]) => node.addEventListener(name, fn));
        return this._dom_node = node;
    }
    dom_node_actual() {
        const node = this.dom_node();
        Object.entries(this.attr()).forEach(([name, val]) => node.setAttribute(name, String(val)));
        Object.entries(this.field()).forEach(([name, val]) => node[name] = val);
        node.setAttribute('view', this.constructor.name);
        return node;
    }
    dom_tree() {
        const node = this.dom_node_actual();
        const node_list = this.sub().map(node => {
            if (node === null)
                return null;
            return node instanceof $my_lom_view ? node.dom_tree() : String(node);
        });
        $my_lom_dom_render(node, node_list);
        return node;
    }
}
//my/lom/view/view.ts
;
"use strict";
setTimeout(() => $my_lom_view.mount());
//my/lom/view/view.web.ts
;
"use strict";
class $my_lom_storage {
    static value(key, next) {
        if (next === undefined)
            return JSON.parse(localStorage.getItem(key) ?? 'null');
        if (next === null)
            localStorage.removeItem(key);
        else
            localStorage.setItem(key, JSON.stringify(next));
        return next;
    }
}
//my/lom/storage/storage.ts
;
"use strict";
class $my_lom_button extends $my_lom_view {
    dom_name() { return 'button'; }
    title() { return ''; }
    click(e) { }
    sub() {
        return [this.title()];
    }
    event() {
        return {
            click: (e) => this.click(e)
        };
    }
}
class $my_lom_button_minor extends $my_lom_button {
    attr() {
        return {
            '$my_lom_button_minor': true,
        };
    }
}
//my/lom/button/button.ts
;
"use strict";
class $my_lom_input extends $my_lom_view {
    dom_name() { return 'input'; }
    type() { return 'text'; }
    _value = '';
    value(next = this._value) {
        return this._value = next;
    }
    event_change(e) {
        this.value(e.target.value);
    }
    field() {
        return {
            value: this.value(),
        };
    }
    attr() {
        return {
            type: this.type(),
        };
    }
    event() {
        return {
            input: (e) => this.event_change(e),
        };
    }
}
//my/lom/input/input.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("my/counter/counter.css", "[my_lom_theme=\"light\"] {\n\tbackground-color: azure;\n}\n\n[my_lom_theme=\"dark\"] {\n\tbackground-color: black;\n}\n");
})($ || ($ = {}));
//my/counter/-css/counter.css.ts
;
"use strict";
class $my_counter extends $my_lom_view {
    count(next) {
        return $my_lom_storage.value('count', next) ?? 0;
    }
    count_str(next) {
        return String(this.count(next ? Number(next) : undefined));
    }
    inc() {
        this.count(this.count() + 1);
    }
    dec() {
        this.count(this.count() - 1);
    }
    _Inc = null;
    Inc() {
        if (this._Inc)
            return this._Inc;
        const obj = new $my_lom_button;
        obj.title = () => '+';
        obj.click = () => this.inc();
        return this._Inc = obj;
    }
    _Dec = null;
    Dec() {
        if (this._Dec)
            return this._Dec;
        const obj = new $my_lom_button;
        obj.title = () => '-';
        obj.click = () => this.dec();
        return this._Dec = obj;
    }
    _Count = null;
    Count() {
        if (this._Count)
            return this._Count;
        const obj = new $my_lom_input;
        obj.value = (next) => this.count_str(next);
        return this._Count = obj;
    }
    sub() {
        return [
            this.Dec(),
            this.Count(),
            this.Inc(),
        ];
    }
}
$my_lom_view.root = () => $my_counter;
//my/counter/counter.ts
;
export default $
//# sourceMappingURL=web.esm.js.map
