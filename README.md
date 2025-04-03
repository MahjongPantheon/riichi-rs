## Riichi-rs

Small wrapper around [riichi-rust](https://github.com/MahjongPantheon/riichi-rust) to compile it to wasm.

## Compilation

Make sure you have wasm-pack installed in PATH.

Run `./build.sh` and check `release` folder for ready packages for node and bundlers.

## Demos

- Simple webpack-based demo for bundler version is provided in `demo` folder.
- Node version is used in tests in `riichi-ts` package, you can check it
  out [here](https://github.com/MahjongPantheon/riichi-ts/blob/main/riichi_realdata_rs.test.ts).