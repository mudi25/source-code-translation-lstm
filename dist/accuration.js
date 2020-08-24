"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const brain = __importStar(require("brain.js"));
const fs_1 = require("fs");
const path_1 = require("path");
const vocab_1 = require("./vocab");
async function Accuration() {
    const jsonNet = fs_1.readFileSync(path_1.join(__dirname, "..", "data", "net.json"), "utf8");
    console.log("jumlah data uji = ", vocab_1.Vocab.length);
    const net = new brain.recurrent.LSTM();
    net.fromJSON(JSON.parse(jsonNet));
    const result = [];
    vocab_1.Vocab.forEach(it => {
        const output = net.run(it.input);
        const success = output === it.output;
        console.log(it.output, " = ", output, " => ", success);
        //console.log(input, " = ", output, " => ", success);
        result.push(success);
    });
    const success = result.filter(it => it === true).length;
    const fail = result.filter(it => it === false).length;
    const percentSuccess = (success / result.length) * 100;
    const percentFail = (fail / result.length) * 100;
    console.log("success = ", percentSuccess, "fail = ", percentFail, "total = ", result.length);
    return;
}
Accuration();
