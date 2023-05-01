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
export declare const updateFieldDoc: ({ query, key, value, }: {
    query: string[];
    key: string;
    value: any;
}) => Promise<ResponseMessage>;
export declare const writeBatchDocs: ({ query, payloads, }: {
    query: string[];
    payloads: any[];
}) => Promise<ResponseMessage>;
export declare const deleteFieldDoc: ({ query, key, }: {
    query: string[];
    key: string;
}) => Promise<ResponseMessage>;
