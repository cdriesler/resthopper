import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class IntegerDivision extends ResthopperComponent {

	public guid: string = "54db2568-3441-4ae2-bcef-92c4cc608e11";
	public name: string = "IntegerDivision";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Mathematical integer division";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"A_A": IntegerDivisionInput_A_A,
		"B_B": IntegerDivisionInput_B_B,
	}

	public output:
	{
		"Result_R": IntegerDivisionOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"A_A": new IntegerDivisionInput_A_A(),
			"B_B": new IntegerDivisionInput_B_B(),
		}
		this.output = {
			"Result_R": new IntegerDivisionOutput_Result_R(),
		}
	}

}

class IntegerDivisionInput_A_A extends ResthopperParameter {

	public name: string = "A";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IntegerDivisionInput_B_B extends ResthopperParameter {

	public name: string = "B";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IntegerDivisionOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
