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
            mult.getInputByIndex(0)!.values = [2];
            mult.getInputByIndex(1)!.values = [3];
            let result = mult.getOutputByIndex(0);

            let pt = ComponentIndex.createComponent("Construct Point");
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

            ghx = JSON.stringify(definition.toGrasshopperDocument([val?.instanceGuid ?? ""]));
        })

        it("should generate valid markup", () => {
            console.log(ghx);
            expect(ghx).to.not.equal("");
        })
    })
})