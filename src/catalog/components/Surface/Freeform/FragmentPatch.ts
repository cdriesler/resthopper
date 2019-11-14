import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class FragmentPatch extends ResthopperComponent {

	public guid: string = "cb56b26c-2595-4d03-bdb2-eb2e6aeba82d";
	public name: string = "FragmentPatch";
	public nickName: string = "FPatch";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create a fragmented patch from a polyline boundary";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"boundary_b": FragmentPatchInput_boundary_b,
	}

	public output:
	{
		"patch_p": FragmentPatchOutput_patch_p,
	}

	constructor() {
		super();
		this.input = {
			"boundary_b": new FragmentPatchInput_boundary_b(),
		}
		this.output = {
			"patch_p": new FragmentPatchOutput_patch_p(),
		}
	}

}

class FragmentPatchInput_boundary_b extends ResthopperParameter {

	public name: string = "Boundary";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FragmentPatchOutput_patch_p extends ResthopperParameter {

	public name: string = "Patch";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
