export declare const getAppFromDb: (app: string) => Promise<any>;
export declare const getProjectFromDb: (project: string) => Promise<{
    status: string;
    id: string;
    payload: import("@firebase/firestore").DocumentData;
}>;
export declare const createProjectInDb: ({ project, payload, }: {
    project: string;
    payload: Project;
}) => Promise<{
    status: string;
    id: string;
    payload: Project;
    error?: undefined;
    e?: undefined;
} | {
    status: string;
    id: string;
    payload: Project;
    error: string;
    e: any;
}>;
export declare const writeToDb: ({ query, payload, }: {
    query: string[];
    payload: any;
}) => Promise<{
    status: string;
    id: string;
    error?: undefined;
} | {
    status: string;
    id: string;
    error: string;
}>;
