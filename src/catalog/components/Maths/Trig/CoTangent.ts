import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CoTangent extends ResthopperComponent {

	public guid: string = "1f602c33-f38e-4f47-898b-359f0a4de3c2";
	public name: string = "CoTangent";
	public category: string = "Maths";
	public subCategory: string = "Trig";
	public description: string = "Compute the co-tangent (reciprocal of the Tangent) of an angle.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Value_x": CoTangentInput_Value_x,
	}

	public output:
	{
		"Result_y": CoTangentOutput_Result_y,
	}

	constructor() {
		super();
		this.input = {
			"Value_x": new CoTangentInput_Value_x(),
		}
		this.output = {
			"Result_y": new CoTangentOutput_Result_y(),
		}
	}

}

class CoTangentInput_Value_x extends ResthopperParameter {

	public name: string = "Value";
	public nickName: string = "x";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CoTangentOutput_Result_y extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "y";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
