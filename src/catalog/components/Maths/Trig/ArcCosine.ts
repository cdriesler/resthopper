import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ArcCosine extends ResthopperComponent {

	public guid: string = "49584390-d541-41f7-b5f6-1f9515ac0f73";
	public name: string = "ArcCosine";
	public nickName: string = "ACos";
	public category: string = "Maths";
	public subCategory: string = "Trig";
	public description: string = "Compute the angle whose cosine is the specified value.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"value_x": ArcCosineInput_value_x,
	}

	public output:
	{
		"result_y": ArcCosineOutput_result_y,
	}

	constructor() {
		super();
		this.input = {
			"value_x": new ArcCosineInput_value_x(),
		}
		this.output = {
			"result_y": new ArcCosineOutput_result_y(),
		}
	}

}

class ArcCosineInput_value_x extends ResthopperParameter {

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

class ArcCosineOutput_result_y extends ResthopperParameter {

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
