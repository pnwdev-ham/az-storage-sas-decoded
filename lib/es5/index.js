"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++){r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},__assign.apply(this,arguments)},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var strings_1=__importDefault(require("./utils/strings")),azure_storage_sas_decoded_1=__importDefault(require("./azure-storage-sas-decoded")),Decode=function(){function e(){}return e.azureStorageSasToken=function(r){var t={sasToken:r,options:null,optionsDecoded:null,sasType:null,formedCorrectly:!1,successfulDecode:!1,sasProperties:null,error:{message:""}};try{if(!r)throw Error("Input error: sasToken parameter is empty");t.options=strings_1.default.prepareSasToken(r);var a=azure_storage_sas_decoded_1.default.decodeSasToken(r,t.options);return __assign({sasToken:r},a)}catch(s){return t.error.message=s?.message,t}},e}();exports.default=Decode;