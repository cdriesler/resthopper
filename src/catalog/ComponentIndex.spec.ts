import ComponentIndex, { Multiplication } from './ComponentIndex';
import { expect } from 'chai';
import 'mocha';

describe("given the generated component index", () => {

    describe("when getting the multiplication component", () => {

        it("should allow me to get input parameters as explicitly named properties", () => {
            expect(ComponentIndex.createComponent("Multiplication")?.input.a).to.exist;
        });

        it("should allow me to get input parameters by their index", () => {
            expect(ComponentIndex.createComponent("Multiplication")?.getInputByIndex(0)).to.exist;
        });

        it("should create a new instance on each lookup", () => {
            const a = ComponentIndex.createComponent("Multiplication");
            const b = ComponentIndex.createComponent("Multiplication");
            expect((<Multiplication>a).input.a.guid).to.not.equal(b?.input.a.guid);
        });

    });

});