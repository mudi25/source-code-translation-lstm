// import { TsType, create } from "./cerateDataTrain";
import { readFileSync, writeFileSync } from "fs";
import * as brain from "brain.js";
import { join } from "path";

const config: brain.INeuralNetworkOptions = {
  binaryThresh: 0.1,
  hiddenLayers: [100], // array of ints for the sizes of the hidden layers in the network
  activation: "sigmoid", // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
  leakyReluAlpha: 0.1, // supported for activation type 'leaky-relu'
};
const dataNN = [
  {
    input: {
      isArr: 1,
      isNull: 0,
      isBoolean: 0,
      isString: 0,
      isNumber: 0,
      isAny: 0,
    },
    output: { isArr: 1 },
  },
  {
    input: {
      isArr: 0,
      isNull: 1,
      isBoolean: 0,
      isString: 0,
      isNumber: 0,
      isAny: 0,
    },
    output: { isNull: 1 },
  },
  {
    input: {
      isArr: 0,
      isNull: 0,
      isBoolean: 1,
      isString: 0,
      isNumber: 0,
      isAny: 0,
    },
    output: { isBoolean: 1 },
  },
  {
    input: {
      isArr: 0,
      isNull: 0,
      isBoolean: 0,
      isString: 1,
      isNumber: 0,
      isAny: 0,
    },
    output: { isString: 1 },
  },
  {
    input: {
      isArr: 0,
      isNull: 0,
      isBoolean: 0,
      isString: 0,
      isNumber: 1,
      isAny: 0,
    },
    output: { isNumber: 1 },
  },
  {
    input: {
      isArr: 0,
      isNull: 0,
      isBoolean: 0,
      isString: 0,
      isNumber: 0,
      isAny: 1,
    },
    output: { isAny: 1 },
  },
];
async function latih() {
  // const dataLatih = await create();

  const net = new brain.NeuralNetwork(config);
  net.train(dataNN);

  writeFileSync(
    join(__dirname, "..", "data", "net.json"),
    JSON.stringify(net.toJSON()),
    { encoding: "utf8" }
  );
  return;
}
async function testing() {
  const net = new brain.NeuralNetwork(config);
  const readNet = readFileSync(
    join(__dirname, "..", "data", "net.json"),
    "utf8"
  );
  net.fromJSON(JSON.parse(readNet));
  const out = net.run({
    isArr: 1,
    isNull: 1,
    isBoolean: 1,
    isString: 0,
    isNumber: 0,
    isAny: 0,
  });
  console.log(out);

  // const outString = net.run(TsType.STRING.toString());
  // console.log(outString);

  // const outNumber = net.run(TsType.NUMBER.toString());
  // console.log(outNumber);

  // const outAny = net.run(TsType.ANY.toString());
  // console.log(outAny);
  return;
}
async function main(withTrain: boolean) {
  if (withTrain === true) {
    await latih();
  }
  await testing();
}

main(true);
