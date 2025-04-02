use riichi_rust::{RiichiHand, RiichiOptions, RiichiResult, calc_riichi};
use serde::{Deserialize, Serialize};
use serde_wasm_bindgen::{from_value, to_value};
use wasm_bindgen::prelude::*;

#[derive(Deserialize)]
pub struct RiichiHandInput {
    pub closed_part: Vec<i8>,
    pub open_part: Vec<(bool, Vec<i8>)>, // (isOpenMeld, tiles)
    pub options: RiichiOptions,
    pub calc_hairi: bool,
}

#[derive(Serialize)]
pub struct RiichiCalcResult {
    pub result: Result<RiichiResult, String>,
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
        Err(e) => to_value(&e.to_string()).unwrap(),
    }
}
