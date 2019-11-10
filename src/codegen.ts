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
            const invalidLibraries = [ "Galapagos", "Kangaroo2 Components" ];
            const invalidCategories = [ "X" ]

            if (!invalidLibraries.includes(c.libraryName) && !invalidCategories.includes(c.category)) {
                components.push(c);
            }
        }
    });

    fs.mkdirSync("./src/catalog");
    fs.mkdirSync("./src/catalog/components");
    fs.mkdirSync("./src/catalog/parameters");

    writeParameterCatalog(parameters);
    writeComponentCatalog(components);

    console.log(`${parameters.length} parameters & ${components.length} components`);
});

function writeParameterCatalog(parameters: ResthopperParameter[]): void {
    
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

        if (indexTypes.includes(`"${className}"`)) {
            return;
        }
        indexTypes.push(`"${className}"`);

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
    });

    let index: string[] = [];
    index = index.concat(indexImports);
    index = index.concat([
        "",
        "export default class ParameterIndex {",
        "",
        "\tprivate static names: string[] = [",
        indexTypes.map(x => `\t\t${x}`).join(",\n"),
        "\t];",
        "",
        "\tpublic static createParameter(type: GrasshopperParameter, value?: any): ResthopperParameter {",
        "\t\tswitch(type) {"
    ]);
    index = index.concat(indexCases);
    index = index.concat([
        "\t\t\tdefault:\n\t\t\t\tthrow new Error('Selected parameter is not supported by resthopper.');",
        "\t\t}",
        "\t}",
        "",
        "\tpublic static getAllParameters(): ResthopperParameter[] {",
        "\t\treturn this.names.map(x => this.createParameter(x as GrasshopperParameter));",
        "\t}",
        "",
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

function writeComponentCatalog(components: ResthopperComponent[]): void {

    var index: {
        [category: string]: {
            [subcategory: string]: string[]
        }
    } = {};

    // Write component-specific classes
    components.sort((a, b) => a.name.localeCompare(b.name)).forEach(c => {
        const dir = `./src/catalog/components/${c.category}/${c.subCategory}`;

        if(!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        const className = replaceNumbersWithNames(c.name.replace(" ", "").replace(/\W/g, ''));

        if (index[c.category] == undefined) {
            index[c.category] = {};
        }
        if (index[c.category][c.subCategory] == undefined) {
            index[c.category][c.subCategory] = [];
        }

        if(!index[c.category][c.subCategory].includes(className)) {
            index[c.category][c.subCategory].push(className);
        }

        var text: string[] = [
            "import ResthopperComponent from './../../../../models/ResthopperComponent';",
            "import ResthopperParameter from './../../../../models/ResthopperParameter';",
            "import { newGuid } from './../../../../utils/Guid';",
            "",
            `export default class ${className} extends ResthopperComponent {`,
            "",
            `\tpublic guid: string = "${c.guid}";`,
            `\tpublic name: string = "${c.name}";`,
            `\tpublic category: string = "${c.category}";`,
            `\tpublic subCategory: string = "${c.subCategory}";`,
            `\tpublic description: string = "${c.description}";`,
            `\tpublic isObsolete: boolean = ${c.isObsolete};`,
            "",
            `\tpublic library: string = "${c.libraryName}";`,
            "",
            "\tpublic input:",
            "\t{",
            Object.keys(c.input).map(x => `\t\t"${c.input[x].name.replace(" ", "")}_${c.input[x].nickName.replace(" ", "")}": ${className}Input_${c.input[x].name.replace(" ", "")}_${c.input[x].nickName.replace(" ", "")},`).join("\n"),
            "\t}",
            "",
            "\tpublic output:",
            "\t{",
            Object.keys(c.output).map(x => `\t\t"${c.output[x].name.replace(" ", "")}_${c.output[x].nickName.replace(" ", "")}": ${className}Output_${c.output[x].name.replace(" ", "")}_${c.output[x].nickName.replace(" ", "")},`).join("\n"),
            "\t}",
            "",
            "\tconstructor() {",
            "\t\tsuper();",
            "\t\tthis.input = {",
            Object.keys(c.input).map(x => `\t\t\t"${c.input[x].name.replace(" ", "")}_${c.input[x].nickName.replace(" ", "")}": new ${className}Input_${c.input[x].name.replace(" ", "")}_${c.input[x].nickName.replace(" ", "")}(),`).join("\n"),
            "\t\t}",
            "\t\tthis.output = {",
            Object.keys(c.output).map(x => `\t\t\t"${c.output[x].name.replace(" ", "")}_${c.output[x].nickName.replace(" ", "")}": new ${className}Output_${c.output[x].name.replace(" ", "")}_${c.output[x].nickName.replace(" ", "")}(),`).join("\n"),
            "\t\t}",
            "\t}",
            "",
            "}",
            "",
        ];

        Object.keys(c.input).forEach(x => {
            const i = c.input[x];

            text = text.concat([
                `class ${className}Input_${i.name.replace(" ", "")}_${i.nickName.replace(" ", "")} extends ResthopperParameter {`,
                "",
                `\tpublic name: string = "${i.name}";`,
                `\tpublic nickName: string = "${i.nickName}";`,
                `\tpublic isOptional: boolean = ${i.isOptional};`,
                `\tpublic typeName: string = "${i.typeName};"`,
                "",
                "\tconstructor() {",
                "\t\tsuper();",
                "\t\tthis.instanceGuid = newGuid();",
                "\t}",
                "",
                "}",
                ""
            ]);
        });

        Object.keys(c.output).forEach(x => {
            const o = c.output[x];

            text = text.concat([
                `class ${className}Output_${o.name.replace(" ", "")}_${o.nickName.replace(" ", "")} extends ResthopperParameter {`,
                "",
                `\tpublic name: string = "${o.name}";`,
                `\tpublic nickName: string = "${o.nickName}";`,
                `\tpublic isOptional: boolean = ${o.isOptional};`,
                `\tpublic typeName: string = "${o.typeName};"`,
                "",
                "\tconstructor() {",
                "\t\tsuper();",
                "\t\tthis.instanceGuid = newGuid();",
                "\t}",
                "",
                "}",
                ""
            ]);
        });

        fs.writeFileSync(`${dir}/${className}.ts`, text.join("\n"));
    });

    // Write category-level index
    Object.keys(index).forEach(x => {
        const path = `./src/catalog/components/${x}/${x}ComponentIndex.ts`;

        var categoryImports: string[] = [];
        var categoryExports: string[] = [];

        // Subcategory
        Object.keys(index[x]).forEach(y => {
            var exp: string[] = [ `\t${y}: {` ];

            index[x][y].forEach(z => {
                categoryImports.push(`import ${y}${z} from './${y}/${z}'`);
                exp.push(`\t\t${z}: ${y}${z},`)
            });

            exp.push("\t},");

            categoryExports.push(exp.join("\n"));
        })

        var categoryIndex: string[] = [
            categoryImports.join("\n"),
            "",
            `const ${x} = {`,
            categoryExports.join("\n"),
            "}",
            "",
            `export default ${x};`,
        ]

        fs.writeFileSync(path, categoryIndex.join("\n"));
    });

    const path = "./src/catalog/ComponentIndex.ts";

    var indexImports: string[] = ["import ResthopperComponent from '../models/ResthopperComponent';"];
    var indexCases: string[] = [];
    var indexTypes: string[] = [];

    // Write top-level index based on component list
    components.sort((a, b) => a.name.localeCompare(b.name)).forEach(c => {
        const imp = `import ${c.category} from './components/${c.category}/${c.category}ComponentIndex';`;
        if (!indexImports.includes(imp)) {
            indexImports.push(imp);
        }

        const className = replaceNumbersWithNames(c.name.replace(" ", "").replace(/\W/g, ''));
        if (indexTypes.includes(className)) {
            return;
        }

        indexTypes.push(`"${className}"`);
        indexCases.push(`\t\t\tcase "${className}":\n\t\t\t\treturn new ${c.category}.${c.subCategory}.${className}();`)
    });

    var text: string[] = [
        indexImports.join("\n"),
        "",
        "export default class ComponentIndex {",
        "",
        "\tprivate static names: string[] = [",
        indexTypes.map(x => `\t\t${x}`).join(",\n"),
        "\t];",
        "",
        "\tpublic static createComponent(name: GrasshopperComponent): ResthopperComponent {",
        "\t\tswitch(name) {",
        indexCases.join("\n"),
        "\t\t\tdefault:",
        "\t\t\t\tthrow new Error('Selected component is not supported by resthopper.');",
        "\t\t}",
        "\t}",
        "",
        "\tpublic static getAllComponents(): ResthopperComponent[] {",
        "\t\treturn this.names.map(x => this.createComponent(x as GrasshopperComponent));",
        "\t}",
        "",
        "}",
        "",
        `export type GrasshopperComponent =\n${indexTypes.join(" |\n")}`
    ];

    fs.writeFileSync(path, text.join("\n"));  
}

function replaceNumbersWithNames(s: string): string {
    const names = [ "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine" ];

    if (/\d/.test(s)) {
        for (let i = 0; i < 10; i++) {
            s = s.replace(`${i}`, names[i]);
        }
    }

    return s;
}
