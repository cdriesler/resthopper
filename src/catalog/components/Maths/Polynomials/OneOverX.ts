import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class OneOverX extends ResthopperComponent {

	public guid: string = "797d922f-3a1d-46fe-9155-358b009b5997";
	public name: string = "OneOverX";
	public category: string = "Maths";
	public subCategory: string = "Polynomials";
	public description: string = "Compute one over x.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"value_x": OneOverXInput_value_x,
	}

	public output:
	{
		"result_y": OneOverXOutput_result_y,
	}

	constructor() {
		super();
		this.input = {
			"value_x": new OneOverXInput_value_x(),
		}
		this.output = {
			"result_y": new OneOverXOutput_result_y(),
		}
	}

}

class OneOverXInput_value_x extends ResthopperParameter {

	public name: string = "Value";
	public nickName: string = "x";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OneOverXOutput_result_y extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "y";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
