import Defintion from './Definition';
import { expect } from 'chai';
import 'mocha';
import Definition from './Definition';

describe("given a grashopper definition", () => {

    describe("when compiled without ", () => {

        let ghx = "";

        before(() => {
            const definition = new Definition();
            ghx = definition.compile();
        })

        it("should return boilerplate code", () => {
            console.log(ghx);
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

});