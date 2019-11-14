import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TrimTree extends ResthopperComponent {

	public guid: string = "1177d6ee-3993-4226-9558-52b7fd63e1e3";
	public name: string = "TrimTree";
	public nickName: string = "Trim";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Reduce the complexity of a tree by merging the outermost branches.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Grasshopper";

	public input:
	{
		"tree_t": TrimTreeInput_tree_t,
		"depth_d": TrimTreeInput_depth_d,
	}

	public output:
	{
		"tree_t": TrimTreeOutput_tree_t,
	}

	constructor() {
		super();
		this.input = {
			"tree_t": new TrimTreeInput_tree_t(),
			"depth_d": new TrimTreeInput_depth_d(),
		}
		this.output = {
			"tree_t": new TrimTreeOutput_tree_t(),
		}
	}

}

class TrimTreeInput_tree_t extends ResthopperParameter {

	public name: string = "Tree";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TrimTreeInput_depth_d extends ResthopperParameter {

	public name: string = "Depth";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TrimTreeOutput_tree_t extends ResthopperParameter {

	public name: string = "Tree";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
