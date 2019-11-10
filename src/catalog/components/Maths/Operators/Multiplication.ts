import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Multiplication extends ResthopperComponent {

	public guid: string = "ce46b74e-00c9-43c4-805a-193b69ea4a11";
	public name: string = "Multiplication";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Mathematical multiplication";
	public isObsolete: boolean = false;
	public isVariable: boolean = true;

	public library: string = "Math Components";

	public input:
	{
		"a_a": MultiplicationInput_a_a,
		"b_b": MultiplicationInput_b_b,
	}

	public output:
	{
		"result_r": MultiplicationOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"a_a": new MultiplicationInput_a_a(),
			"b_b": new MultiplicationInput_b_b(),
		}
		this.output = {
			"result_r": new MultiplicationOutput_result_r(),
		}
	}

}

class MultiplicationInput_a_a extends ResthopperParameter {

	public name: string = "A";
	public nickName: string = "A";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MultiplicationInput_b_b extends ResthopperParameter {

	public name: string = "B";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MultiplicationOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
