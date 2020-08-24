export interface IProperty {
  name: string;
  type: string;
}
export interface IControllerParameter {
  name: string;
  decorator: string;
  type: string;
}
export interface IControllerMethod {
  name: string;
  decorator: string;
  path: string;
  parameter: IControllerParameter[];
  returnType: string;
}

export interface IModel {
  name: string;
  type: "interface";
  property: IProperty[];
}
export interface IController {
  name: string;
  type: "class";
  decorator: string;
  path: string;
  method: IControllerMethod[];
}
export interface IVocab {
  input: string;
  output: string;
}

// export enum TsType {
//   Boolean = 0,
//   BooleanOrUndefined = 1,
//   BooleanArray = 2,
//   BooleanArrayOrUndefined = 3,
//   PromiseBoolean = 4,
//   PromiseBooleanArray = 5,
//   PromiseResponseBoolean = 6,
//   PromiseResponseBooleanArray = 7,
//   ResponseBoolean = 8,
//   ResponseBooleanArray = 9,

//   String = 10,
//   StringOrUndefined = 11,
//   StringArray = 12,
//   StringArrayOrUndefined = 13,
//   PromiseString = 14,
//   PromiseStringArray = 15,
//   PromiseResponseString = 16,
//   PromiseResponseStringArray = 17,
//   ResponseString = 18,
//   ResponseStringArray = 19,

//   Number = 20,
//   NumberOrUndefined = 21,
//   NumberArray = 22,
//   NumberArrayOrUndefined = 23,
//   PromiseNumber = 24,
//   PromiseNumberArray = 25,
//   PromiseResponseNumber = 26,
//   PromiseResponseNumberArray = 27,
//   ResponseNumber = 28,
//   ResponseNumberArray = 29,

//   Any = 30,
//   AnyOrUndefined = 31,
//   AnyArray = 32,
//   AnyArrayOrUndefined = 33,
//   PromiseAny = 34,
//   PromiseAnyArray = 35,
//   PromiseResponseAny = 36,
//   PromiseResponseAnyArray = 37,
//   ResponseAny = 38,
//   ResponseAnyArray = 39,

//   MapStringNumber = 40,
//   MapStringNumberOrUndefined = 41,
//   MapStringNumberArray = 42,
//   MapStringNumberArrayOrUndefined = 43,
//   PromiseMapStringNumber = 44,
//   PromiseMapStringNumberArray = 45,
//   PromiseResponseMapStringNumber = 46,
//   PromiseResponseMapStringNumberArray = 47,
//   ResponseMapStringNumber = 48,
//   ResponseMapStringNumberArray = 49,

//   MapIntString = 50,
//   MapIntStringOrUndefined = 51,
//   MapIntStringArray = 52,
//   MapIntStringArrayOrUndefined = 53,
//   PromiseMapIntString = 54,
//   PromiseMapIntStringArray = 55,
//   PromiseResponseMapIntString = 56,
//   PromiseResponseMapIntStringArray = 57,
//   ResponseMapIntString = 58,
//   ResponseMapIntStringArray = 59,

//   Void = 60,
//   PromiseVoid = 61,
//   ResponseVoid = 62,
//   PromiseResponseVoid = 63,

//   Get = 64,
//   Post = 65,
//   Put = 66,
//   Delete = 67,
//   Body = 68,
//   Interface = 69,
//   Class = 70
// }

// export enum KtType {
//   Boolean = 0,
//   BooleanArray = 1,
//   CallBoolean = 2,
//   CallBooleanArray = 3,

//   String = 4,
//   StringArray = 5,
//   CallString = 6,
//   CallStringArray = 7,

//   Float = 8,
//   FloatArray = 9,
//   CallFloat = 10,
//   CallFloatArray = 11,

//   Any = 12,
//   AnyArray = 13,
//   CallAny = 14,
//   CallAnyArray = 15,

//   MapStringFloat = 16,
//   MapStringFloatArray = 17,
//   CallMapStringFloat = 18,
//   CallMapStringFloatArray = 19,

//   MapIntString = 20,
//   MapIntStringArray = 21,
//   CallMapIntString = 22,
//   CallMapIntStringArray = 23,

//   CallUnit = 24,

//   Get = 25,
//   Post = 26,
//   Put = 27,
//   Delete = 28,
//   Body = 29,
//   DataClass = 30,
//   Class = 31
// }

