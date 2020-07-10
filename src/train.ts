import * as brain from "brain.js";
import Data from "./data";
import { writeFileSync } from "fs";
import { join } from "path";
import testing from "./testing";
async function train() {
  const net = new brain.recurrent.LSTM({
    activation: "tanh"
  });
  net.train(Data, { iterations: 1000, log: true, logPeriod: 1 });
  const result = JSON.stringify(net.toJSON());
  writeFileSync(join(__dirname, "..", "data", "net.json"), result, {
    encoding: "utf8"
  });
  testing();
  return;
}
train();
