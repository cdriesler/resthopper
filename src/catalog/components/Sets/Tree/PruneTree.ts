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
		"tree_t": PruneTreeInput_tree_t,
		"minimum_n0": PruneTreeInput_minimum_n0,
		"maximum_n1": PruneTreeInput_maximum_n1,
	}

	public output:
	{
		"tree_t": PruneTreeOutput_tree_t,
	}

	constructor() {
		super();
		this.input = {
			"tree_t": new PruneTreeInput_tree_t(),
			"minimum_n0": new PruneTreeInput_minimum_n0(),
			"maximum_n1": new PruneTreeInput_maximum_n1(),
		}
		this.output = {
			"tree_t": new PruneTreeOutput_tree_t(),
		}
	}

}

class PruneTreeInput_tree_t extends ResthopperParameter {

	public name: string = "Tree";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PruneTreeInput_minimum_n0 extends ResthopperParameter {

	public name: string = "Minimum";
	public nickName: string = "N0";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PruneTreeInput_maximum_n1 extends ResthopperParameter {

	public name: string = "Maximum";
	public nickName: string = "N1";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PruneTreeOutput_tree_t extends ResthopperParameter {

	public name: string = "Tree";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
