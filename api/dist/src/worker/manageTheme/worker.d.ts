export declare const getTheme: ({ projectId, themeId, }: {
    projectId: string;
    themeId: string;
}) => Promise<ResponseMessage>;
export declare const updateTheme: ({ projectId, themeId, payload, }: UpdateThemePayload) => Promise<ResponseMessage>;
