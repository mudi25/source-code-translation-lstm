import * as brain from "brain.js";
import { writeFileSync, readFileSync } from "fs";
import { join } from "path";
import { DataModel } from "./data";
import Testing from "./testing";
async function Train() {
  const net = new brain.recurrent.LSTM();
  const jsonData = readFileSync(
    join(__dirname, "..", "data", "latih.json"),
    "utf8"
  );
  const data: DataModel[] = JSON.parse(jsonData);
  console.log("jumlah data latih = ", data.length);
  net.train(data, { iterations: 200, log: true, logPeriod: 1 });

  const result = JSON.stringify(net.toJSON());
  writeFileSync(join(__dirname, "..", "data", "net.json"), result, {
    encoding: "utf8",
  });
  await Testing();
  return;
}
export default Train;
