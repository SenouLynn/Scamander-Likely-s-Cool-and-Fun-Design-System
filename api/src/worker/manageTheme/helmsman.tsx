import NodeCache from "node-cache";
import { createTheme } from "../seedProject/worker";
const projectCache = new NodeCache();
//Helmsman runs sequences of fetch logic, and caches the results

export const setThemeCache = (params: ThemeGetParams) => {
  const cacheArray = buildThemeCache(params);
  cacheArray.forEach((cache) => {
    projectCache.set(cache.key, cache.value);
  });
};

export const queryThemeCache = (params: ThemeGetParams) => {
  const cacheArray = buildThemeCache(params);
  let cachedTheme = {};
  try {
    cacheArray.forEach((cache) => {
      let res: ComponentPackage = projectCache.get(cache.key);
      if (res && res.location) {
        cachedTheme = { ...cachedTheme, [res.location]: res };
      }
    });
    return cachedTheme;
  } catch (e) {
    console.log("error", e);
  }
};

const buildThemeCache = (params: ThemeGetParams): CacheShape[] => {
  const shape = createTheme({ ...params.theme });
  let keys = Object.entries(shape).map(([key, value]) => {
    return createCache({
      key: createCacheKey({ ...params.params, key }),
      value,
    });
  });

  return keys;
};

const createCacheKey = (params: {
  projectId: string;
  themeId: string;
  key: string;
}) => {
  return `${params.projectId}-${params.themeId}-${params.key}`;
};
const removeCacheKey = (params: {
  projectId: string;
  themeId: string;
  key: string;
}) => {
  return params.key.replace(`${params.projectId}-${params.themeId}-`, "");
};

const createCache = (cache: CacheShape): CacheShape => {
  return cache;
};

type ThemeGetParams = {
  theme?: Partial<ThemePackage>;
  params: { projectId: string; themeId: string };
};
type CacheShape = {
  key: string;
  value: any;
  ttl?: number;
};
