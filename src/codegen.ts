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
    
    let imports = [];
    let cases = [];
    let exports = [];
    let types = "";

    const dir = "./src/catalog/parameters/";

    parameters.forEach(x => {
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
    });
}
