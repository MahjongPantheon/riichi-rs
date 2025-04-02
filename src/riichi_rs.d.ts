/* tslint:disable */
/* eslint-disable */

type Tile_M1 = 1;
type Tile_M2 = 2;
type Tile_M3 = 3;
type Tile_M4 = 4;
type Tile_M5 = 5;
type Tile_M6 = 6;
type Tile_M7 = 7;
type Tile_M8 = 8;
type Tile_M9 = 9;

type Tile_P1 = 10;
type Tile_P2 = 11;
type Tile_P3 = 12;
type Tile_P4 = 13;
type Tile_P5 = 14;
type Tile_P6 = 15;
type Tile_P7 = 16;
type Tile_P8 = 17;
type Tile_P9 = 18;

type Tile_S1 = 19;
type Tile_S2 = 20;
type Tile_S3 = 21;
type Tile_S4 = 22;
type Tile_S5 = 23;
type Tile_S6 = 24;
type Tile_S7 = 25;
type Tile_S8 = 26;
type Tile_S9 = 27;

type Tile_East = 28;
type Tile_South = 29;
type Tile_West = 30;
type Tile_North = 31;

type Tile_Haku = 32;
type Tile_Hatsu = 33;
type Tile_Chun = 34;

type Tile =
    | Tile_M1
    | Tile_M2
    | Tile_M3
    | Tile_M4
    | Tile_M5
    | Tile_M6
    | Tile_M7
    | Tile_M8
    | Tile_M9
    | Tile_P1
    | Tile_P2
    | Tile_P3
    | Tile_P4
    | Tile_P5
    | Tile_P6
    | Tile_P7
    | Tile_P8
    | Tile_P9
    | Tile_S1
    | Tile_S2
    | Tile_S3
    | Tile_S4
    | Tile_S5
    | Tile_S6
    | Tile_S7
    | Tile_S8
    | Tile_S9
    | Tile_East
    | Tile_South
    | Tile_West
    | Tile_North
    | Tile_Haku
    | Tile_Hatsu
    | Tile_Chun
    ;

type Meld = [true, [Tile, Tile, Tile]] | [boolean, [Tile, Tile, Tile, Tile]];

type Yaku_Kokushimusou13Sides = 0;
type Yaku_Kokushimusou = 1;
type Yaku_Chuurenpoto9Sides = 2;
type Yaku_Chuurenpoto = 3;
type Yaku_SuuankouTanki = 4;
type Yaku_Suuankou = 5;
type Yaku_Daisuushi = 6;
type Yaku_Shosuushi = 7;
type Yaku_Daisangen = 8;
type Yaku_Tsuuiisou = 9;
type Yaku_Ryuuiisou = 10;
type Yaku_Chinroutou = 11;
type Yaku_Suukantsu = 12;
type Yaku_Tenhou = 13;
type Yaku_Chihou = 14;
type Yaku_Renhou = 15;
type Yaku_Daisharin = 16;
type Yaku_Chinitsu = 17;
type Yaku_Honitsu = 18;
type Yaku_Ryanpeikou = 19;
type Yaku_Junchan = 20;
type Yaku_Chanta = 21;
type Yaku_Toitoi = 22;
type Yaku_Honroutou = 23;
type Yaku_Sankantsu = 24;
type Yaku_Shosangen = 25;
type Yaku_SanshokuDoukou = 26;
type Yaku_Sanankou = 27;
type Yaku_Chiitoitsu = 28;
type Yaku_DaburuRiichi = 29;
type Yaku_Ittsu = 30;
type Yaku_Sanshoku = 31;
type Yaku_Tanyao = 32;
type Yaku_Pinfu = 33;
type Yaku_Iipeikou = 34;
type Yaku_Menzentsumo = 35;
type Yaku_Riichi = 36;
type Yaku_Ippatsu = 37;
type Yaku_Rinshan = 38;
type Yaku_Chankan = 39;
type Yaku_Haitei = 40;
type Yaku_Houtei = 41;
type Yaku_RoundWindEast = 42;
type Yaku_RoundWindSouth = 43;
type Yaku_RoundWindWest = 44;
type Yaku_RoundWindNorth = 45;
type Yaku_OwnWindEast = 46;
type Yaku_OwnWindSouth = 47;
type Yaku_OwnWindWest = 48;
type Yaku_OwnWindNorth = 49;
type Yaku_Haku = 50;
type Yaku_Hatsu = 51;
type Yaku_Chun = 52;

