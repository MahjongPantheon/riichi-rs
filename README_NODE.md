## Riichi-rs-node

Small wrapper around [riichi-rust](https://github.com/MahjongPantheon/riichi-rust) to compile it to wasm, node
version.

## Usage

- Install package: `npm install riichi-rs-node`
- Import package in your js file:
  `const riichi = require("riichi-rs-node");`
- Invoke function as follows:

```
console.log(riichi.calc(
    {
        closed_part: [1, 2, 3, 4, 5, 6, 7, 8, 9, 14, 14, 14, 18, 18],
        open_part: [],
        options: {
            dora: [],
            aka_count: 0,
            first_take: false,
            riichi: false,
            ippatsu: false,
            double_riichi: false,
            last_take: false,
            after_kan: false,
            tile_discarded_by_someone: -1,
            bakaze: 29,
            jikaze: 29,
            allow_aka: true,
            allow_kuitan: true,
            with_kiriage: false,
            disabled_yaku: [],
            local_yaku_enabled: [],
            all_local_yaku_enabled: false,
            allow_double_yakuman: false,
            taken_tile: -1,
            last_tile: false
        },
        calc_hairi: false
    }
))
```
