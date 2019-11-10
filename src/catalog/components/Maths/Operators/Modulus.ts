import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Modulus extends ResthopperComponent {

	public guid: string = "431bc610-8ae1-4090-b217-1a9d9c519fe2";
	public name: string = "Modulus";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Divides two numbers and returns only the remainder.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"A_A": ModulusInput_A_A,
		"B_B": ModulusInput_B_B,
	}

	public output:
	{
		"Result_R": ModulusOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"A_A": new ModulusInput_A_A(),
			"B_B": new ModulusInput_B_B(),
		}
		this.output = {
			"Result_R": new ModulusOutput_Result_R(),
		}
	}

}

class ModulusInput_A_A extends ResthopperParameter {

	public name: string = "A";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ModulusInput_B_B extends ResthopperParameter {

	public name: string = "B";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ModulusOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
