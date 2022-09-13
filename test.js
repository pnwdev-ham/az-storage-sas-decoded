const Decode = require("./lib/es5/index").Decode;

const sas = "sp=racwdyti&st=2022-09-11T20:56:46Z&se=2022-10-12T04:56:46Z&spr=https&sv=2021-06-08&sr=b&sig=ahrwIAQgYdY1Xeada4Ex29AtFRYz5AWCC0pl4Mrv5wA%3D";

//console.log(Decode);

const results = Decode.azureStorageSasToken(sas);
console.log(results);