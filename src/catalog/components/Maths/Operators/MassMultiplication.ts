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
		"Input_I": MassMultiplicationInput_Input_I,
	}

	public output:
	{
		"Result_R": MassMultiplicationOutput_Result_R,
		"PartialResults_Pr": MassMultiplicationOutput_PartialResults_Pr,
	}

	constructor() {
		super();
		this.input = {
			"Input_I": new MassMultiplicationInput_Input_I(),
		}
		this.output = {
			"Result_R": new MassMultiplicationOutput_Result_R(),
			"PartialResults_Pr": new MassMultiplicationOutput_PartialResults_Pr(),
		}
	}

}

class MassMultiplicationInput_Input_I extends ResthopperParameter {

	public name: string = "Input";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MassMultiplicationOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MassMultiplicationOutput_PartialResults_Pr extends ResthopperParameter {

	public name: string = "PartialResults";
	public nickName: string = "Pr";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
