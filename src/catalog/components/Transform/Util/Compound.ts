import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Compound extends ResthopperComponent {

	public guid: string = "ca80054a-cde0-4f69-a132-10502b24866d";
	public name: string = "Compound";
	public category: string = "Transform";
	public subCategory: string = "Util";
	public description: string = "Compound two transformations.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Transforms_T": CompoundInput_Transforms_T,
	}

	public output:
	{
		"Compound_X": CompoundOutput_Compound_X,
	}

	constructor() {
		super();
		this.input = {
			"Transforms_T": new CompoundInput_Transforms_T(),
		}
		this.output = {
			"Compound_X": new CompoundOutput_Compound_X(),
		}
	}

}

class CompoundInput_Transforms_T extends ResthopperParameter {

	public name: string = "Transforms";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Transform;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CompoundOutput_Compound_X extends ResthopperParameter {

	public name: string = "Compound";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Transform;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
