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
		"Input_I": MassAdditionInput_Input_I,
	}

	public output:
	{
		"Result_R": MassAdditionOutput_Result_R,
		"PartialResults_Pr": MassAdditionOutput_PartialResults_Pr,
	}

	constructor() {
		super();
		this.input = {
			"Input_I": new MassAdditionInput_Input_I(),
		}
		this.output = {
			"Result_R": new MassAdditionOutput_Result_R(),
			"PartialResults_Pr": new MassAdditionOutput_PartialResults_Pr(),
		}
	}

}

class MassAdditionInput_Input_I extends ResthopperParameter {

	public name: string = "Input";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MassAdditionOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MassAdditionOutput_PartialResults_Pr extends ResthopperParameter {

	public name: string = "PartialResults";
	public nickName: string = "Pr";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
