import ResthopperDefinition from './ResthopperDefinition';
import ComponentIndex from '../catalog/ComponentIndex';
import ParameterIndex from '../catalog/ParameterIndex';
import { expect } from 'chai';
import 'mocha';

describe("given a resthopper definition", () => {

    describe("when compiled with variable and non-variable markup", () => {

        let ghx = "";

        before(() => {
            let definition = new ResthopperDefinition();

            let num = ParameterIndex.createParameter("Number", 2);
            num.isUserInput = true;

            let mult = ComponentIndex.createComponent("Multiplication");
            mult.setInputByIndex(0, num);
            mult.setInputByIndex(1, num);
            let result = mult.getOutputByIndex(0);

            let pt = ComponentIndex.createComponent("ConstructPoint");
            pt.setInputByIndex(0, result!);
            pt.setInputByIndex(1, result!);
            pt.setInputByIndex(2, result!);
            let point = pt.getOutputByIndex(0);

            let dept = ComponentIndex.createComponent("Deconstruct");
            dept.setInputByIndex(0, point!);
            let val = dept.getOutputByIndex(0);

            let out = ParameterIndex.createParameter("Number");
            out.setSource(val!);
            out.nickName = "final";
            out.isUserOutput = true;

            definition.parameters = [num, out];
            definition.components = [mult, pt, dept];

            ghx = JSON.stringify(definition.toRequest());
        })

        it("should generate valid markup", () => {
            console.log(ghx);
            expect(ghx).to.not.equal("");
        })
    })
})

// describe("given a grashopper definition", () => {

//     describe("when compiled without parameters or components", () => {

//         let ghx = "";

//         before(() => {
//             const definition = new ResthopperDefinition();
//             ghx = definition.compile();
//         })

//         it("should return boilerplate code", () => {
//             expect(ghx).to.exist;
//         });

//         it("should declare an archive version", () => {
//             expect(ghx).to.contain("ArchiveVersion");
//         });

//         it("should contain a definition chunk", () => {
//             expect(ghx).to.contain("Definition");
//         });

//         it("should declare a plugin version", () => {
//             expect(ghx).to.contain("plugin_version");
//         });

//         it("should enumerate the document header", () => {
//             expect(ghx).to.contain('<chunk name="DocumentHeader">');
//         });

//         it("should enumerate the definition properties", () => {
//             expect(ghx).to.contain('<chunk name="DefinitionProperties">');
//         });

//         it("should enumerate the rcp layout, whatever that is", () => {
//             expect(ghx).to.contain('<chunk name="RcpLayout">');
//         });

//         it("should enumerate any external gha libraries used", () => {
//             expect(ghx).to.contain('<chunk name="GHALibraries">');
//         });

//         it("should enumerate the definition objects", () => {
//             expect(ghx).to.contain('<chunk name="DefinitionObjects">');
//         });

//     });

//     describe("when compiled with implicit index-based connections", () => {

//         let definition = new ResthopperDefinition();
//         let ghx = "";

//         before(() => {
//             let inputNumber = ParameterIndex.createParameter("Number", 2);
//             inputNumber.isUserInput = true;

//             let multiply = ComponentIndex.createComponent("Multiplication");
//             multiply.setInputByIndex(0, inputNumber);
//             multiply.setInputByIndex(1, inputNumber);

//             let outputNumber = ParameterIndex.createParameter("Number");
//             outputNumber.isUserOutput = true;
//             outputNumber.setSource(multiply.getOutputByIndex(0)!)

//             definition.components = [multiply];
//             definition.parameters = [inputNumber, outputNumber];

//             ghx = definition.compile();
//         });

//         it("should identify the corrent number of definition objects", () => {
//             expect(ghx).to.contain('<item name="ObjectCount" type_name="gh_int32" type_code="3">5</item>');
//         });

//     });

// });