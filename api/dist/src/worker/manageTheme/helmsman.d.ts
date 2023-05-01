export declare const setThemeCache: (params: ThemeGetParams) => void;
export declare const queryThemeCache: (params: ThemeGetParams) => {};
type ThemeGetParams = {
    theme?: Partial<ThemePackage>;
    params: {
        projectId: string;
        themeId: string;
    };
};
export {};
