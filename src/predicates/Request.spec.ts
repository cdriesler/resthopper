import Request from './Request';
import Definition from '../models/ResthopperDefinition';
import ComponentIndex from '../catalog/ComponentIndex';
import ParameterIndex from '../catalog/ParameterIndex';
import { getSchemaOutput } from './../utils/Schema';
import { expect } from 'chai';
import 'mocha';

describe("given a simple multiplication definition", () => {

    describe("when dispatching the resthopper request", () => {

        let def = new Definition();

        before(() => {
            let inputNumber = ParameterIndex.createParameter("Number", 2);
            inputNumber.isUserInput = true;

            let multiply = ComponentIndex.createComponent("Multiplication");
            multiply.setInputByIndex(0, inputNumber);
            multiply.setInputByIndex(1, inputNumber);

            let outputNumber = ParameterIndex.createParameter("Number");
            outputNumber.nickName = "final_value";
            outputNumber.isUserOutput = true;
            outputNumber.setSource(multiply.getOutputByIndex(0)!)

            def.components = [multiply];
            def.parameters = [inputNumber, outputNumber];
        });

        it("should return an accurate value", (done) => {
            Request.send("http://localhost:8081", def)
            .then(x => {
                console.log(x);
                console.log(`Final output is: ${+getSchemaOutput(x)}`);
                expect(+getSchemaOutput(x)).to.equal(4);
                done();
            })
            .catch(err => {
                console.log(err);
                done();
            });
        })
    })
})