export declare function listBlobContainersWithAccountToken(): {
    name: string;
    ss: string;
    sp: string;
    srt: string;
};
export declare const decodeAccountSasToken: (sasToken: string) => string;
