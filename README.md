# Azure Storage SAS token decoder

## Install

```
npm install az-storage-sas-decoded
```

## Use

```
const Decode = require("az-storage-sas-decoded");

const sas = "sp=racwdyti&st=2022-09-11T20:56:46Z&se=2022-10-12T04:56:46Z&spr=https&sv=2021-06-08&sr=b&sig=ahrwIAQgYdY1Xeada4Ex29AtFRYz5AWCC0pl4Mrv5wA%3D";

const results = Decode.azureStorageSasToken(sas);

console.log(results);
```