import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MatchTree extends ResthopperComponent {

	public guid: string = "46372d0d-82dc-4acb-adc3-25d1fde04c4e";
	public name: string = "Match Tree";
	public nickName: string = "Match";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Match one data tree with another.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Grasshopper";

	public input:
	{
		"tree_t": MatchTreeInput_tree_t,
		"guide_g": MatchTreeInput_guide_g,
	}

	public output:
	{
		"tree_t": MatchTreeOutput_tree_t,
	}

	constructor() {
		super();
		this.input = {
			"tree_t": new MatchTreeInput_tree_t(),
			"guide_g": new MatchTreeInput_guide_g(),
		}
		this.output = {
			"tree_t": new MatchTreeOutput_tree_t(),
		}
	}

}

class MatchTreeInput_tree_t extends ResthopperParameter {

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

class MatchTreeInput_guide_g extends ResthopperParameter {

	public name: string = "Guide";
	public nickName: string = "G";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MatchTreeOutput_tree_t extends ResthopperParameter {

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
