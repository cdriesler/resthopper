import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Split extends ResthopperComponent {

	public guid: string = "915f8f93-f5d1-4a7b-aecb-c327bab88ffb";
	public name: string = "Split";
	public nickName: string = "Split";
	public category: string = "Transform";
	public subCategory: string = "Util";
	public description: string = "Split a compound transformation into fragments.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"transform_t": SplitInput_transform_t,
	}

	public output:
	{
		"fragments_f": SplitOutput_fragments_f,
	}

	constructor() {
		super();
		this.input = {
			"transform_t": new SplitInput_transform_t(),
		}
		this.output = {
			"fragments_f": new SplitOutput_fragments_f(),
		}
	}

}

class SplitInput_transform_t extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Transform"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitOutput_fragments_f extends ResthopperParameter {

	public name: string = "Fragments";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Transform"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
