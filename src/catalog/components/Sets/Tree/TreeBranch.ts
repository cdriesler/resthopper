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
		"tree_t": TreeBranchInput_tree_t,
		"path_p": TreeBranchInput_path_p,
	}

	public output:
	{
		"branch_b": TreeBranchOutput_branch_b,
	}

	constructor() {
		super();
		this.input = {
			"tree_t": new TreeBranchInput_tree_t(),
			"path_p": new TreeBranchInput_path_p(),
		}
		this.output = {
			"branch_b": new TreeBranchOutput_branch_b(),
		}
	}

}

class TreeBranchInput_tree_t extends ResthopperParameter {

	public name: string = "Tree";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TreeBranchInput_path_p extends ResthopperParameter {

	public name: string = "Path";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Path;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TreeBranchOutput_branch_b extends ResthopperParameter {

	public name: string = "Branch";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
