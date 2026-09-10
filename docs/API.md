# `@sebastienrousseau/lua-config` API Specification

Comprehensive schema, property definitions, and exported options reference for `@sebastienrousseau/lua-config`.

---

## Description

Shareable Lua configuration standards providing Lua 5.4 and Neovim LuaCheck and StyLua presets.

---

## Programmatic Entrypoints

| Specifier | Module Type | Target Runtime | Path |
| :--- | :--- | :--- | :--- |
| `.` (default) | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `@sebastienrousseau/lua-config` | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `index.d.ts` | TypeScript | TypeScript >= 5.0 | Type declarations |

---

## Feature & Property Reference

### 1. .luacheckrc

- **Description**: Strict LuaCheck configuration targeting Lua 5.4 and Neovim environments with undefined global detection.
- **Scope**: Production & Development
- **Status**: Stable & Active

### 2. stylua.toml

- **Description**: Deterministic StyLua code formatting enforcing 2 spaces, double quotes, and 100 column limit.
- **Scope**: Production & Development
- **Status**: Stable & Active
