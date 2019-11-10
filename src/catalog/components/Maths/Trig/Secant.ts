import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Secant extends ResthopperComponent {

	public guid: string = "60103def-1bb7-4700-b294-3a89100525c4";
	public name: string = "Secant";
	public category: string = "Maths";
	public subCategory: string = "Trig";
	public description: string = "Compute the secant (reciprocal of the Cosine) of an angle.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"value_x": SecantInput_value_x,
	}

	public output:
	{
		"result_y": SecantOutput_result_y,
	}

	constructor() {
		super();
		this.input = {
			"value_x": new SecantInput_value_x(),
		}
		this.output = {
			"result_y": new SecantOutput_result_y(),
		}
	}

}

class SecantInput_value_x extends ResthopperParameter {

	public name: string = "Value";
	public nickName: string = "x";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SecantOutput_result_y extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "y";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
