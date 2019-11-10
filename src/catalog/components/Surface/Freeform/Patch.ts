import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Patch extends ResthopperComponent {

	public guid: string = "57b2184c-8931-4e70-9220-612ec5b3809a";
	public name: string = "Patch";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create a patch surface";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Curves_C": PatchInput_Curves_C,
		"Points_P": PatchInput_Points_P,
		"Spans_S": PatchInput_Spans_S,
		"Flexibility_F": PatchInput_Flexibility_F,
		"Trim_T": PatchInput_Trim_T,
	}

	public output:
	{
		"Patch_P": PatchOutput_Patch_P,
	}

	constructor() {
		super();
		this.input = {
			"Curves_C": new PatchInput_Curves_C(),
			"Points_P": new PatchInput_Points_P(),
			"Spans_S": new PatchInput_Spans_S(),
			"Flexibility_F": new PatchInput_Flexibility_F(),
			"Trim_T": new PatchInput_Trim_T(),
		}
		this.output = {
			"Patch_P": new PatchOutput_Patch_P(),
		}
	}

}

class PatchInput_Curves_C extends ResthopperParameter {

	public name: string = "Curves";
	public nickName: string = "C";
	public isOptional: boolean = true;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PatchInput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = true;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PatchInput_Spans_S extends ResthopperParameter {

	public name: string = "Spans";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PatchInput_Flexibility_F extends ResthopperParameter {

	public name: string = "Flexibility";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PatchInput_Trim_T extends ResthopperParameter {

	public name: string = "Trim";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PatchOutput_Patch_P extends ResthopperParameter {

	public name: string = "Patch";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
