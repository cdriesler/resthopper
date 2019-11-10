import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class FlattenTree extends ResthopperComponent {

	public guid: string = "f80cfe18-9510-4b89-8301-8e58faf423bb";
	public name: string = "FlattenTree";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Flatten a data tree by removing all branching information.";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

	public input:
	{
		"Tree_T": FlattenTreeInput_Tree_T,
		"Path_P": FlattenTreeInput_Path_P,
	}

	public output:
	{
		"Tree_T": FlattenTreeOutput_Tree_T,
	}

	constructor() {
		super();
		this.input = {
			"Tree_T": new FlattenTreeInput_Tree_T(),
			"Path_P": new FlattenTreeInput_Path_P(),
		}
		this.output = {
			"Tree_T": new FlattenTreeOutput_Tree_T(),
		}
	}

}

class FlattenTreeInput_Tree_T extends ResthopperParameter {

	public name: string = "Tree";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlattenTreeInput_Path_P extends ResthopperParameter {

	public name: string = "Path";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Path;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlattenTreeOutput_Tree_T extends ResthopperParameter {

	public name: string = "Tree";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
