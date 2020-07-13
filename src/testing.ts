import * as brain from "brain.js";
import { readFileSync } from "fs";
import { join } from "path";
import { DataModel } from "./data";
async function Testing() {
  const jsonNet = readFileSync(
    join(__dirname, "..", "data", "net.json"),
    "utf8"
  );
  const jsonData = readFileSync(
    join(__dirname, "..", "data", "uji.json"),
    "utf8"
  );
  const data: DataModel[] = JSON.parse(jsonData);
  console.log("jumlah data uji = ", data.length);
  const net = new brain.recurrent.LSTM();
  net.fromJSON(JSON.parse(jsonNet));
  const result: boolean[] = [];
  data.forEach((it) => {
    const input = it.input;
    const output = net.run(input);
    if (output !== it.output) {
      console.log(input, " = ", output);
    }
    result.push(output === it.output);
  });
  const success = result.filter((it) => it === true).length;
  const fail = result.filter((it) => it === false).length;
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
export default Testing;
