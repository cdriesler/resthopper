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
		"tree_t": FlattenTreeInput_tree_t,
		"path_p": FlattenTreeInput_path_p,
	}

	public output:
	{
		"tree_t": FlattenTreeOutput_tree_t,
	}

	constructor() {
		super();
		this.input = {
			"tree_t": new FlattenTreeInput_tree_t(),
			"path_p": new FlattenTreeInput_path_p(),
		}
		this.output = {
			"tree_t": new FlattenTreeOutput_tree_t(),
		}
	}

}

class FlattenTreeInput_tree_t extends ResthopperParameter {

	public name: string = "Tree";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlattenTreeInput_path_p extends ResthopperParameter {

	public name: string = "Path";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Path"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlattenTreeOutput_tree_t extends ResthopperParameter {

	public name: string = "Tree";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
