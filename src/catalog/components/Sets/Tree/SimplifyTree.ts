import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SimplifyTree extends ResthopperComponent {

	public guid: string = "1303da7b-e339-4e65-a051-82c4dce8224d";
	public name: string = "SimplifyTree";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Simplify a data tree by removing the overlap shared amongst all branches.";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

	public input:
	{
		"Tree_T": SimplifyTreeInput_Tree_T,
		"Front_F": SimplifyTreeInput_Front_F,
	}

	public output:
	{
		"Tree_T": SimplifyTreeOutput_Tree_T,
	}

	constructor() {
		super();
		this.input = {
			"Tree_T": new SimplifyTreeInput_Tree_T(),
			"Front_F": new SimplifyTreeInput_Front_F(),
		}
		this.output = {
			"Tree_T": new SimplifyTreeOutput_Tree_T(),
		}
	}

}

class SimplifyTreeInput_Tree_T extends ResthopperParameter {

	public name: string = "Tree";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SimplifyTreeInput_Front_F extends ResthopperParameter {

	public name: string = "Front";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SimplifyTreeOutput_Tree_T extends ResthopperParameter {

	public name: string = "Tree";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