type Yaku_Dora = 53;
type Yaku_Uradora = 54;
type Yaku_Akadora = 55;

type Yaku =
    | Yaku_Kokushimusou13Sides
    | Yaku_Kokushimusou
    | Yaku_Chuurenpoto9Sides
    | Yaku_Chuurenpoto
    | Yaku_SuuankouTanki
    | Yaku_Suuankou
    | Yaku_Daisuushi
    | Yaku_Shosuushi
    | Yaku_Daisangen
    | Yaku_Tsuuiisou
    | Yaku_Ryuuiisou
    | Yaku_Chinroutou
    | Yaku_Suukantsu
    | Yaku_Tenhou
    | Yaku_Chihou
    | Yaku_Renhou
    | Yaku_Daisharin
    | Yaku_Chinitsu
    | Yaku_Honitsu
    | Yaku_Ryanpeikou
    | Yaku_Junchan
    | Yaku_Chanta
    | Yaku_Toitoi
    | Yaku_Honroutou
    | Yaku_Sankantsu
    | Yaku_Shosangen
    | Yaku_SanshokuDoukou
    | Yaku_Sanankou
    | Yaku_Chiitoitsu
    | Yaku_DaburuRiichi
    | Yaku_Ittsu
    | Yaku_Sanshoku
    | Yaku_Tanyao
    | Yaku_Pinfu
    | Yaku_Iipeikou
    | Yaku_Menzentsumo
    | Yaku_Riichi
    | Yaku_Ippatsu
    | Yaku_Rinshan
    | Yaku_Chankan
    | Yaku_Haitei
    | Yaku_Houtei
    | Yaku_RoundWindEast
    | Yaku_RoundWindSouth
    | Yaku_RoundWindWest
    | Yaku_RoundWindNorth
    | Yaku_OwnWindEast
    | Yaku_OwnWindSouth
    | Yaku_OwnWindWest
    | Yaku_OwnWindNorth
    | Yaku_Haku
    | Yaku_Hatsu
    | Yaku_Chun
    | Yaku_Dora
    | Yaku_Uradora
    | Yaku_Akadora
    ;

export type RiichiInput = {
    closed_part: Tile[],
    open_part: Meld[],
    options?: Partial<{
        dora: Tile[],
        aka_count: number,
        first_take: boolean,
        riichi: boolean,
        ippatsu: boolean,
        double_riichi: boolean,
        after_kan: boolean,
        tile_discarded_by_someone: Tile | -1,
        bakaze: Tile,
        jikaze: Tile,
        allow_aka: boolean,
        allow_kuitan: boolean,
        with_kiriage: boolean,
        disabled_yaku: Yaku[],
        local_yaku_enabled: Yaku[],
        all_local_yaku_enabled: boolean,
        allow_double_yakuman: boolean,
        taken_tile: Tile | -1,
        last_tile: boolean
    }>,
    calc_hairi?: boolean
};

export type RiichiResult = {
    is_agari: boolean,
    yakuman: number,
    han: number,
    fu: number,
    ten: number, // points amount
    outgoing_ten?: [number, number], // (oya, ko) points or nothing
    yaku: Record<Yaku, number>, // (yaku_id => han_count)
    hairi?: {
        now: number,
        wait: Tile[],
        waits_after_discard: Array<[Tile, Tile[]]>,
    }
    hairi7and13?: {
        now: number,
        wait: Tile[],
        waits_after_discard: Array<[Tile, Tile[]]>,
    }
};

export function calc(val: RiichiInput): RiichiResult;

