import Defintion from './Definition';
import { expect } from 'chai';
import 'mocha';

describe("given a grashopper definition", () => {

    describe("when empty", () => {

        const definition = new Defintion();

        it("should return accurate boilerplate markup on compile", () => {
            const ghx = definition.compile();
            console.log(ghx);
            expect(ghx).to.exist;
        });

    });

});