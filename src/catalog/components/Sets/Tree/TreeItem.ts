import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TreeItem extends ResthopperComponent {

	public guid: string = "c1ec65a3-bda4-4fad-87d0-edf86ed9d81c";
	public name: string = "Tree Item";
	public nickName: string = "Item";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Retrieve a specific item from a data tree.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"tree_t": TreeItemInput_tree_t,
		"path_p": TreeItemInput_path_p,
		"index_i": TreeItemInput_index_i,
		"wrap_w": TreeItemInput_wrap_w,
	}

	public output:
	{
		"element_e": TreeItemOutput_element_e,
	}

	constructor() {
		super();
		this.input = {
			"tree_t": new TreeItemInput_tree_t(),
			"path_p": new TreeItemInput_path_p(),
			"index_i": new TreeItemInput_index_i(),
			"wrap_w": new TreeItemInput_wrap_w(),
		}
		this.output = {
			"element_e": new TreeItemOutput_element_e(),
		}
	}

}

class TreeItemInput_tree_t extends ResthopperParameter {

	public name: string = "Tree";
	public nickName: string = "T";
	public description: string = "Data Tree"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TreeItemInput_path_p extends ResthopperParameter {

	public name: string = "Path";
	public nickName: string = "P";
	public description: string = "Data tree branch path"
	public isOptional: boolean = false;
	public typeName: string = "Path"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TreeItemInput_index_i extends ResthopperParameter {

	public name: string = "Index";
	public nickName: string = "i";
	public description: string = "Item index"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TreeItemInput_wrap_w extends ResthopperParameter {

	public name: string = "Wrap";
	public nickName: string = "W";
	public description: string = "Wrap index to list bounds"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TreeItemOutput_element_e extends ResthopperParameter {

	public name: string = "Element";
	public nickName: string = "E";
	public description: string = "Item at {P:i'}"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
