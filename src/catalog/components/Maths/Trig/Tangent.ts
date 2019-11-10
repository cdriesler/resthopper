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
		"Value_x": TangentInput_Value_x,
	}

	public output:
	{
		"Result_y": TangentOutput_Result_y,
	}

	constructor() {
		super();
		this.input = {
			"Value_x": new TangentInput_Value_x(),
		}
		this.output = {
			"Result_y": new TangentOutput_Result_y(),
		}
	}

}

class TangentInput_Value_x extends ResthopperParameter {

	public name: string = "Value";
	public nickName: string = "x";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TangentOutput_Result_y extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "y";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
