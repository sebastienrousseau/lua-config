import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const presets = [".luacheckrc","stylua.toml"];
const defaultPreset = ".luacheckrc";
const content = fs.readFileSync(path.join(__dirname, defaultPreset), "utf8");

const config = {
  name: "@sebastienrousseau/lua-config",
  version: "0.0.1",
  presets,
  defaultPreset,
  content
};

export default config;
