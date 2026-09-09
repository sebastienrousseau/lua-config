---
title: "Usage — @sebastienrousseau/lua-config"
description: "How to use and configure @sebastienrousseau/lua-config."
layout: "doc"
---

# Usage

`@sebastienrousseau/lua-config` can be consumed across all standard module formats.

## CommonJS

```javascript
const config = require("@sebastienrousseau/lua-config");
console.log(config.presets);
```

## ES Modules

```javascript
import config from "@sebastienrousseau/lua-config";
console.log(config.defaultPreset);
```
