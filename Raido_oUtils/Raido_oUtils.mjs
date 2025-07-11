import { write, read, concatBytes } from "https://kajizukataichi.github.io/mystia/runtime/ffi.mjs";
import { MystiaWebLib } from "https://kajizukataichi.github.io/mystia/runtime/lib/std.mjs";

let getMystiaDom = (id) => `mystia-dom-${id}`;

export class Raido_oUtils extends MystiaWebLib {
	constructor() {
		super();
		this.functions.prp_elm = (id, property) => {
			property = read(this.instance, "str", property);
			let elm = document.getElementById(getMystiaDom(id));
			if (elm === null) elm = document.querySelector(id);
			console.log(elm, property, elm[property])
			if (property == "style") {
				return write(this.instance, "str", elm.style.cssText);
			} else {
				return write(this.instance, "str", elm[property]);
			}
		};
	}
}