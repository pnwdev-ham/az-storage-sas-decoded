# Azure Storage SAS token decoder

## Install

```
npm install az-storage-sas-decoded
```

## Use

```
const Decode = require("./lib/es5/index").Decode;

const sas =
  "sp=racwi&st=2022-09-11T20:56:46Z&se=2022-10-12T04:56:46Z&spr=https&sv=2021-06-08&sr=b&sig=ahrwIAQgYdY1Xeada4Ex29AtFRYz5AWCC0pl4Mrv5wA%3D";
const { MetaData, ResultData, Errors } = Decode.azureStorageSasToken(sas);

if (!Errors || Errors.length === 0) {
  console.log(
    `Sas token is ${MetaData.CorrectFormat ? "valid" : "not value"} as a ${
      ResultData.SasType
    } token`
  );
} else {
  console.log(`Sas token has ${Errors.length} errors`);
}
```