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

	public library: string = "Math Components";

	public input:
	{
		"Value_x": NaturallogarithmInput_Value_x,
	}

	public output:
	{
		"Result_y": NaturallogarithmOutput_Result_y,
	}

	constructor() {
		super();
		this.input = {
			"Value_x": new NaturallogarithmInput_Value_x(),
		}
		this.output = {
			"Result_y": new NaturallogarithmOutput_Result_y(),
		}
	}

}

class NaturallogarithmInput_Value_x extends ResthopperParameter {

	public name: string = "Value";
	public nickName: string = "x";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class NaturallogarithmOutput_Result_y extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "y";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
