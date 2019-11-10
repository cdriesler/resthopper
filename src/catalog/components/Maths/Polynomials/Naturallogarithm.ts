import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Naturallogarithm extends ResthopperComponent {

	public guid: string = "23afc7aa-2d2f-4ae7-b876-bf366246b826";
	public name: string = "Naturallogarithm";
	public category: string = "Maths";
	public subCategory: string = "Polynomials";
	public description: string = "Compute the natural logarithm of a value.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"value_x": NaturallogarithmInput_value_x,
	}

	public output:
	{
		"result_y": NaturallogarithmOutput_result_y,
	}

	constructor() {
		super();
		this.input = {
			"value_x": new NaturallogarithmInput_value_x(),
		}
		this.output = {
			"result_y": new NaturallogarithmOutput_result_y(),
		}
	}

}

class NaturallogarithmInput_value_x extends ResthopperParameter {

	public name: string = "Value";
	public nickName: string = "x";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class NaturallogarithmOutput_result_y extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "y";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
