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
		"path_p": PathCompareInput_path_p,
		"mask_m": PathCompareInput_mask_m,
	}

	public output:
	{
		"comparison_c": PathCompareOutput_comparison_c,
	}

	constructor() {
		super();
		this.input = {
			"path_p": new PathCompareInput_path_p(),
			"mask_m": new PathCompareInput_mask_m(),
		}
		this.output = {
			"comparison_c": new PathCompareOutput_comparison_c(),
		}
	}

}

class PathCompareInput_path_p extends ResthopperParameter {

	public name: string = "Path";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Path;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PathCompareInput_mask_m extends ResthopperParameter {

	public name: string = "Mask";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PathCompareOutput_comparison_c extends ResthopperParameter {

	public name: string = "Comparison";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
