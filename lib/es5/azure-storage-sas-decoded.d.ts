import { SasTypeEnum } from './results/sas-decoded-result';
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
    static getSasType(sas: Record<string, unknown>): SasTypeEnum;
}
//# sourceMappingURL=azure-storage-sas-decoded.d.ts.map