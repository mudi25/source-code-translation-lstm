import { IRNNTrainingData } from "brain.js";
export async function create(): Promise<IRNNTrainingData[]> {
  try {
    const data: IRNNTrainingData[] = [];
    data.push(
      { input: TsType.BOOLEAN.toString(), output: TsToKt(TsType.BOOLEAN) },
      //   {
      //     input: TsType.BOOLEAN_OR_NULL.toString(),
      //     output: TsToKt(TsType.BOOLEAN_OR_NULL),
      //   },
      //   {
      //     input: TsType.BOOLEAN_ARRAY.toString(),
      //     output: TsToKt(TsType.BOOLEAN_ARRAY),
      //   },
      //   {
      //     input: TsType.BOOLEAN_ARRAY_OR_NULL.toString(),
      //     output: TsToKt(TsType.BOOLEAN_ARRAY_OR_NULL),
      //   },
      { input: TsType.STRING.toString(), output: TsToKt(TsType.STRING) },
      //   {
      //     input: TsType.STRING_OR_NULL.toString(),
      //     output: TsToKt(TsType.STRING_OR_NULL),
      //   },
      //   {
      //     input: TsType.STRING_ARRAY.toString(),
      //     output: TsToKt(TsType.STRING_ARRAY),
      //   },
      //   {
      //     input: TsType.STRING_ARRAY_OR_NULL.toString(),
      //     output: TsToKt(TsType.STRING_ARRAY_OR_NULL),
      //   },
      { input: TsType.NUMBER.toString(), output: TsToKt(TsType.NUMBER) },
      //   {
      //     input: TsType.NUMBER_OR_NULL.toString(),
      //     output: TsToKt(TsType.NUMBER_OR_NULL),
      //   },
      //   {
      //     input: TsType.NUMBER_ARRAY.toString(),
      //     output: TsToKt(TsType.NUMBER_ARRAY),
      //   },
      //   {
      //     input: TsType.NUMBER_ARRAY_OR_NULL.toString(),
      //     output: TsToKt(TsType.NUMBER_ARRAY_OR_NULL),
      //   },
      { input: TsType.ANY.toString(), output: TsToKt(TsType.ANY) }
      //   {
      //     input: TsType.ANY_OR_NULL.toString(),
      //     output: TsToKt(TsType.ANY_OR_NULL),
      //   },
      //   {
      //     input: TsType.ANY_ARRAY.toString(),
      //     output: TsToKt(TsType.ANY_ARRAY),
      //   },
      //   {
      //     input: TsType.NUMBER_ARRAY_OR_NULL.toString(),
      //     output: TsToKt(TsType.NUMBER_ARRAY_OR_NULL),
      //   }
    );

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
export enum TsType {
  BOOLEAN,

  NUMBER,

  STRING,

  ANY,
}
/** */
export function TsToKt(value: number) {
  switch (value) {
    case TsType.BOOLEAN:
      return "Boolean";

    case TsType.NUMBER:
      return "Float";

    case TsType.STRING:
      return "String";

    case TsType.ANY:
      return "Any";

    default:
      return "";
  }
}
