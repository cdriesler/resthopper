import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Addition extends ResthopperComponent {

	public guid: string = "a0d62394-a118-422d-abb3-6af115c75b25";
	public name: string = "Addition";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Mathematical addition";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"A_A": AdditionInput_A_A,
		"B_B": AdditionInput_B_B,
	}

	public output:
	{
		"Result_R": AdditionOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"A_A": new AdditionInput_A_A(),
			"B_B": new AdditionInput_B_B(),
		}
		this.output = {
			"Result_R": new AdditionOutput_Result_R(),
		}
	}

}

class AdditionInput_A_A extends ResthopperParameter {

	public name: string = "A";
	public nickName: string = "A";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AdditionInput_B_B extends ResthopperParameter {

	public name: string = "B";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AdditionOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
