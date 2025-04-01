import * as wasm from "riichi-rs-bundlers";

console.log(wasm.calc(
    {
        closed_part: [1, 2, 3, 4, 5, 6, 7, 8, 9, 14, 14, 14, 18, 18],
        open_part: [],
        options: {
            bakaze: 29,
            jikaze: 29,
            allow_aka: true,
            allow_kuitan: true,
        }
    }
));

