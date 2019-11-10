import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class UnflattenTree extends ResthopperComponent {

	public guid: string = "b8e2aa8f-8830-4ee1-bb59-613ea279c281";
	public name: string = "UnflattenTree";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Unflatten a data tree by moving items back into branches.";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

	public input:
	{
		"tree_t": UnflattenTreeInput_tree_t,
		"guide_g": UnflattenTreeInput_guide_g,
	}

	public output:
	{
		"tree_t": UnflattenTreeOutput_tree_t,
	}

	constructor() {
		super();
		this.input = {
			"tree_t": new UnflattenTreeInput_tree_t(),
			"guide_g": new UnflattenTreeInput_guide_g(),
		}
		this.output = {
			"tree_t": new UnflattenTreeOutput_tree_t(),
		}
	}

}

class UnflattenTreeInput_tree_t extends ResthopperParameter {

	public name: string = "Tree";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class UnflattenTreeInput_guide_g extends ResthopperParameter {

	public name: string = "Guide";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class UnflattenTreeOutput_tree_t extends ResthopperParameter {

	public name: string = "Tree";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
