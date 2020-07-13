import Train from "./train";
import Testing from "./testing";
import { existsSync } from "fs";
import { join } from "path";

async function main() {
  const isTrain = existsSync(join(__dirname, "..", "data", "net.json"));
  console.log(isTrain);
  isTrain === true ? Testing() : Train();
  return;
}
main();
