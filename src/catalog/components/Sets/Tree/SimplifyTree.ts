import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SimplifyTree extends ResthopperComponent {

	public guid: string = "1303da7b-e339-4e65-a051-82c4dce8224d";
	public name: string = "SimplifyTree";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Simplify a data tree by removing the overlap shared amongst all branches.";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

	public input:
	{
		"tree_t": SimplifyTreeInput_tree_t,
		"front_f": SimplifyTreeInput_front_f,
	}

	public output:
	{
		"tree_t": SimplifyTreeOutput_tree_t,
	}

	constructor() {
		super();
		this.input = {
			"tree_t": new SimplifyTreeInput_tree_t(),
			"front_f": new SimplifyTreeInput_front_f(),
		}
		this.output = {
			"tree_t": new SimplifyTreeOutput_tree_t(),
		}
	}

}

class SimplifyTreeInput_tree_t extends ResthopperParameter {

	public name: string = "Tree";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SimplifyTreeInput_front_f extends ResthopperParameter {

	public name: string = "Front";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SimplifyTreeOutput_tree_t extends ResthopperParameter {

	public name: string = "Tree";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
