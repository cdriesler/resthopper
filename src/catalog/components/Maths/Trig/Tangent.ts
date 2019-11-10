import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Tangent extends ResthopperComponent {

	public guid: string = "0f31784f-7177-4104-8500-1f4f4a306df4";
	public name: string = "Tangent";
	public category: string = "Maths";
	public subCategory: string = "Trig";
	public description: string = "Compute the tangent of a value";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"value_x": TangentInput_value_x,
	}

	public output:
	{
		"result_y": TangentOutput_result_y,
	}

	constructor() {
		super();
		this.input = {
			"value_x": new TangentInput_value_x(),
		}
		this.output = {
			"result_y": new TangentOutput_result_y(),
		}
	}

}

class TangentInput_value_x extends ResthopperParameter {

	public name: string = "Value";
	public nickName: string = "x";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TangentOutput_result_y extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "y";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
