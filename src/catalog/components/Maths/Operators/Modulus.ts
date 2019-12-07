import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Modulus extends ResthopperComponent {

	public guid: string = "431bc610-8ae1-4090-b217-1a9d9c519fe2";
	public name: string = "Modulus";
	public nickName: string = "Mod";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Divides two numbers and returns only the remainder.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"a_a": ModulusInput_a_a,
		"b_b": ModulusInput_b_b,
	}

	public output:
	{
		"result_r": ModulusOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"a_a": new ModulusInput_a_a(),
			"b_b": new ModulusInput_b_b(),
		}
		this.output = {
			"result_r": new ModulusOutput_result_r(),
		}
	}

}

class ModulusInput_a_a extends ResthopperParameter {

	public name: string = "A";
	public nickName: string = "A";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ModulusInput_b_b extends ResthopperParameter {

	public name: string = "B";
	public nickName: string = "B";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ModulusOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
