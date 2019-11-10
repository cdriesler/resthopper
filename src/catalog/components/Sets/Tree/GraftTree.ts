import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class GraftTree extends ResthopperComponent {

	public guid: string = "87e1d9ef-088b-4d30-9dda-8a7448a17329";
	public name: string = "GraftTree";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Graft a data tree by adding an extra branch for every item.";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

	public input:
	{
		"Tree_T": GraftTreeInput_Tree_T,
	}

	public output:
	{
		"Tree_T": GraftTreeOutput_Tree_T,
	}

	constructor() {
		super();
		this.input = {
			"Tree_T": new GraftTreeInput_Tree_T(),
		}
		this.output = {
			"Tree_T": new GraftTreeOutput_Tree_T(),
		}
	}

}

class GraftTreeInput_Tree_T extends ResthopperParameter {

	public name: string = "Tree";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GraftTreeOutput_Tree_T extends ResthopperParameter {

	public name: string = "Tree";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
