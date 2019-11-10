import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PruneTree extends ResthopperComponent {

	public guid: string = "fe769f85-8900-45dd-ba11-ec9cd6c778c6";
	public name: string = "PruneTree";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Remove small branches from a Data Tree.";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

	public input:
	{
		"Tree_T": PruneTreeInput_Tree_T,
		"Minimum_N0": PruneTreeInput_Minimum_N0,
		"Maximum_N1": PruneTreeInput_Maximum_N1,
	}

	public output:
	{
		"Tree_T": PruneTreeOutput_Tree_T,
	}

	constructor() {
		super();
		this.input = {
			"Tree_T": new PruneTreeInput_Tree_T(),
			"Minimum_N0": new PruneTreeInput_Minimum_N0(),
			"Maximum_N1": new PruneTreeInput_Maximum_N1(),
		}
		this.output = {
			"Tree_T": new PruneTreeOutput_Tree_T(),
		}
	}

}

class PruneTreeInput_Tree_T extends ResthopperParameter {

	public name: string = "Tree";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PruneTreeInput_Minimum_N0 extends ResthopperParameter {

	public name: string = "Minimum";
	public nickName: string = "N0";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PruneTreeInput_Maximum_N1 extends ResthopperParameter {

	public name: string = "Maximum";
	public nickName: string = "N1";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PruneTreeOutput_Tree_T extends ResthopperParameter {

	public name: string = "Tree";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
