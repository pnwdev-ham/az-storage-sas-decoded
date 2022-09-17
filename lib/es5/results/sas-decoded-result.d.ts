/**
 * Type of Sas token
 */
export declare enum SasTypeEnum {
    Account = "Account",
    Service = "Service",
    UserDelegation = "UserDelegation",
    Unknown = "Unknown",
    Unexpected = "Unexpected"
}
export interface SasDecoded {
    sasToken: string | undefined;
    sasTokenOptions: Record<string, unknown>;
    sasType: SasTypeEnum;
    results: Record<string, unknown>;
    formedCorrectly: boolean;
    error?: Error | undefined;
}
export interface ISasDecodedResult {
    IncomingData: {
        SasToken: string;
    };
    MetaData: {
        CorrectFormat: boolean;
        DidDecode: boolean;
        PermissionsInOrder: boolean | null;
    };
    ResultData: {
        SasType: string;
        Options: any[];
        SasDecoded: any[];
        Properties: Record<string, unknown> | null;
    };
    Errors: Record<string, unknown>[];
}
export declare class SasDecodedResult implements ISasDecodedResult {
    IncomingData: {
        SasToken: string;
    };
    MetaData: {
        CorrectFormat: boolean;
        DidDecode: boolean;
        PermissionsInOrder: boolean;
    };
    ResultData: {
        SasType: string;
        Options: any[];
        SasDecoded: any[];
        Properties: Record<string, unknown> | null;
    };
    Errors: [];
    constructor();
}
//# sourceMappingURL=sas-decoded-result.d.ts.map