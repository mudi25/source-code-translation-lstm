import { Project, TypeGuards } from "ts-morph";
import { join, basename } from "path";
import * as brain from "brain.js";
import { readFileSync, writeFileSync } from "fs";

async function create(path: string): Promise<void> {
  try {
    const fileName = basename(path, ".ts");
    const source = new Project({
      tsConfigFilePath: join(__dirname, "..", "tsconfig.json"),
    }).addSourceFileAtPath(path);
    const net = new brain.recurrent.LSTM();
    const jsonNet = readFileSync(
      join(__dirname, "..", "data", "net.json"),
      "utf8"
    );
    net.fromJSON(JSON.parse(jsonNet));
    source.forEachChild((child) => {
      let code = "";
      if (TypeGuards.isInterfaceDeclaration(child)) {
        code += "data class " + child.getName() + "(";
        child.getProperties().forEach((property, index) => {
          const nameProperty = "val " + property.getName() + ": ";
          const tipeProperty = property
            .getNameNode()
            .getType()
            .getText()
            .replace("|", "")
            .replace("undefined", "")
            .replace(" ", "")
            .trim();
          const tipeKotlin = net.run(tipeProperty);
          if (tipeKotlin.startsWith("List")) {
            const tipes = "List<" + tipeKotlin.split(" ")[1] + ">";
            const withComa =
              index < child.getProperties().length - 1 === true ? "," : "";
            code += nameProperty + tipes + withComa;
          } else {
            const withComa =
              index < child.getProperties().length - 1 === true ? "," : "";
            code += nameProperty + tipeKotlin + withComa;
          }
        });
        code += ")";
        writeFileSync(
          join(__dirname, "..", "data", "testingSource", fileName + ".kt"),
          code
        );
      }
    });
  } catch (error) {
    throw new Error(error.message);
  }
}
create(join(__dirname, "..", "data", "testingSource", "AgohbsJv.ts"));
