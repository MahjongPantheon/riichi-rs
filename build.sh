#!/usr/bin/env bash

rm -rf pkg release

# build for node
wasm-pack build --target nodejs --no-typescript --release
mkdir -p release/node
mv pkg/package.json pkg/.gitignore pkg/riichi_rs.js pkg/riichi_rs_bg.wasm release/node/
cp src/riichi_rs.d.ts release/node/
cp src/riichi_rs_node.js release/node/
sed -i -e 's/riichi-rs/riichi-rs-node/g' release/node/package.json
sed -i -e 's/"main": "riichi_rs.js"/"main": "riichi_rs_node.js",\n  "types": "riichi_rs.d.ts"/g' release/node/package.json
sed -i -e 's/"files": \[/"files": \[\n    "riichi_rs_node.js",/g' release/node/package.json
cp README_NODE.md release/node/README.md

rm -rf pkg

# build for bundlers
wasm-pack build --target bundler --no-typescript --release
mkdir -p release/bundlers
mv pkg/package.json pkg/.gitignore pkg/riichi_rs.js pkg/riichi_rs_bg.js pkg/riichi_rs_bg.wasm release/bundlers/
cp src/riichi_rs.d.ts release/bundlers/
cp src/riichi_rs_bundlers.js release/bundlers/
sed -i -e 's/riichi-rs/riichi-rs-bundlers/g' release/bundlers/package.json
sed -i -e 's/"main": "riichi_rs.js"/"main": "riichi_rs_bundlers.js",\n  "types": "riichi_rs.d.ts"/g' release/bundlers/package.json
sed -i -e 's/"files": \[/"files": \[\n    "riichi_rs_bundlers.js",/g' release/bundlers/package.json
cp README_BUNDLERS.md release/bundlers/README.md

rm -rf pkg
echo "==> Packages for node and bundlers are ready in 'release' folder"