// import { Project, TypeGuards } from "ts-morph";
// import { join } from "path";
// import { generate } from "randomstring";
// export interface TGenerateDataModel {
//   input: number;
//   output: string;
// }

// export class GenerateData {
//   private count: number;
//   private project: Project;
//   constructor(count: number) {
//     this.count = count;
//     this.project = new Project({
//       tsConfigFilePath: join(__dirname, "..", "tsconfig.json"),
//     });
//   }

//   async create(): Promise<TGenerateDataModel[]> {
//     try {
//       const data: TGenerateDataModel[] = [];
//       const source = this.project.addSourceFileAtPath(
//         join(__dirname, "model.ts")
//       );
//       let temp = 0;
//       while (temp < this.count) {
//         const mSource: string[] = [];
//         const mTarget: string[] = [];
//         source.forEachChild((child) => {
//           if (TypeGuards.isInterfaceDeclaration(child)) {
//             // const interfaceName = generate({
//             //   length: 12,
//             //   charset: "alphabetic",
//             // });
//             // mSource.push("interface");
//             // mSource.push(interfaceName);
//             // mTarget.push("data class");
//             // mTarget.push(interfaceName);
//             // child.getProperties().forEach((property, index) => {
//             //   const propertyName = generate({
//             //     length: 10,
//             //     charset: "alphabetic",
//             //   });
//             //   const tsType = ": " + property.getNameNode().getType().getText();
//             //   const ktType = propertyTypeCastToDataClassType(index);
//             //   mSource.push(propertyName);
//             //   mSource.push(tsType);
//             //   mTarget.push(propertyName);
//             //   mTarget.push(ktType);
//             // });
//             const mInput: number[] = [];
//             child.getProperties().forEach((property) => {
//               const dataType = property.getNameNode().getType().getText();
//               switch (dataType) {
//                 case "boolean":
//                   mInput.push(TsType.BOOLEAN);

//                   break;
//                 case "boolean | undefined":
//                   mInput.push(TsType.BOOLEAN_OR_NULL);
//                   break;
//                 case "boolean[]":
//                   mInput.push(TsType.BOOLEAN_ARRAY);
//                   break;
//                 case "boolean[] | undefined":
//                   mInput.push(TsType.BOOLEAN_ARRAY_OR_NULL);
//                   break;

//                 case "number":
//                   mInput.push(TsType.NUMBER);
//                   break;
//                 case "number | undefined":
//                   mInput.push(TsType.NUMBER_OR_NULL);
//                   break;
//                 case "number[]":
//                   mInput.push(TsType.NUMBER_ARRAY);
//                   break;
//                 case "number[] | undefined":
//                   mInput.push(TsType.NUMBER_ARRAY_OR_NULL);
//                   break;

//                 case "string":
//                   mInput.push(TsType.STRING);
//                   break;
//                 case "string | undefined":
//                   mInput.push(TsType.STRING_OR_NULL);
//                   break;
//                 case "string[]":
//                   mInput.push(TsType.STRING_ARRAY);
//                   break;
//                 case "string[] | undefined":
//                   mInput.push(TsType.STRING_ARRAY_OR_NULL);
//                   break;

//                 case "any":
//                   mInput.push(TsType.ANY);
//                   break;
//                 case "any | undefined":
//                   mInput.push(TsType.ANY_OR_NULL);
//                   break;
//                 case "any[]":
//                   mInput.push(TsType.ANY_ARRAY);
//                   break;
//                 case "any[] | undefined":
//                   mInput.push(TsType.ANY_ARRAY_OR_NULL);
//                   break;

//                 default:
//                   mInput.push(-1);
//                   break;
//               }
//             });
//           }
//         });
//         data.push({ source: mSource, target: mTarget });

//         temp++;
//       }
//       return data;
//     } catch (error) {
//       throw new Error(error.message);
//     }
//   }
// }

// function propertyTypeCastToDataClassType(index: number): string {
//   switch (index) {
//     case 0:
//       return "Boolean";
//     case 1:
//       return "Boolean";
//     case 2:
//       return "List<Boolean>";
//     case 3:
//       return "List<Boolean>";

//     case 4:
//       return "Float";
//     case 5:
//       return "Float";
//     case 6:
//       return "List<Float>";
//     case 7:
//       return "List<Float>";

//     case 8:
//       return "String";
//     case 9:
//       return "String";
//     case 10:
//       return "List<String>";
//     case 11:
//       return "List<String>";

//     case 12:
//       return "Any";
//     case 13:
//       return "Any";
//     case 14:
//       return "List<Any>";
//     case 15:
//       return "List<Any>";

//     default:
//       throw new Error("unknown index");
//   }
// }

// export enum TsType {
//   BOOLEAN,
//   BOOLEAN_OR_NULL,
//   BOOLEAN_ARRAY,
//   BOOLEAN_ARRAY_OR_NULL,

//   NUMBER,
//   NUMBER_OR_NULL,
//   NUMBER_ARRAY,
//   NUMBER_ARRAY_OR_NULL,

//   STRING,
//   STRING_OR_NULL,
//   STRING_ARRAY,
//   STRING_ARRAY_OR_NULL,

//   ANY,
//   ANY_OR_NULL,
//   ANY_ARRAY,
//   ANY_ARRAY_OR_NULL,
// }
// /** */
// export function TsToKt(value: number) {
//   switch (value) {
//     case TsType.BOOLEAN:
//       return "Boolean";
//     case TsType.BOOLEAN_OR_NULL:
//       return "Boolean /** NULL */";
//     case TsType.BOOLEAN_ARRAY:
//       return "List<Boolean>";
//     case TsType.BOOLEAN_ARRAY_OR_NULL:
//       return "List<Boolean> /** NULL */";

//     case TsType.NUMBER:
//       return "Float";
//     case TsType.NUMBER_OR_NULL:
//       return "Float /** NULL */";
//     case TsType.NUMBER_ARRAY:
//       return "List<Float>";
//     case TsType.NUMBER_ARRAY_OR_NULL:
//       return "List<Float> /** NULL */";

//     case TsType.STRING:
//       return "String";
//     case TsType.STRING_OR_NULL:
//       return "String /** NULL */";
//     case TsType.STRING_ARRAY:
//       return "List<String>";
//     case TsType.STRING_ARRAY_OR_NULL:
//       return "List<String> /** NULL */";

//     case TsType.ANY:
//       return "Any";
//     case TsType.ANY_OR_NULL:
//       return "Any /** NULL */";
//     case TsType.ANY_ARRAY:
//       return "List<Any>";
//     case TsType.ANY_ARRAY_OR_NULL:
//       return "List<Any> /** NULL */";

//     default:
//       return "";
//   }
// }
