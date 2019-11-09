import Request from './Request';
import Definition from '../models/ResthopperDefinition';
import Component from './../models/Component';
import Parameter from './../models/Parameter';
import { getSchemaOutput } from './../utils/Schema';
import { expect } from 'chai';
import 'mocha';

describe("given a simple multiplication definition", () => {

    describe("when dispatching the resthopper request", () => {

        let def = new Definition();

        before(() => {
            let inputNumber = new Parameter("input", 'Number', 2);
            inputNumber.isInput = true;

            let multiply = new Component('Multiplication');
            multiply.setSource(0, inputNumber);
            multiply.setSource(1, inputNumber);

            let multiplyAgain = new Component('Multiplication');
            multiplyAgain.setSource(0, multiply, 0);
            multiplyAgain.setSource(1, inputNumber);

            let outputNumber = new Parameter("out", 'Number');
            outputNumber.isOutput = true;
            outputNumber.setSource(multiplyAgain, 0);

            // def.components = [multiply, multiplyAgain];
            // def.parameters = [inputNumber, outputNumber];
        })

        // it("should return an accurate value", (done) => {
        //     Request.send("http://localhost:8081", def)
        //     .then(x => {
        //         //console.log(x);
        //         expect(+getSchemaOutput(x)).to.equal(8);
        //         done();
        //     })
        //     .catch(err => {
        //         done();
        //     });
        // })
    })
})