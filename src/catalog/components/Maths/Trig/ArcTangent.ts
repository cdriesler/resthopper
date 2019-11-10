import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ArcTangent extends ResthopperComponent {

	public guid: string = "b4647919-d041-419e-99f5-fa0dc0ddb8b6";
	public name: string = "ArcTangent";
	public category: string = "Maths";
	public subCategory: string = "Trig";
	public description: string = "Compute the angle whose tangent is the specified value.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Value_x": ArcTangentInput_Value_x,
	}

	public output:
	{
		"Result_y": ArcTangentOutput_Result_y,
	}

	constructor() {
		super();
		this.input = {
			"Value_x": new ArcTangentInput_Value_x(),
		}
		this.output = {
			"Result_y": new ArcTangentOutput_Result_y(),
		}
	}

}

class ArcTangentInput_Value_x extends ResthopperParameter {

	public name: string = "Value";
	public nickName: string = "x";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ArcTangentOutput_Result_y extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "y";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
