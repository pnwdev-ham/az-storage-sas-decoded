/**
 * Type of Sas token
 */
export declare enum SasType {
    Account = "Account",
    Service = "Service",
    UserDelegation = "UserDelegation",
    Unknown = "Unknown",
    Unexpected = "Unexpected"
}
export interface SasDecoded {
    sasToken: string | undefined;
    sasTokenOptions: Record<string, unknown>;
    sasType: SasType;
    results: Record<string, unknown>;
    formedCorrectly: boolean;
    error?: Error | undefined;
}
export default class AzureStorageSasDecoded {
    static decodeSasToken: (sasToken: string, sasTokenOptions: any) => any;
    /**
     *
     ss = account sas
     !ss && !sks = service sas
     !ss && sks = user sas
     * @param sas
     *
     * @returns
     */
    static getSasType(sas: Record<string, unknown>): SasType;
}
