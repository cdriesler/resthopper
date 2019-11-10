import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MassMultiplication extends ResthopperComponent {

	public guid: string = "e44c1bd7-72cc-4697-80c9-02787baf7bb4";
	public name: string = "MassMultiplication";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Perform mass multiplication of a list of items";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"input_i": MassMultiplicationInput_input_i,
	}

	public output:
	{
		"result_r": MassMultiplicationOutput_result_r,
		"partialresults_pr": MassMultiplicationOutput_partialresults_pr,
	}

	constructor() {
		super();
		this.input = {
			"input_i": new MassMultiplicationInput_input_i(),
		}
		this.output = {
			"result_r": new MassMultiplicationOutput_result_r(),
			"partialresults_pr": new MassMultiplicationOutput_partialresults_pr(),
		}
	}

}

class MassMultiplicationInput_input_i extends ResthopperParameter {

	public name: string = "Input";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MassMultiplicationOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MassMultiplicationOutput_partialresults_pr extends ResthopperParameter {

	public name: string = "PartialResults";
	public nickName: string = "Pr";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
