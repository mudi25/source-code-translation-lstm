import { Project, TypeGuards } from "ts-morph";
import { join } from "path";
export class TsToSequence {
  private tsCode: string;
  private project: Project;
  constructor(tsCode: string) {
    this.tsCode = tsCode;
    this.project = new Project({
      tsConfigFilePath: join(__dirname, "..", "tsconfig.json")
    });
  }

  async create(): Promise<string[]> {
    try {
      const sequence: string[] = [];
      const source = this.project.createSourceFile(
        "tempTsModel.ts",
        this.tsCode
      );
      source.forEachChild(child => {
        if (TypeGuards.isInterfaceDeclaration(child)) {
          sequence.push("interface");
          sequence.push(child.getName());
          child.getProperties().forEach(property => {
            sequence.push(property.getName());
            sequence.push(
              ": " +
                property
                  .getNameNode()
                  .getType()
                  .getText()
            );
          });
        }
      });
      return sequence;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
