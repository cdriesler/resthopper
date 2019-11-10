import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TreeItem extends ResthopperComponent {

	public guid: string = "c1ec65a3-bda4-4fad-87d0-edf86ed9d81c";
	public name: string = "TreeItem";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Retrieve a specific item from a data tree.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Tree_T": TreeItemInput_Tree_T,
		"Path_P": TreeItemInput_Path_P,
		"Index_i": TreeItemInput_Index_i,
		"Wrap_W": TreeItemInput_Wrap_W,
	}

	public output:
	{
		"Element_E": TreeItemOutput_Element_E,
	}

	constructor() {
		super();
		this.input = {
			"Tree_T": new TreeItemInput_Tree_T(),
			"Path_P": new TreeItemInput_Path_P(),
			"Index_i": new TreeItemInput_Index_i(),
			"Wrap_W": new TreeItemInput_Wrap_W(),
		}
		this.output = {
			"Element_E": new TreeItemOutput_Element_E(),
		}
	}

}

class TreeItemInput_Tree_T extends ResthopperParameter {

	public name: string = "Tree";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TreeItemInput_Path_P extends ResthopperParameter {

	public name: string = "Path";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Path;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TreeItemInput_Index_i extends ResthopperParameter {

	public name: string = "Index";
	public nickName: string = "i";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TreeItemInput_Wrap_W extends ResthopperParameter {

	public name: string = "Wrap";
	public nickName: string = "W";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TreeItemOutput_Element_E extends ResthopperParameter {

	public name: string = "Element";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
