import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TrimTree extends ResthopperComponent {

	public guid: string = "1177d6ee-3993-4226-9558-52b7fd63e1e3";
	public name: string = "TrimTree";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Reduce the complexity of a tree by merging the outermost branches.";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

	public input:
	{
		"Tree_T": TrimTreeInput_Tree_T,
		"Depth_D": TrimTreeInput_Depth_D,
	}

	public output:
	{
		"Tree_T": TrimTreeOutput_Tree_T,
	}

	constructor() {
		super();
		this.input = {
			"Tree_T": new TrimTreeInput_Tree_T(),
			"Depth_D": new TrimTreeInput_Depth_D(),
		}
		this.output = {
			"Tree_T": new TrimTreeOutput_Tree_T(),
		}
	}

}

class TrimTreeInput_Tree_T extends ResthopperParameter {

	public name: string = "Tree";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TrimTreeInput_Depth_D extends ResthopperParameter {

	public name: string = "Depth";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TrimTreeOutput_Tree_T extends ResthopperParameter {

	public name: string = "Tree";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
