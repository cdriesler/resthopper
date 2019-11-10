import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TreeBranch extends ResthopperComponent {

	public guid: string = "3a710c1e-1809-4e19-8c15-82adce31cd62";
	public name: string = "TreeBranch";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Retrieve a specific branch from a data tree.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Tree_T": TreeBranchInput_Tree_T,
		"Path_P": TreeBranchInput_Path_P,
	}

	public output:
	{
		"Branch_B": TreeBranchOutput_Branch_B,
	}

	constructor() {
		super();
		this.input = {
			"Tree_T": new TreeBranchInput_Tree_T(),
			"Path_P": new TreeBranchInput_Path_P(),
		}
		this.output = {
			"Branch_B": new TreeBranchOutput_Branch_B(),
		}
	}

}

class TreeBranchInput_Tree_T extends ResthopperParameter {

	public name: string = "Tree";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TreeBranchInput_Path_P extends ResthopperParameter {

	public name: string = "Path";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Path;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TreeBranchOutput_Branch_B extends ResthopperParameter {

	public name: string = "Branch";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
