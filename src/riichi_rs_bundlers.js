import * as orig from './riichi_rs.js';

const defaults = {
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
};

export const calc = (val) => {
    const input = {
        open_part: val.open_part,
        closed_part: val.closed_part,
        calc_hairi: val.calc_hairi ?? false,
        options: {
            ...defaults,
            ...val.options
        }
    };
    const result = orig.calc(input);
    if (result.Ok) {
        return result.Ok;
    } else {
        throw new Error(result.Err);
    }
};

export const Tile = {
    M1: 1,
    M2: 2,
    M3: 3,
    M4: 4,
    M5: 5,
    M6: 6,
    M7: 7,
    M8: 8,
    M9: 9,

    P1: 10,
    P2: 11,
    P3: 12,
    P4: 13,
    P5: 14,
    P6: 15,
    P7: 16,
    P8: 17,
    P9: 18,

    S1: 19,
    S2: 20,
    S3: 21,
    S4: 22,
    S5: 23,
    S6: 24,
    S7: 25,
    S8: 26,
    S9: 27,

    East: 28,
    South: 29,
    West: 30,
    North: 31,

    Haku: 32,
    Hatsu: 33,
    Chun: 34,
};

export const Yaku = {
    Kokushimusou13Sides: 0,
    Kokushimusou: 1,
    Chuurenpoto9Sides: 2,
    Chuurenpoto: 3,
    SuuankouTanki: 4,
    Suuankou: 5,
    Daisuushi: 6,
    Shosuushi: 7,
    Daisangen: 8,
    Tsuuiisou: 9,
    Ryuuiisou: 10,
    Chinroutou: 11,
    Suukantsu: 12,
    Tenhou: 13,
    Chihou: 14,
    Renhou: 15,
    Daisharin: 16,
    Chinitsu: 17,
    Honitsu: 18,
    Ryanpeikou: 19,
    Junchan: 20,
    Chanta: 21,
    Toitoi: 22,
    Honroutou: 23,
    Sankantsu: 24,
    Shosangen: 25,
    SanshokuDoukou: 26,
    Sanankou: 27,
    Chiitoitsu: 28,
    DaburuRiichi: 29,
    Ittsu: 30,
    Sanshoku: 31,
    Tanyao: 32,
    Pinfu: 33,
    Iipeikou: 34,
    Menzentsumo: 35,
    Riichi: 36,
    Ippatsu: 37,
    Rinshan: 38,
    Chankan: 39,
    Haitei: 40,
    Houtei: 41,
    RoundWindEast: 42,
    RoundWindSouth: 43,
    RoundWindWest: 44,
    RoundWindNorth: 45,
    OwnWindEast: 46,
    OwnWindSouth: 47,
    OwnWindWest: 48,
    OwnWindNorth: 49,
    Haku: 50,
    Hatsu: 51,
    Chun: 52,

    Dora: 53,
    Uradora: 54,
    Akadora: 55,
};