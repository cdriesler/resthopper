import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Division extends ResthopperComponent {

	public guid: string = "9c85271f-89fa-4e9f-9f4a-d75802120ccc";
	public name: string = "Division";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Mathematical division";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"A_A": DivisionInput_A_A,
		"B_B": DivisionInput_B_B,
	}

	public output:
	{
		"Result_R": DivisionOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"A_A": new DivisionInput_A_A(),
			"B_B": new DivisionInput_B_B(),
		}
		this.output = {
			"Result_R": new DivisionOutput_Result_R(),
		}
	}

}

class DivisionInput_A_A extends ResthopperParameter {

	public name: string = "A";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivisionInput_B_B extends ResthopperParameter {

	public name: string = "B";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivisionOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
