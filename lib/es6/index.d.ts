import { ISasDecodedResult } from './results/sas-decoded-result';
export declare class Decode {
    /**
     * Convert querystring to name/values pairs. QueryString shouldn't have `?` in it
     * @param sasToken: `name=val&name2=val2`
     * @returns
     */
    /**
     * Decodes Azure Storage SAS token
     *
     */
    static azureStorageSasToken(sasToken: string): ISasDecodedResult;
}
