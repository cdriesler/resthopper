import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Cosine extends ResthopperComponent {

	public guid: string = "d2d2a900-780c-4d58-9a35-1f9d8d35df6f";
	public name: string = "Cosine";
	public category: string = "Maths";
	public subCategory: string = "Trig";
	public description: string = "Compute the cosine of a value";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Value_x": CosineInput_Value_x,
	}

	public output:
	{
		"Result_y": CosineOutput_Result_y,
	}

	constructor() {
		super();
		this.input = {
			"Value_x": new CosineInput_Value_x(),
		}
		this.output = {
			"Result_y": new CosineOutput_Result_y(),
		}
	}

}

class CosineInput_Value_x extends ResthopperParameter {

	public name: string = "Value";
	public nickName: string = "x";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CosineOutput_Result_y extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "y";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
