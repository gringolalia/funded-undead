/* eslint-disable */
import $ from "jquery";
import whatInput from "what-input";

import Vue from "vue";
import wrap from "@vue/web-component-wrapper";
import MyCustomElement from "./MyCustomElement";
import MyLogoElement from "./LogoElement";
import VueMethodSlider from "./VueMethodSlider";
import WindowSizeElement from "./WindowSizeElement";

const CustomElement = wrap(Vue, MyCustomElement);
const CustomElement2 = wrap(Vue, MyLogoElement);
const CustomElement3 = wrap(Vue, VueMethodSlider, { shadow: false });
const CustomElement4 = wrap(Vue, WindowSizeElement);

window.customElements.define("my-custom-element", CustomElement);
window.customElements.define("logo-element", CustomElement2);
window.customElements.define("vue-method-slider", CustomElement3);
window.customElements.define("window-size-element", CustomElement4);

// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
// window.jQuery = $;
// require('foundation-sites');
window.$ = $;
import Foundation from "foundation-sites";

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';
import "./lib/external.js";
import "./lib/pageTop.js";
import animation from "./lib/animation";

$(document).foundation();

animation();
