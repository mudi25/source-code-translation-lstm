import { writeFileSync } from "fs";
import { join } from "path";
export interface DataModel {
  input: string;
  output: string;
}
const dataArray: DataModel[] = [
  { input: "DateArray", output: "List Date" },
  { input: "BooleanArray", output: "List Boolean" },
  { input: "NumberArray", output: "List Number" },
  { input: "StringArray", output: "List String" },
  { input: "AnyArray", output: "List Any" },
];
const data: DataModel[] = [
  { input: "Date", output: "Date" },
  { input: "boolean", output: "Boolean" },
  { input: "number", output: "Float" },
  { input: "string", output: "String" },
  { input: "any", output: "Any" },
  ...dataArray,
  ...dataArray,
  ...dataArray,

  { input: "Map<number, Date>", output: "Map<Int, Date>" },
  { input: "Map<number, boolean>", output: "Map<Int, Boolean>" },
  { input: "Map<number, number>", output: "Map<Int, Float>" },
  { input: "Map<number, string>", output: "Map<Int, String>" },
  { input: "Map<number, any>", output: "Map<Int, Any>" },
];
function shuffle(array: DataModel[]) {
  const result = array.sort(() => Math.random() - 0.5);
  return result;
}
export function generateDataLatih() {
  const dataTrain: DataModel[] = [];
  for (let index = 0; index < 10; index++) {
    dataTrain.push(...shuffle(data));
  }
  console.log("jumlah data latih = ", dataTrain.length);
  writeFileSync(
    join(__dirname, "..", "data", "latih.json"),
    JSON.stringify(dataTrain),
    {
      encoding: "utf8",
    }
  );
}

export function generateDataUji() {
  const dataLatih: string[] = [];
  for (let index = 0; index < 1; index++) {
    dataLatih.push(...data.map((it) => it.input));
  }
  writeFileSync(
    join(__dirname, "..", "data", "uji.json"),
    JSON.stringify(data),
    {
      encoding: "utf8",
    }
  );
  console.log("jumlah data uji = ", data.length);
}
