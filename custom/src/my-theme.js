import { html, css } from "@haxtheweb/haxcms-elements/lib/core/HAXCMSLitElementTheme.js";
import { PolarisFlexTheme } from "@haxtheweb/polaris-theme/lib/polaris-flex-theme.js"

export class MyTheme extends PolarisFlexTheme {
    constructor() {
        super();
    }
    static get tag() {
        return 'my-theme';
    }
}
globalThis.customElements.define(MyTheme.tag, MyTheme);