import { GenerateData } from "./generateData";
import { writeFileSync } from "fs";
import { join } from "path";
async function main() {
  // const code = readFileSync(join(__dirname, "model.ts"), "utf-8");
  // const sequence = await new TsToSequence(code).create();
  // console.log(sequence.join(", "));

  // generate
  const trining = await new GenerateData(100).create();
  writeFileSync(join(__dirname, "..", "trining.json"), JSON.stringify(trining));
  const test = await new GenerateData(10).create();
  writeFileSync(join(__dirname, "..", "test.json"), JSON.stringify(test));
}
main();
