import * as brain from "brain.js";
import Data from "./data";
import { readFileSync } from "fs";
import { join } from "path";
async function testing() {
  const jsonNet = readFileSync(
    join(__dirname, "..", "data", "net.json"),
    "utf8"
  );
  const net = new brain.recurrent.LSTM();
  net.fromJSON(JSON.parse(jsonNet));
  Data.forEach(it => {
    const input = it.split(" ")[0];
    const output = net.run(input);
    console.log(input, " = ", output);
  });
  return;
}
export default testing;
