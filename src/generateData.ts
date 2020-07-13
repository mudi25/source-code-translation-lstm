import { generateDataUji, generateDataLatih } from "./data";
import { existsSync } from "fs";
import { join } from "path";
function main() {
  const dataLatih = existsSync(join(__dirname, "..", "data", "latih.json"));
  dataLatih === false ? generateDataLatih() : console.log("data latih exists");
  const dataUji = existsSync(join(__dirname, "..", "data", "uji.json"));
  dataUji === false ? generateDataUji() : console.log("data uji exists");
}
main();
