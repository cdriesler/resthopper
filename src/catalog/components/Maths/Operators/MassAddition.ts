import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MassAddition extends ResthopperComponent {

	public guid: string = "5b850221-b527-4bd6-8c62-e94168cd6efa";
	public name: string = "MassAddition";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Perform mass addition of a list of items";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"input_i": MassAdditionInput_input_i,
	}

	public output:
	{
		"result_r": MassAdditionOutput_result_r,
		"partialresults_pr": MassAdditionOutput_partialresults_pr,
	}

	constructor() {
		super();
		this.input = {
			"input_i": new MassAdditionInput_input_i(),
		}
		this.output = {
			"result_r": new MassAdditionOutput_result_r(),
			"partialresults_pr": new MassAdditionOutput_partialresults_pr(),
		}
	}

}

class MassAdditionInput_input_i extends ResthopperParameter {

	public name: string = "Input";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MassAdditionOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MassAdditionOutput_partialresults_pr extends ResthopperParameter {

	public name: string = "PartialResults";
	public nickName: string = "Pr";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
