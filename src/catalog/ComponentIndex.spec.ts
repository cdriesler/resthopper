import componentIndex from './ComponentIndex';
import { expect } from 'chai';
import 'mocha';

describe("given the generated component index", () => {

    describe("when getting the multiplication componenet", () => {

        it("should allow me to get input parameters as explicitly named properties", () => {
            expect(componentIndex["multiplication"].input.a).to.exist;
        });

        it("should allow me to get input parameters by their index", () => {
            expect(componentIndex["multiplication"].getInputByIndex(0)).to.exist;
        });

    });

});