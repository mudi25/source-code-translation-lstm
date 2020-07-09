import { Project, TypeGuards } from "ts-morph";
import { join } from "path";
import { generate } from "randomstring";
interface TGenerateDataModel {
  source: string[];
  target: string[];
}

export class GenerateData {
  private count: number;
  private project: Project;
  constructor(count: number) {
    this.count = count;
    this.project = new Project({
      tsConfigFilePath: join(__dirname, "..", "tsconfig.json")
    });
  }

  async create(): Promise<TGenerateDataModel[]> {
    try {
      const data: TGenerateDataModel[] = [];
      const source = this.project.addSourceFileAtPath(
        join(__dirname, "model.ts")
      );
      let temp = 0;
      while (temp < this.count) {
        const mSource: string[] = [];
        const mTarget: string[] = [];
        source.forEachChild(child => {
          if (TypeGuards.isInterfaceDeclaration(child)) {
            const interfaceName = generate({
              length: 12,
              charset: "alphabetic"
            });
            mSource.push("interface");
            mSource.push(interfaceName);
            mTarget.push("data class");
            mTarget.push(interfaceName);

            child.getProperties().forEach((property, index) => {
              const propertyName = generate({
                length: 10,
                charset: "alphabetic"
              });
              const tsType =
                ": " +
                property
                  .getNameNode()
                  .getType()
                  .getText();

              const ktType = propertyTypeCastToDataClassType(index);

              mSource.push(propertyName);
              mSource.push(tsType);

              mTarget.push(propertyName);
              mTarget.push(ktType);
            });
          }
        });
        data.push({ source: mSource, target: mTarget });

        temp++;
      }
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

function propertyTypeCastToDataClassType(index: number): string {
  switch (index) {
    case 0:
      return "Boolean";
    case 1:
      return "Boolean";
    case 2:
      return "List<Boolean>";
    case 3:
      return "List<Boolean>";

    case 4:
      return "Float";
    case 5:
      return "Float";
    case 6:
      return "List<Float>";
    case 7:
      return "List<Float>";

    case 8:
      return "String";
    case 9:
      return "String";
    case 10:
      return "List<String>";
    case 11:
      return "List<String>";

    case 12:
      return "Any";
    case 13:
      return "Any";
    case 14:
      return "List<Any>";
    case 15:
      return "List<Any>";

    default:
      throw new Error("unknown index");
  }
}
