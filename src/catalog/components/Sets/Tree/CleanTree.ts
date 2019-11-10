import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CleanTree extends ResthopperComponent {

	public guid: string = "7991bc5f-8a01-4768-bfb0-a39357ac6b84";
	public name: string = "CleanTree";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Removed all null and invalid items from a data tree.";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

	public input:
	{
		"Tree_T": CleanTreeInput_Tree_T,
		"CleanInvalid_X": CleanTreeInput_CleanInvalid_X,
		"CleanEmpty_E": CleanTreeInput_CleanEmpty_E,
	}

	public output:
	{
		"Tree_T": CleanTreeOutput_Tree_T,
	}

	constructor() {
		super();
		this.input = {
			"Tree_T": new CleanTreeInput_Tree_T(),
			"CleanInvalid_X": new CleanTreeInput_CleanInvalid_X(),
			"CleanEmpty_E": new CleanTreeInput_CleanEmpty_E(),
		}
		this.output = {
			"Tree_T": new CleanTreeOutput_Tree_T(),
		}
	}

}

class CleanTreeInput_Tree_T extends ResthopperParameter {

	public name: string = "Tree";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CleanTreeInput_CleanInvalid_X extends ResthopperParameter {

	public name: string = "CleanInvalid";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CleanTreeInput_CleanEmpty_E extends ResthopperParameter {

	public name: string = "CleanEmpty";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CleanTreeOutput_Tree_T extends ResthopperParameter {

	public name: string = "Tree";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
