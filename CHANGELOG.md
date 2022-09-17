# 0.0.1h - Preview

* Types are in flux
* Added type for return to help web site process results: 

    ```javascript
    interface ISasDecodedResult {
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
    Errors: any[];
    }
    ```
* Moved test data from json to ts

# 0.0.1g

* Emit types and maps

# 0.0.1f

* Fix README.md sample code