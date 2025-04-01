/* tslint:disable */
/* eslint-disable */

export type Tile_M1 = 1;
export type Tile_M2 = 2;
export type Tile_M3 = 3;
export type Tile_M4 = 4;
export type Tile_M5 = 5;
export type Tile_M6 = 6;
export type Tile_M7 = 7;
export type Tile_M8 = 8;
export type Tile_M9 = 9;

export type Tile_P1 = 10;
export type Tile_P2 = 11;
export type Tile_P3 = 12;
export type Tile_P4 = 13;
export type Tile_P5 = 14;
export type Tile_P6 = 15;
export type Tile_P7 = 16;
export type Tile_P8 = 17;
export type Tile_P9 = 18;

export type Tile_S1 = 19;
export type Tile_S2 = 20;
export type Tile_S3 = 21;
export type Tile_S4 = 22;
export type Tile_S5 = 23;
export type Tile_S6 = 24;
export type Tile_S7 = 25;
export type Tile_S8 = 26;
export type Tile_S9 = 27;

export type Tile_East = 28;
export type Tile_South = 29;
export type Tile_West = 30;
export type Tile_North = 31;

export type Tile_Haku = 32;
export type Tile_Hatsu = 33;
export type Tile_Chun = 34;

export type Tile =
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

export type Meld = [true, [Tile, Tile, Tile]] | [boolean, [Tile, Tile, Tile, Tile]];

export type Yaku_Kokushimusou13Sides = 0;
export type Yaku_Kokushimusou = 1;
export type Yaku_Chuurenpoto9Sides = 2;
export type Yaku_Chuurenpoto = 3;
export type Yaku_SuuankouTanki = 4;
export type Yaku_Suuankou = 5;
export type Yaku_Daisuushi = 6;
export type Yaku_Shosuushi = 7;
export type Yaku_Daisangen = 8;
export type Yaku_Tsuuiisou = 9;
export type Yaku_Ryuuiisou = 10;
export type Yaku_Chinroutou = 11;
export type Yaku_Suukantsu = 12;
export type Yaku_Tenhou = 13;
export type Yaku_Chihou = 14;
export type Yaku_Renhou = 15;
export type Yaku_Daisharin = 16;
export type Yaku_Chinitsu = 17;
export type Yaku_Honitsu = 18;
export type Yaku_Ryanpeikou = 19;
export type Yaku_Junchan = 20;
export type Yaku_Chanta = 21;
export type Yaku_Toitoi = 22;
export type Yaku_Honroutou = 23;
export type Yaku_Sankantsu = 24;
export type Yaku_Shosangen = 25;
export type Yaku_SanshokuDoukou = 26;
export type Yaku_Sanankou = 27;
export type Yaku_Chiitoitsu = 28;
export type Yaku_DaburuRiichi = 29;
export type Yaku_Ittsu = 30;
export type Yaku_Sanshoku = 31;
export type Yaku_Tanyao = 32;
export type Yaku_Pinfu = 33;
export type Yaku_Iipeikou = 34;
export type Yaku_Menzentsumo = 35;
export type Yaku_Riichi = 36;
export type Yaku_Ippatsu = 37;
export type Yaku_Rinshan = 38;
export type Yaku_Chankan = 39;
export type Yaku_Haitei = 40;
export type Yaku_Houtei = 41;
export type Yaku_RoundWindEast = 42;
export type Yaku_RoundWindSouth = 43;
export type Yaku_RoundWindWest = 44;
export type Yaku_RoundWindNorth = 45;
export type Yaku_OwnWindEast = 46;
export type Yaku_OwnWindSouth = 47;
export type Yaku_OwnWindWest = 48;
export type Yaku_OwnWindNorth = 49;
export type Yaku_Haku = 50;
export type Yaku_Hatsu = 51;
export type Yaku_Chun = 52;

export type Yaku_Dora = 53;
export type Yaku_Uradora = 54;
export type Yaku_Akadora = 55;

export type Yaku =
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
        last_take: boolean,
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
    yaku: Array<[Yaku, number]>, // (yaku_id, han_count)
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

export function init_panic_hook(): void;

export function calc(val: RiichiInput): RiichiResult;

export const Yaku;
export const Tile;