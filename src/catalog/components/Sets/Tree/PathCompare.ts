import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PathCompare extends ResthopperComponent {

	public guid: string = "1d8b0e2c-e772-4fa9-b7f7-b158251b34b8";
	public name: string = "PathCompare";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Compare a path to a mask pattern";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

	public input:
	{
		"Path_P": PathCompareInput_Path_P,
		"Mask_M": PathCompareInput_Mask_M,
	}

	public output:
	{
		"Comparison_C": PathCompareOutput_Comparison_C,
	}

	constructor() {
		super();
		this.input = {
			"Path_P": new PathCompareInput_Path_P(),
			"Mask_M": new PathCompareInput_Mask_M(),
		}
		this.output = {
			"Comparison_C": new PathCompareOutput_Comparison_C(),
		}
	}

}

class PathCompareInput_Path_P extends ResthopperParameter {

	public name: string = "Path";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Path;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PathCompareInput_Mask_M extends ResthopperParameter {

	public name: string = "Mask";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PathCompareOutput_Comparison_C extends ResthopperParameter {

	public name: string = "Comparison";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
