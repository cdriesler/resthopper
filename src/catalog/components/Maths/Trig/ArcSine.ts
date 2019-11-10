import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ArcSine extends ResthopperComponent {

	public guid: string = "cc15ba56-fae7-4f05-b599-cb7c43b60e11";
	public name: string = "ArcSine";
	public category: string = "Maths";
	public subCategory: string = "Trig";
	public description: string = "Compute the angle whose sine is the specified value.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Value_x": ArcSineInput_Value_x,
	}

	public output:
	{
		"Result_y": ArcSineOutput_Result_y,
	}

	constructor() {
		super();
		this.input = {
			"Value_x": new ArcSineInput_Value_x(),
		}
		this.output = {
			"Result_y": new ArcSineOutput_Result_y(),
		}
	}

}

class ArcSineInput_Value_x extends ResthopperParameter {

	public name: string = "Value";
	public nickName: string = "x";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ArcSineOutput_Result_y extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "y";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
