import * as brain from "brain.js";
import { writeFileSync } from "fs";
import { join } from "path";
import { Vocab } from "./vocab";
async function Train() {
  const net = new brain.recurrent.LSTM();
  console.log("data = ", Vocab.length);
  console.time("train");
  net.train(Vocab, {
    iterations: 100,
    log: true,
    logPeriod: 1
  });
  console.timeEnd("train");
  const result = JSON.stringify(net.toJSON());

  writeFileSync(join(__dirname, "..", "data", "net.json"), result, {
    encoding: "utf8"
  });
  return;
}
Train();
