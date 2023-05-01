"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryThemeCache = exports.setThemeCache = void 0;
const node_cache_1 = __importDefault(require("node-cache"));
const worker_1 = require("../seedProject/worker");
const projectCache = new node_cache_1.default();
const setThemeCache = (params) => {
    const cacheArray = buildThemeCache(params);
    cacheArray.forEach((cache) => {
        projectCache.set(cache.key, cache.value);
    });
};
exports.setThemeCache = setThemeCache;
const queryThemeCache = (params) => {
    const cacheArray = buildThemeCache(params);
    let cachedTheme = {};
    try {
        cacheArray.forEach((cache) => {
            let res = projectCache.get(cache.key);
            if (res && res.location) {
                cachedTheme = Object.assign(Object.assign({}, cachedTheme), { [res.location]: res });
            }
        });
        return cachedTheme;
    }
    catch (e) {
        console.log("error", e);
    }
};
exports.queryThemeCache = queryThemeCache;
const buildThemeCache = (params) => {
    const shape = (0, worker_1.createTheme)(Object.assign({}, params.theme));
    let keys = Object.entries(shape).map(([key, value]) => {
        return createCache({
            key: createCacheKey(Object.assign(Object.assign({}, params.params), { key })),
            value,
        });
    });
    return keys;
};
const createCacheKey = (params) => {
    return `${params.projectId}-${params.themeId}-${params.key}`;
};
const removeCacheKey = (params) => {
    return params.key.replace(`${params.projectId}-${params.themeId}-`, "");
};
const createCache = (cache) => {
    return cache;
};
//# sourceMappingURL=helmsman.js.map