import { Project, SyntaxKind } from "ts-morph";
import { join } from "path";
import {
  IModel,
  IProperty,
  IControllerMethod,
  IControllerParameter,
  IController
} from "./vocab";

async function createModel(): Promise<void> {
  try {
    const project = new Project({
      tsConfigFilePath: join(__dirname, "..", "tsconfig.json")
    });
    const source = project.addSourceFileAtPath(join(__dirname, "model.ts"));
    const interfaces = source.getChildrenOfKind(
      SyntaxKind.InterfaceDeclaration
    )[0];
    const value: IModel = {
      name: interfaces.getName(),
      type: "interface",
      property: interfaces.getProperties().map(
        (it): IProperty => ({
          name: it.getName(),
          type: it
            .getNameNode()
            .getType()
            .getText(it)
        })
      )
    };
    console.log(value.name, value.type);
    console.log(
      value.property.map(it => `${it.name} => ${it.type}`).join("\n")
    );

    return;
  } catch (error) {
    console.log(error);
    return;
  }
}
//createModel();

async function createController(): Promise<void> {
  try {
    const project = new Project({
      tsConfigFilePath: join(__dirname, "..", "tsconfig.json")
    });
    const source = project.addSourceFileAtPath(
      join(__dirname, "controller.ts")
    );
    const controller = source.getChildrenOfKind(SyntaxKind.ClassDeclaration)[0];
    const decorator = controller.getDecorators()[0];
    const path =
      decorator.getArguments().length > 0
        ? decorator.getArguments()[0].getText()
        : "";
    const method: IControllerMethod[] = [];
    controller.getMethods().forEach(child => {
      const parameter = child
        .getParameters()
        .filter(it => it.getDecorator("Body"))
        .map(
          (it): IControllerParameter => ({
            decorator: "Body",
            name: it.getName(),
            type: it.getType().getText(it)
          })
        );
      const decorator = child.getDecorators()[0];
      const path =
        decorator.getArguments().length > 0
          ? decorator.getArguments()[0].getText()
          : "";
      method.push({
        name: child.getName(),
        decorator: decorator.getName(),
        parameter,
        path,
        returnType: child.getReturnType().getText(child)
      });
    });
    const mController: IController = {
      name: controller.getName() || "",
      type: "class",
      decorator: decorator.getName(),
      path,
      method
    };
    console.log(mController.name);
    console.log(mController.type);
    console.log(mController.decorator);
    console.log(mController.path);
    mController.method.forEach(it => {
      console.log(it.name, it.decorator, it.path, it.returnType);
      console.log(it.parameter.length);
      it.parameter.forEach(p => {
        console.log(p.decorator, p.name, p.type);
      });
    });
    return;
  } catch (error) {
    console.log(error);
    return;
  }
}
createController();
