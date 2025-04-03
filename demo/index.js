import {calc, Tile, Yaku} from "riichi-rs-bundlers";

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
        options: {
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