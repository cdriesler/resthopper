import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Division extends ResthopperComponent {

	public guid: string = "9c85271f-89fa-4e9f-9f4a-d75802120ccc";
	public name: string = "Division";
	public nickName: string = "AB";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Mathematical division";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"a_a": DivisionInput_a_a,
		"b_b": DivisionInput_b_b,
	}

	public output:
	{
		"result_r": DivisionOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"a_a": new DivisionInput_a_a(),
			"b_b": new DivisionInput_b_b(),
		}
		this.output = {
			"result_r": new DivisionOutput_result_r(),
		}
	}

}

class DivisionInput_a_a extends ResthopperParameter {

	public name: string = "A";
	public nickName: string = "A";
	public description: string = "Item to divide (dividend)"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivisionInput_b_b extends ResthopperParameter {

	public name: string = "B";
	public nickName: string = "B";
	public description: string = "Item to divide with (divisor)"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivisionOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public description: string = "The result of the Division"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
