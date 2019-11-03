import Defintion from './Definition';
import { expect } from 'chai';
import 'mocha';
import Definition from './Definition';
import Component from './Component';
import Parameter from './Parameter';

describe("given a grashopper definition", () => {

    describe("when compiled without parameters or components", () => {

        let ghx = "";

        before(() => {
            const definition = new Definition();
            ghx = definition.compile();
        })

        it("should return boilerplate code", () => {
            expect(ghx).to.exist;
        });

        it("should declare an archive version", () => {
            expect(ghx).to.contain("ArchiveVersion");
        });

        it("should contain a definition chunk", () => {
            expect(ghx).to.contain("Definition");
        });

        it("should declare a plugin version", () => {
            expect(ghx).to.contain("plugin_version");
        });

        it("should enumerate the document header", () => {
            expect(ghx).to.contain('<chunk name="DocumentHeader">');
        });

        it("should enumerate the definition properties", () => {
            expect(ghx).to.contain('<chunk name="DefinitionProperties">');
        });

        it("should enumerate the rcp layout, whatever that is", () => {
            expect(ghx).to.contain('<chunk name="RcpLayout">');
        });

        it("should enumerate any external gha libraries used", () => {
            expect(ghx).to.contain('<chunk name="GHALibraries">');
        });

        it("should enumerate the definition objects", () => {
            expect(ghx).to.contain('<chunk name="DefinitionObjects">');
        });

    });

    describe("when compiled with a few parameters and components", () => {

        let definition = new Defintion();
        let ghx = "";

        before(() => {
            let inputNumber = new Parameter("input", 'Number', 2);
            inputNumber.isInput = true;

            let multiply = new Component('Multiplication');
            multiply.setSource(0, inputNumber);
            multiply.setSource(1, inputNumber);

            let outputNumber = new Parameter("out", 'Number');
            outputNumber.isOutput = true;
            outputNumber.setSource(multiply, 0);

            definition.components = [multiply];
            definition.parameters = [inputNumber, outputNumber];

            ghx = definition.compile();

            //console.log(ghx);
        });

        it("should identify the corrent number of definition objects", () => {
            expect(ghx).to.contain('<item name="ObjectCount" type_name="gh_int32" type_code="3">5</item>');
        });

    });

});