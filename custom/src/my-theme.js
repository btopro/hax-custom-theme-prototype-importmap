import { HAXCMSLitElementTheme } from "@haxtheweb/haxcms-elements/lib/core/HAXCMSLitElementTheme.js";

export class MyTheme extends HAXCMSLitElementTheme {
    constructor() {
        super();
    }
    static get tag() {
        return 'my-theme';
    }
}
globalThis.customElements.define(MyTheme.tag, MyTheme);