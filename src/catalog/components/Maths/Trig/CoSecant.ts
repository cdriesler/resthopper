import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CoSecant extends ResthopperComponent {

	public guid: string = "d222500b-dfd5-45e0-933e-eabefd07cbfa";
	public name: string = "CoSecant";
	public category: string = "Maths";
	public subCategory: string = "Trig";
	public description: string = "Compute the co-secant (reciprocal of the Sine) of an angle.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Value_x": CoSecantInput_Value_x,
	}

	public output:
	{
		"Result_y": CoSecantOutput_Result_y,
	}

	constructor() {
		super();
		this.input = {
			"Value_x": new CoSecantInput_Value_x(),
		}
		this.output = {
			"Result_y": new CoSecantOutput_Result_y(),
		}
	}

}

class CoSecantInput_Value_x extends ResthopperParameter {

	public name: string = "Value";
	public nickName: string = "x";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CoSecantOutput_Result_y extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "y";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
