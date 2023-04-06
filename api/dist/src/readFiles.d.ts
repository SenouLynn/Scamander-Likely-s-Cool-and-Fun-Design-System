export default function readFromFile(file: string): Promise<unknown>;
export declare const writeToFile: (path: string, data: any) => Promise<void>;
export declare const runPromiseBatch: ({ promises, response, error, }: {
    promises: any[];
    response: (result: any) => void;
    error?: (result: any) => void;
}) => void;
export declare const buildDbPackage: ({ payload, }: {
    payload: UpdatePackagePayload;
}) => Promise<void>;
