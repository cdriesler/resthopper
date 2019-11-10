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
		"Tree_T": UnflattenTreeInput_Tree_T,
		"Guide_G": UnflattenTreeInput_Guide_G,
	}

	public output:
	{
		"Tree_T": UnflattenTreeOutput_Tree_T,
	}

	constructor() {
		super();
		this.input = {
			"Tree_T": new UnflattenTreeInput_Tree_T(),
			"Guide_G": new UnflattenTreeInput_Guide_G(),
		}
		this.output = {
			"Tree_T": new UnflattenTreeOutput_Tree_T(),
		}
	}

}

class UnflattenTreeInput_Tree_T extends ResthopperParameter {

	public name: string = "Tree";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class UnflattenTreeInput_Guide_G extends ResthopperParameter {

	public name: string = "Guide";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class UnflattenTreeOutput_Tree_T extends ResthopperParameter {

	public name: string = "Tree";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
