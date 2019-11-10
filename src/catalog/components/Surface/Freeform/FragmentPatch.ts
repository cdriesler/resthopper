import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class FragmentPatch extends ResthopperComponent {

	public guid: string = "cb56b26c-2595-4d03-bdb2-eb2e6aeba82d";
	public name: string = "FragmentPatch";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create a fragmented patch from a polyline boundary";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Boundary_B": FragmentPatchInput_Boundary_B,
	}

	public output:
	{
		"Patch_P": FragmentPatchOutput_Patch_P,
	}

	constructor() {
		super();
		this.input = {
			"Boundary_B": new FragmentPatchInput_Boundary_B(),
		}
		this.output = {
			"Patch_P": new FragmentPatchOutput_Patch_P(),
		}
	}

}

class FragmentPatchInput_Boundary_B extends ResthopperParameter {

	public name: string = "Boundary";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FragmentPatchOutput_Patch_P extends ResthopperParameter {

	public name: string = "Patch";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
