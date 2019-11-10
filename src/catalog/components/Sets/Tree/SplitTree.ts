import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SplitTree extends ResthopperComponent {

	public guid: string = "d8b1e7ac-cd31-4748-b262-e07e53068afc";
	public name: string = "SplitTree";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Split a data tree into two parts using path masks.";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

	public input:
	{
		"Data_D": SplitTreeInput_Data_D,
		"Masks_M": SplitTreeInput_Masks_M,
	}

	public output:
	{
		"Positive_P": SplitTreeOutput_Positive_P,
		"Negative_N": SplitTreeOutput_Negative_N,
	}

	constructor() {
		super();
		this.input = {
			"Data_D": new SplitTreeInput_Data_D(),
			"Masks_M": new SplitTreeInput_Masks_M(),
		}
		this.output = {
			"Positive_P": new SplitTreeOutput_Positive_P(),
			"Negative_N": new SplitTreeOutput_Negative_N(),
		}
	}

}

class SplitTreeInput_Data_D extends ResthopperParameter {

	public name: string = "Data";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitTreeInput_Masks_M extends ResthopperParameter {

	public name: string = "Masks";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitTreeOutput_Positive_P extends ResthopperParameter {

	public name: string = "Positive";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitTreeOutput_Negative_N extends ResthopperParameter {

	public name: string = "Negative";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
