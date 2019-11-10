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
		"number_v": LogNInput_number_v,
		"base_b": LogNInput_base_b,
	}

	public output:
	{
		"result_r": LogNOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"number_v": new LogNInput_number_v(),
			"base_b": new LogNInput_base_b(),
		}
		this.output = {
			"result_r": new LogNOutput_result_r(),
		}
	}

}

class LogNInput_number_v extends ResthopperParameter {

	public name: string = "Number";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LogNInput_base_b extends ResthopperParameter {

	public name: string = "Base";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LogNOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
