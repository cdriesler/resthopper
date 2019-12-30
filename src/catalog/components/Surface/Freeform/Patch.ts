import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Patch extends ResthopperComponent {

	public guid: string = "57b2184c-8931-4e70-9220-612ec5b3809a";
	public name: string = "Patch";
	public nickName: string = "Patch";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create a patch surface";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"curves_c": PatchInput_curves_c,
		"points_p": PatchInput_points_p,
		"spans_s": PatchInput_spans_s,
		"flexibility_f": PatchInput_flexibility_f,
		"trim_t": PatchInput_trim_t,
	}

	public output:
	{
		"patch_p": PatchOutput_patch_p,
	}

	constructor() {
		super();
		this.input = {
			"curves_c": new PatchInput_curves_c(),
			"points_p": new PatchInput_points_p(),
			"spans_s": new PatchInput_spans_s(),
			"flexibility_f": new PatchInput_flexibility_f(),
			"trim_t": new PatchInput_trim_t(),
		}
		this.output = {
			"patch_p": new PatchOutput_patch_p(),
		}
	}

}

class PatchInput_curves_c extends ResthopperParameter {

	public name: string = "Curves";
	public nickName: string = "C";
	public description: string = "Curves to patch"
	public isOptional: boolean = true;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PatchInput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public description: string = "Points to patch"
	public isOptional: boolean = true;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PatchInput_spans_s extends ResthopperParameter {

	public name: string = "Spans";
	public nickName: string = "S";
	public description: string = "Number of spans"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PatchInput_flexibility_f extends ResthopperParameter {

	public name: string = "Flexibility";
	public nickName: string = "F";
	public description: string = "Patch flexibility (low number; less flexibility)"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PatchInput_trim_t extends ResthopperParameter {

	public name: string = "Trim";
	public nickName: string = "T";
	public description: string = "Attempt to trim the result"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PatchOutput_patch_p extends ResthopperParameter {

	public name: string = "Patch";
	public nickName: string = "P";
	public description: string = "Patch result"
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