export const Yaku: {
    Kokushimusou13Sides: Yaku_Kokushimusou13Sides,
    Kokushimusou: Yaku_Kokushimusou,
    Chuurenpoto9Sides: Yaku_Chuurenpoto9Sides,
    Chuurenpoto: Yaku_Chuurenpoto,
    SuuankouTanki: Yaku_SuuankouTanki,
    Suuankou: Yaku_Suuankou,
    Daisuushi: Yaku_Daisuushi,
    Shosuushi: Yaku_Shosuushi,
    Daisangen: Yaku_Daisangen,
    Tsuuiisou: Yaku_Tsuuiisou,
    Ryuuiisou: Yaku_Ryuuiisou,
    Chinroutou: Yaku_Chinroutou,
    Suukantsu: Yaku_Suukantsu,
    Tenhou: Yaku_Tenhou,
    Chihou: Yaku_Chihou,
    Renhou: Yaku_Renhou,
    Daisharin: Yaku_Daisharin,
    Chinitsu: Yaku_Chinitsu,
    Honitsu: Yaku_Honitsu,
    Ryanpeikou: Yaku_Ryanpeikou,
    Junchan: Yaku_Junchan,
    Chanta: Yaku_Chanta,
    Toitoi: Yaku_Toitoi,
    Honroutou: Yaku_Honroutou,
    Sankantsu: Yaku_Sankantsu,
    Shosangen: Yaku_Shosangen,
    SanshokuDoukou: Yaku_SanshokuDoukou,
    Sanankou: Yaku_Sanankou,
    Chiitoitsu: Yaku_Chiitoitsu,
    DaburuRiichi: Yaku_DaburuRiichi,
    Ittsu: Yaku_Ittsu,
    Sanshoku: Yaku_Sanshoku,
    Tanyao: Yaku_Tanyao,
    Pinfu: Yaku_Pinfu,
    Iipeikou: Yaku_Iipeikou,
    Menzentsumo: Yaku_Menzentsumo,
    Riichi: Yaku_Riichi,
    Ippatsu: Yaku_Ippatsu,
    Rinshan: Yaku_Rinshan,
    Chankan: Yaku_Chankan,
    Haitei: Yaku_Haitei,
    Houtei: Yaku_Houtei,
    RoundWindEast: Yaku_RoundWindEast,
    RoundWindSouth: Yaku_RoundWindSouth,
    RoundWindWest: Yaku_RoundWindWest,
    RoundWindNorth: Yaku_RoundWindNorth,
    OwnWindEast: Yaku_OwnWindEast,
    OwnWindSouth: Yaku_OwnWindSouth,
    OwnWindWest: Yaku_OwnWindWest,
    OwnWindNorth: Yaku_OwnWindNorth,
    Haku: Yaku_Haku,
    Hatsu: Yaku_Hatsu,
    Chun: Yaku_Chun,

    Dora: Yaku_Dora,
    Uradora: Yaku_Uradora,
    Akadora: Yaku_Akadora,
};

export const Tile: {
    M1: Tile_M1,
    M2: Tile_M2,
    M3: Tile_M3,
    M4: Tile_M4,
    M5: Tile_M5,
    M6: Tile_M6,
    M7: Tile_M7,
    M8: Tile_M8,
    M9: Tile_M9,

    P1: Tile_P1,
    P2: Tile_P2,
    P3: Tile_P3,
    P4: Tile_P4,
    P5: Tile_P5,
    P6: Tile_P6,
    P7: Tile_P7,
    P8: Tile_P8,
    P9: Tile_P9,

    S1: Tile_S1,
    S2: Tile_S2,
    S3: Tile_S3,
    S4: Tile_S4,
    S5: Tile_S5,
    S6: Tile_S6,
    S7: Tile_S7,
    S8: Tile_S8,
    S9: Tile_S9,

    East: Tile_East,
    South: Tile_South,
    West: Tile_West,
    North: Tile_North,

    Haku: Tile_Haku,
    Hatsu: Tile_Hatsu,
    Chun: Tile_Chun,
};