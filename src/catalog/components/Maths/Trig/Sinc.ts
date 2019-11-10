import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Sinc extends ResthopperComponent {

	public guid: string = "a2d9503d-a83c-4d71-81e0-02af8d09cd0c";
	public name: string = "Sinc";
	public category: string = "Maths";
	public subCategory: string = "Trig";
	public description: string = "Compute the sinc (Sinus Cardinalis) of a value.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Value_x": SincInput_Value_x,
	}

	public output:
	{
		"Result_y": SincOutput_Result_y,
	}

	constructor() {
		super();
		this.input = {
			"Value_x": new SincInput_Value_x(),
		}
		this.output = {
			"Result_y": new SincOutput_Result_y(),
		}
	}

}

class SincInput_Value_x extends ResthopperParameter {

	public name: string = "Value";
	public nickName: string = "x";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SincOutput_Result_y extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "y";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
