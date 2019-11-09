import axios from 'axios';
import fs from 'fs';
import Parse from './predicates/Parse';
import ResthopperComponent from './models/ResthopperComponent';
import ResthopperParameter from './models/ResthopperParameter';

// Get server configuration and convert response objects to resthopper model
axios.get("http://localhost:8081/grasshopper").then(x => {
    let parameters: ResthopperParameter[] = [];
    let components: ResthopperComponent[] = [];

    (<any[]>x.data).forEach(obj => {
        const c = Parse.ComputeObjectAsResthopperComponent(obj);

        if (c.isObsolete) {
            return;
        }

        if (c.category == "Params") {
            const validSubCategories = [ "Primitive", "Geometry" ];
            
            if (validSubCategories.includes(c.subCategory)) {
                var p = Parse.ResthopperComponentAsResthopperParam(c);
                parameters.push(p);
            }
        }
        else {
            const invalidLibraries = [ "Galapagos" ];

            if (!invalidLibraries.includes(c.libraryName)) {
                components.push(c);
            }
        }
    });

    writeParameterCatalog(parameters);

    console.log(`${parameters.length} parameters & ${components.length} components`);
});

function writeParameterCatalog(parameters: ResthopperParameter[]) {
    
    let indexImports: string[] = ["import ResthopperParameter from './../models/ResthopperParameter';"];
    let indexCases: string[] = [];
    let indexExports: string[] = [];
    let indexTypes: string[] = [];

    const dir = "./src/catalog/parameters/";

    parameters.sort((a, b) => a.name.localeCompare(b.name)).forEach(x => {
        var className = x.name.replace(" ", "").replace(/\W/g, '');

        if (x.name == "Domain²") {
            className = "DomainSquared";
        }

        let text: string[] = [
            "import ResthopperParameter from './../../models/ResthopperParameter';",
            "",
            `export class ${className}Param extends ResthopperParameter {`,
            "",
            `\tpublic guid: string = "${x.guid}";`,
            `\tpublic name: string = "${className}";`,
            `\tpublic nickName: string = "${x.nickName}"`,
            `\tpublic description: string = "${x.description}"`,
            `\tpublic isOptional: boolean = false;`,
            `\tpublic typeName: string = "${x.typeName}"`,
            "",
            `\tpublic isUserInput: boolean = false;`,
            `\tpublic isUserOutput: boolean = false;`,
            "",
            "\tpublic sources: string[] = [];",
            "\tpublic values: any[] = []",
            "",
            "\tconstructor(value?: any) {",
            "\t\tsuper();",
            "\t\tthis.values = [value!] ?? [];",
            "\t}",
            "",
            "}"
        ];        

        fs.writeFileSync(`${dir}${className}.ts`, text.join("\n"));

        indexImports.push(`import { ${className}Param } from './parameters/${className}';`);
        indexCases.push(`\t\t\tcase "${className}":\n\t\t\t\treturn new ${className}Param(value);`);
        indexExports.push(`export { ${className}Param } from './parameters/${className}';`);
        indexTypes.push(`"${className}"`);
    });

    let index: string[] = [];
    index = index.concat(indexImports);
    index = index.concat([
        "",
        "export default class ParameterIndex {",
        "",
        "\tpublic static createParameter(type: GrasshopperParameter, value?: any): ResthopperParameter {",
        "\t\tswitch(type) {"
    ]);
    index = index.concat(indexCases);
    index = index.concat([
        "\t\t\tdefault:\n\t\t\t\tthrow new Error('Selected parameter is not supported by resthopper.');",
        "\t\t}",
        "\t}",
        "}",
        ""
    ]);
    index = index.concat(indexExports);
    index = index.concat([
        "",
        "export type GrasshopperParameter = ",
        indexTypes.join(" |\n"),
    ]);

    fs.writeFileSync("./src/catalog/ParameterIndex.ts", index.join("\n"));
}
