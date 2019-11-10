import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ArcCosine extends ResthopperComponent {

	public guid: string = "49584390-d541-41f7-b5f6-1f9515ac0f73";
	public name: string = "ArcCosine";
	public category: string = "Maths";
	public subCategory: string = "Trig";
	public description: string = "Compute the angle whose cosine is the specified value.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Value_x": ArcCosineInput_Value_x,
	}

	public output:
	{
		"Result_y": ArcCosineOutput_Result_y,
	}

	constructor() {
		super();
		this.input = {
			"Value_x": new ArcCosineInput_Value_x(),
		}
		this.output = {
			"Result_y": new ArcCosineOutput_Result_y(),
		}
	}

}

class ArcCosineInput_Value_x extends ResthopperParameter {

	public name: string = "Value";
	public nickName: string = "x";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ArcCosineOutput_Result_y extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "y";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
