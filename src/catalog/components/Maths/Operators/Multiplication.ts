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

	public library: string = "Math Components";

	public input:
	{
		"A_A": MultiplicationInput_A_A,
		"B_B": MultiplicationInput_B_B,
	}

	public output:
	{
		"Result_R": MultiplicationOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"A_A": new MultiplicationInput_A_A(),
			"B_B": new MultiplicationInput_B_B(),
		}
		this.output = {
			"Result_R": new MultiplicationOutput_Result_R(),
		}
	}

}

class MultiplicationInput_A_A extends ResthopperParameter {

	public name: string = "A";
	public nickName: string = "A";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MultiplicationInput_B_B extends ResthopperParameter {

	public name: string = "B";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MultiplicationOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
