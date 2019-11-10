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
		"tree_t": CleanTreeInput_tree_t,
		"cleaninvalid_x": CleanTreeInput_cleaninvalid_x,
		"cleanempty_e": CleanTreeInput_cleanempty_e,
	}

	public output:
	{
		"tree_t": CleanTreeOutput_tree_t,
	}

	constructor() {
		super();
		this.input = {
			"tree_t": new CleanTreeInput_tree_t(),
			"cleaninvalid_x": new CleanTreeInput_cleaninvalid_x(),
			"cleanempty_e": new CleanTreeInput_cleanempty_e(),
		}
		this.output = {
			"tree_t": new CleanTreeOutput_tree_t(),
		}
	}

}

class CleanTreeInput_tree_t extends ResthopperParameter {

	public name: string = "Tree";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CleanTreeInput_cleaninvalid_x extends ResthopperParameter {

	public name: string = "CleanInvalid";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CleanTreeInput_cleanempty_e extends ResthopperParameter {

	public name: string = "CleanEmpty";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CleanTreeOutput_tree_t extends ResthopperParameter {

	public name: string = "Tree";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
