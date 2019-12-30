import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SplitTree extends ResthopperComponent {

	public guid: string = "d8b1e7ac-cd31-4748-b262-e07e53068afc";
	public name: string = "Split Tree";
	public nickName: string = "Split";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Split a data tree into two parts using path masks.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Grasshopper";

	public input:
	{
		"data_d": SplitTreeInput_data_d,
		"masks_m": SplitTreeInput_masks_m,
	}

	public output:
	{
		"positive_p": SplitTreeOutput_positive_p,
		"negative_n": SplitTreeOutput_negative_n,
	}

	constructor() {
		super();
		this.input = {
			"data_d": new SplitTreeInput_data_d(),
			"masks_m": new SplitTreeInput_masks_m(),
		}
		this.output = {
			"positive_p": new SplitTreeOutput_positive_p(),
			"negative_n": new SplitTreeOutput_negative_n(),
		}
	}

}

class SplitTreeInput_data_d extends ResthopperParameter {

	public name: string = "Data";
	public nickName: string = "D";
	public description: string = "Tree to split"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitTreeInput_masks_m extends ResthopperParameter {

	public name: string = "Masks";
	public nickName: string = "M";
	public description: string = "Splitting masks"
	public isOptional: boolean = false;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitTreeOutput_positive_p extends ResthopperParameter {

	public name: string = "Positive";
	public nickName: string = "P";
	public description: string = "Positive set of data (all branches that match any of the masks)"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitTreeOutput_negative_n extends ResthopperParameter {

	public name: string = "Negative";
	public nickName: string = "N";
	public description: string = "Negative set of data (all branches that do not match any of the masks"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
