use riichi_rust::{RiichiHand, RiichiOptions, RiichiResult, calc_riichi};
use serde::{Deserialize, Serialize};
use serde_wasm_bindgen::{from_value, to_value};
use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[derive(Deserialize)]
pub struct RiichiHandInput {
    pub closed_part: Vec<i32>,
    pub open_part: Vec<(bool, Vec<i32>)>, // (isOpenMeld, tiles)
    pub options: RiichiOptions,
    pub calc_hairi: bool,
}

#[derive(Serialize)]
pub struct RiichiCalcResult {
    pub result: Result<RiichiResult, String>,
}

#[wasm_bindgen]
pub fn init_panic_hook() {
    console_error_panic_hook::set_once();
}

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
pub fn calc(val: JsValue) -> JsValue {
    let i: Result<RiichiHandInput, serde_wasm_bindgen::Error> = from_value(val);
    match i {
        Ok(mut i) => {
            let result = calc_riichi(
                RiichiHand {
                    open_part: i.open_part,
                    closed_part: i.closed_part,
                },
                &mut i.options,
                i.calc_hairi,
            );
            to_value(&result).unwrap()
        }
        Err(e) => {
            log(e.to_string().as_str());
            to_value(&0).unwrap()
        }
    }
}
