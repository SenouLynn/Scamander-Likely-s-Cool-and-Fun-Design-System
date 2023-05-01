export declare const getAppFromDb: (app: string) => Promise<any>;
export declare const getProjectFromDb: (project: string) => Promise<{
    status: string;
    id: string;
    payload: import("@firebase/firestore").DocumentData;
}>;
export declare const writeToDb: ({ query, payload, }: {
    query: string[];
    payload: any;
}) => Promise<ResponseMessage>;
