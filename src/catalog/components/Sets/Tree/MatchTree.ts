import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MatchTree extends ResthopperComponent {

	public guid: string = "46372d0d-82dc-4acb-adc3-25d1fde04c4e";
	public name: string = "MatchTree";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Match one data tree with another.";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

	public input:
	{
		"Tree_T": MatchTreeInput_Tree_T,
		"Guide_G": MatchTreeInput_Guide_G,
	}

	public output:
	{
		"Tree_T": MatchTreeOutput_Tree_T,
	}

	constructor() {
		super();
		this.input = {
			"Tree_T": new MatchTreeInput_Tree_T(),
			"Guide_G": new MatchTreeInput_Guide_G(),
		}
		this.output = {
			"Tree_T": new MatchTreeOutput_Tree_T(),
		}
	}

}

class MatchTreeInput_Tree_T extends ResthopperParameter {

	public name: string = "Tree";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MatchTreeInput_Guide_G extends ResthopperParameter {

	public name: string = "Guide";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MatchTreeOutput_Tree_T extends ResthopperParameter {

	public name: string = "Tree";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
