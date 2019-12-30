import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Sine extends ResthopperComponent {

	public guid: string = "7663efbb-d9b8-4c6a-a0da-c3750a7bbe77";
	public name: string = "Sine";
	public nickName: string = "Sin";
	public category: string = "Maths";
	public subCategory: string = "Trig";
	public description: string = "Compute the sine of a value";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"value_x": SineInput_value_x,
	}

	public output:
	{
		"result_y": SineOutput_result_y,
	}

	constructor() {
		super();
		this.input = {
			"value_x": new SineInput_value_x(),
		}
		this.output = {
			"result_y": new SineOutput_result_y(),
		}
	}

}

class SineInput_value_x extends ResthopperParameter {

	public name: string = "Value";
	public nickName: string = "x";
	public description: string = "Input value"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SineOutput_result_y extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "y";
	public description: string = "Output value"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
