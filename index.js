"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileTypeFromStream = exports.FileTypeFromBlob = exports.FileTypeFromBuffer = exports.FileTypeFromUrl = exports.getBufferFromStream = exports.getStreamFromBuffer = exports.extractUrlFromString = exports.bufferToFile = exports.transformBuffer = exports.jsontoBuffer = exports.buffertoJson = exports.getBuffer = exports.postJson = exports.getJson = exports.toBuffer = exports.detectType = void 0;
const base_1 = require("./src/base");
Object.defineProperty(exports, "getJson", { enumerable: true, get: function () { return base_1.getJson; } });
Object.defineProperty(exports, "postJson", { enumerable: true, get: function () { return base_1.postJson; } });
Object.defineProperty(exports, "getBuffer", { enumerable: true, get: function () { return base_1.getBuffer; } });
const base_2_1 = require("./src/base_2");
Object.defineProperty(exports, "buffertoJson", { enumerable: true, get: function () { return base_2_1.buffertoJson; } });
Object.defineProperty(exports, "jsontoBuffer", { enumerable: true, get: function () { return base_2_1.jsontoBuffer; } });
Object.defineProperty(exports, "transformBuffer", { enumerable: true, get: function () { return base_2_1.transformBuffer; } });
Object.defineProperty(exports, "bufferToFile", { enumerable: true, get: function () { return base_2_1.bufferToFile; } });
Object.defineProperty(exports, "toBuffer", { enumerable: true, get: function () { return base_2_1.toBuffer; } });
const base_3_1 = require("./src/base_3");
Object.defineProperty(exports, "extractUrlFromString", { enumerable: true, get: function () { return base_3_1.extractUrlFromString; } });
Object.defineProperty(exports, "getStreamFromBuffer", { enumerable: true, get: function () { return base_3_1.getStreamFromBuffer; } });
Object.defineProperty(exports, "getBufferFromStream", { enumerable: true, get: function () { return base_3_1.getBufferFromStream; } });
const base_4_1 = require("./src/base_4");
Object.defineProperty(exports, "FileTypeFromUrl", { enumerable: true, get: function () { return base_4_1.FileTypeFromUrl; } });
Object.defineProperty(exports, "FileTypeFromBuffer", { enumerable: true, get: function () { return base_4_1.FileTypeFromBuffer; } });
Object.defineProperty(exports, "FileTypeFromBlob", { enumerable: true, get: function () { return base_4_1.FileTypeFromBlob; } });
Object.defineProperty(exports, "FileTypeFromStream", { enumerable: true, get: function () { return base_4_1.FileTypeFromStream; } });
const base_5_1 = require("./src/base_5");
Object.defineProperty(exports, "detectType", { enumerable: true, get: function () { return base_5_1.detectType; } });
