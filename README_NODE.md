## Riichi-rs-node

Small wrapper around [riichi-rust](https://github.com/MahjongPantheon/riichi-rust) to compile it to wasm, node
version.

## Usage

- Install package: `npm install riichi-rs-node`
- Invoke function as follows:

```typescript
const {calc, Tile, Yaku} = require("riichi-rs-node");

console.log(calc(
    {
        closed_part: [ // closed part of the hand. Taken tile from the wall should be the last here in case of tsumo.
            Tile.M1,
            Tile.M2,
            Tile.M3,
            Tile.M4,
            Tile.M5,
            Tile.M6,
            Tile.P9,
            Tile.P9
        ],
        open_part: [ // melds (open part)
            [
                true, // if the meld is open (pon, chi, daiminkan or shominkan);
                [Tile.M7, Tile.M8, Tile.M9],
            ],
            [
                false, // this one is ankan, so we pass false here
                [Tile.P5, Tile.P5, Tile.P5, Tile.P5] // Tiles in meld
            ],
        ],
        options: { // Note: all options are arbitrary with reasonable defaults. You can pass only few of them here.
            dora: [Tile.M3], // actual dora tiles (not indicators value)
            aka_count: 0, // count of akadora in hand
            first_take: false, // if this hand is completed on first take
            riichi: false, // if there was riichi declared
            ippatsu: false, // if ippatsu happened
            double_riichi: false, // if there was riichi declared on first turn.
            // Note that ankans are allowed, but checking if the ankan was declared before double riichi
            // (and voiding double riichi consequently) is responsibility of external code.

            after_kan: false, // chankan (on ron) or rinshan (on tsumo)
            tile_discarded_by_someone: -1, // Tile the hand won on. If tsumo, pass -1
            bakaze: Tile.South, // Round wind
            jikaze: Tile.East, // Seat wind
            allow_aka: true, // if akadora is allowed
            allow_kuitan: true, // if open tanyao is allowed
            with_kiriage: false, // if 4/30 and 3/60 hands are treated as mangan
            disabled_yaku: [Yaku.Renhou], // List of yaku to be disabled
            local_yaku_enabled: [Yaku.Daisharin], // List of local yaku to be enabled
            all_local_yaku_enabled: false, // pass true here to enable all supported local yaku
            allow_double_yakuman: false, // if double yakuman is allowed
            last_tile: false // haitei or houtei
        },
        calc_hairi: false // if completions and discard variants should be calculated
    }
));

/*
> -> Result {
    "is_agari": true, // The hand is a winning hand
    "yakuman": 0, // Cound of yakuman in the hand
    "han": 2, // Han count
    "fu": 40, // Fu count
    "ten": 3900, // Amount of paid score points, total
    "outgoing_ten": [
        1300, // This is amount of points paid by dealer on non-dealer tsumo, or by all on dealer tsumo
        700 // This is amount of points paid by non-dealer on non-dealer tsumo
    ],
    "yaku": { // Array<{ Yaku_id -> han count }>
        "30": 1,
        "53": 1
    }
}
 */
```

Note that returned yaku IDs are numeric strings, but you can `parseInt` them and then match over `Yaku` const
enum to make them readable. 