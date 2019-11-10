import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Split extends ResthopperComponent {

	public guid: string = "915f8f93-f5d1-4a7b-aecb-c327bab88ffb";
	public name: string = "Split";
	public category: string = "Transform";
	public subCategory: string = "Util";
	public description: string = "Split a compound transformation into fragments.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Transform_T": SplitInput_Transform_T,
	}

	public output:
	{
		"Fragments_F": SplitOutput_Fragments_F,
	}

	constructor() {
		super();
		this.input = {
			"Transform_T": new SplitInput_Transform_T(),
		}
		this.output = {
			"Fragments_F": new SplitOutput_Fragments_F(),
		}
	}

}

class SplitInput_Transform_T extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Transform;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitOutput_Fragments_F extends ResthopperParameter {

	public name: string = "Fragments";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Transform;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
