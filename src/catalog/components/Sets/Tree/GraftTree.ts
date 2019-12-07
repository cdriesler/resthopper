import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class GraftTree extends ResthopperComponent {

	public guid: string = "87e1d9ef-088b-4d30-9dda-8a7448a17329";
	public name: string = "GraftTree";
	public nickName: string = "Graft";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Graft a data tree by adding an extra branch for every item.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Grasshopper";

	public input:
	{
		"tree_t": GraftTreeInput_tree_t,
	}

	public output:
	{
		"tree_t": GraftTreeOutput_tree_t,
	}

	constructor() {
		super();
		this.input = {
			"tree_t": new GraftTreeInput_tree_t(),
		}
		this.output = {
			"tree_t": new GraftTreeOutput_tree_t(),
		}
	}

}

class GraftTreeInput_tree_t extends ResthopperParameter {

	public name: string = "Tree";
	public nickName: string = "T";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GraftTreeOutput_tree_t extends ResthopperParameter {

	public name: string = "Tree";
	public nickName: string = "T";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
