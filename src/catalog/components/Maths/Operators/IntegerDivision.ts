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
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"a_a": IntegerDivisionInput_a_a,
		"b_b": IntegerDivisionInput_b_b,
	}

	public output:
	{
		"result_r": IntegerDivisionOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"a_a": new IntegerDivisionInput_a_a(),
			"b_b": new IntegerDivisionInput_b_b(),
		}
		this.output = {
			"result_r": new IntegerDivisionOutput_result_r(),
		}
	}

}

class IntegerDivisionInput_a_a extends ResthopperParameter {

	public name: string = "A";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IntegerDivisionInput_b_b extends ResthopperParameter {

	public name: string = "B";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IntegerDivisionOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
