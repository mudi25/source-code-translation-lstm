import * as brain from "brain.js";
import { readFileSync } from "fs";
import { join } from "path";
import { Vocab } from "./vocab";

async function Accuration() {
  const jsonNet = readFileSync(
    join(__dirname, "..", "data", "net.json"),
    "utf8"
  );
  console.log("jumlah data uji = ", Vocab.length);
  const net = new brain.recurrent.LSTM();
  net.fromJSON(JSON.parse(jsonNet));
  const result: boolean[] = [];
  Vocab.forEach(it => {
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
  console.log(
    "success = ",
    percentSuccess,
    "fail = ",
    percentFail,
    "total = ",
    result.length
  );
  return;
}

Accuration();
