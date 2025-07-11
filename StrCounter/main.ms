type Elm = int;

load concat(a: str, b: str): str;
load to_str(n: num): str;
load strlen(s: str): int;
load new_elm(tag: str, parent: Elm): Elm;
load upd_elm(id: Elm, prop: str, content: str): void;
load evt_elm(id: Elm, name: str, func: str): void;
load Raido_oUtils::{
	prp_elm(id: Elm, prop: str): str
};

pub let model = @{
	title: "StrCounter",
	count: 0,
	layout: @{
		panel: null:Elm
	}
};

let view() = {
	let formatted = "文字数: " + (model.count: str);
	upd_elm(model.layout.panel, "innerHTML", formatted)
};

let frame = new_elm("div", null: Elm);
frame.upd_elm("style", "margin: 10rem");
frame.evt_elm("keydown", "inc_key");

let title = new_elm("h1", frame);
title.upd_elm("innerHTML", model.title);

pub let update_count() = {
	let model.count = strlen(textarea.prp_elm("value"));
	view()
};
pub let textarea = new_elm("textarea", frame);
textarea.evt_elm("input", "update_count");
textarea.upd_elm("style", "width: 100%");
textarea.upd_elm("style", "height: 15rem");

let panel = new_elm("p", frame);
let model.layout.panel = panel;

view();
model.title