export const Vocab: IVocab[] = [
  { input: "boolean", output: "Boolean" },
  { input: "boolean | undefined", output: "Boolean" },
  { input: "boolean[]", output: "List<Boolean>" },
  { input: "boolean[] | undefined", output: "List<Boolean>" },

  { input: "Promise<boolean>", output: "Call<Boolean>" },
  { input: "Promise<boolean[]>", output: "Call<List<Boolean>>" },
  { input: "Response<boolean>", output: "Call<Boolean>" },
  { input: "Response<boolean[]>", output: "Call<List<Boolean>>" },
  { input: "Promise<Response<boolean>>", output: "Call<Boolean>" },
  { input: "Promise<Response<boolean[]>>", output: "Call<List<Boolean>>" },

  { input: "string", output: "String" },
  { input: "string | undefined", output: "String" },
  { input: "string[]", output: "List<String>" },
  { input: "string[] | undefined", output: "List<String>" },

  { input: "Promise<string>", output: "Call<String>" },
  { input: "Promise<string[]>", output: "Call<List<String>>" },
  { input: "Response<string>", output: "Call<String>" },
  { input: "Response<string[]>", output: "Call<List<String>>" },
  { input: "Promise<Response<string>>", output: "Call<String>" },
  { input: "Promise<Response<string[]>>", output: "Call<List<String>>" },

  { input: "number", output: "Float" },
  { input: "number | undefined", output: "Float" },
  { input: "number[]", output: "List<Float>" },
  { input: "number[] | undefined", output: "List<Float>" },

  { input: "Promise<number>", output: "Call<Float>" },
  { input: "Promise<number[]>", output: "Call<List<Float>>" },
  { input: "Response<number>", output: "Call<Float>" },
  { input: "Response<number[]>", output: "Call<List<Float>>" },
  { input: "Promise<Response<number>>", output: "Call<Float>" },
  { input: "Promise<Response<number[]>>", output: "Call<List<Float>>" },

  { input: "any", output: "Any" },
  { input: "any | undefined", output: "Any" },
  { input: "any[]", output: "List<Any>" },
  { input: "any[] | undefined", output: "List<Any>" },

  { input: "Promise<any>", output: "Call<Any>" },
  { input: "Promise<any[]>", output: "Call<List<Any>>" },
  { input: "Response<any>", output: "Call<Any>" },
  { input: "Response<any[]>", output: "Call<List<Any>>" },
  { input: "Promise<Response<any>>", output: "Call<Any>" },
  { input: "Promise<Response<any[]>>", output: "Call<List<Any>>" },

  { input: "[string, number]", output: "Map<String, Float>" },
  { input: "[string, number] | undefined", output: "Map<String, Float>" },
  { input: "[string, number][]", output: "List<Map<String, Float>>" },
  {
    input: "[string, number][] | undefined",
    output: "List<Map<String, Float>>"
  },
  { input: "Promise<[string, number]>", output: "Call<Map<String, Float>>" },
  {
    input: "Promise<[string, number][]>",
    output: "Call<List<Map<String, Float>>>"
  },
  { input: "Response<[string, number]>", output: "Call<Map<String, Float>>" },
  {
    input: "Response<[string, number][]>",
    output: "Call<List<Map<String, Float>>>"
  },
  {
    input: "Promise<Response<[string, number]>>",
    output: "Call<Map<String, Float>>"
  },
  {
    input: "Promise<Response<[string, number][]>>",
    output: "Call<List<Map<String, Float>>>"
  },

  { input: "[number, string]", output: "Map<Int, String>" },
  { input: "[number, string] | undefined", output: "Map<Int, String>" },
  { input: "[number, string][]", output: "List<Map<Int, String>>" },
  {
    input: "[number, string][] | undefined",
    output: "List<Map<Int, String>>"
  },
  { input: "Promise<[number, string]>", output: "Call<Map<Int, String>>" },
  {
    input: "Promise<[number, string][]>",
    output: "Call<List<Map<Int, String>>>"
  },
  { input: "Response<[number, string]>", output: "Call<Map<Int, String>>" },
  {
    input: "Response<[number, string][]>",
    output: "Call<List<Map<Int, String>>>"
  },
  {
    input: "Promise<Response<[number, string]>>",
    output: "Call<Map<Int, String>>"
  },
  {
    input: "Promise<Response<[number, string][]>>",
    output: "Call<List<Map<Int, String>>>"
  },

  // { input: "Promise", output: "Call" },
  // { input: "Response", output: "Call" },
  { input: "void", output: "Call<Unit>" },
  { input: "Promise<void>", output: "Call<Unit>" },
  { input: "Response<void>", output: "Call<Unit>" },
  { input: "Promise<Response<void>>", output: "Call<Unit>" },

  { input: "Get", output: "GET" },
  { input: "Post", output: "POST" },
  { input: "Put", output: "PUT" },
  { input: "Delete", output: "DELETE" },
  { input: "Body", output: "Body" },
  { input: "interface", output: "data class" },
  { input: "class", output: "class" }
];
