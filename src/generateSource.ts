import { Project, TypeGuards } from "ts-morph";
import { join } from "path";
import { generate } from "randomstring";
import { writeFileSync, readFileSync } from "fs";

async function create(): Promise<void> {
  try {
    const project = new Project({
      tsConfigFilePath: join(__dirname, "..", "tsconfig.json"),
    });
    const source = new Project().createSourceFile(
      join(__dirname, "temp.ts"),
      readFileSync(join(__dirname, "model.ts"), { encoding: "utf8" })
    );
    if (!source) throw new Error("dasdasd");
    for (let index = 0; index < 5; index++) {
      let code = "";
      source.getSourceFile().forEachChild((child) => {
        if (TypeGuards.isInterfaceDeclaration(child)) {
          const names = generate({
            capitalization: "true",
            charset: "alphabetic",
            length: 8,
          });
          code += "interface " + names + " {";
          child.getProperties().forEach((property) => {
            const tipe = property.getType().getText();
            code +=
              generate({
                capitalization: "false",
                charset: "alphabetic",
                length: 8,
              }) +
              ": " +
              tipe +
              ";";
          });
          code += "}";
          writeFileSync(
            join(__dirname, "..", "data", "testingSource", names + ".ts"),
            code
          );
        }
      });
    }
    return;
  } catch (error) {
    throw new Error(error.message);
  }
}
create();
