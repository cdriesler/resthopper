import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Sine extends ResthopperComponent {

	public guid: string = "7663efbb-d9b8-4c6a-a0da-c3750a7bbe77";
	public name: string = "Sine";
	public category: string = "Maths";
	public subCategory: string = "Trig";
	public description: string = "Compute the sine of a value";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Value_x": SineInput_Value_x,
	}

	public output:
	{
		"Result_y": SineOutput_Result_y,
	}

	constructor() {
		super();
		this.input = {
			"Value_x": new SineInput_Value_x(),
		}
		this.output = {
			"Result_y": new SineOutput_Result_y(),
		}
	}

}

class SineInput_Value_x extends ResthopperParameter {

	public name: string = "Value";
	public nickName: string = "x";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SineOutput_Result_y extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "y";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
