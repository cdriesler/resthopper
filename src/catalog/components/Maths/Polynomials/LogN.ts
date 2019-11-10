import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class LogN extends ResthopperComponent {

	public guid: string = "7ab8d289-26a2-4dd4-b4ad-df5b477999d8";
	public name: string = "LogN";
	public category: string = "Maths";
	public subCategory: string = "Polynomials";
	public description: string = "Return the N-base logarithm of a number.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Number_V": LogNInput_Number_V,
		"Base_B": LogNInput_Base_B,
	}

	public output:
	{
		"Result_R": LogNOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"Number_V": new LogNInput_Number_V(),
			"Base_B": new LogNInput_Base_B(),
		}
		this.output = {
			"Result_R": new LogNOutput_Result_R(),
		}
	}

}

class LogNInput_Number_V extends ResthopperParameter {

	public name: string = "Number";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LogNInput_Base_B extends ResthopperParameter {

	public name: string = "Base";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LogNOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
