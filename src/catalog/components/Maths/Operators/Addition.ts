import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Addition extends ResthopperComponent {

	public guid: string = "a0d62394-a118-422d-abb3-6af115c75b25";
	public name: string = "Addition";
	public nickName: string = "AB";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Mathematical addition";
	public isObsolete: boolean = false;
	public isVariable: boolean = true;

	public library: string = "Math Components";

	public input:
	{
		"a_a": AdditionInput_a_a,
		"b_b": AdditionInput_b_b,
	}

	public output:
	{
		"result_r": AdditionOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"a_a": new AdditionInput_a_a(),
			"b_b": new AdditionInput_b_b(),
		}
		this.output = {
			"result_r": new AdditionOutput_result_r(),
		}
	}

}

class AdditionInput_a_a extends ResthopperParameter {

	public name: string = "A";
	public nickName: string = "A";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AdditionInput_b_b extends ResthopperParameter {

	public name: string = "B";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AdditionOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
