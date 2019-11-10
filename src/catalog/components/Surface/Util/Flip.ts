import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Flip extends ResthopperComponent {

	public guid: string = "c3d1f2b8-8596-4e8d-8861-c28ba8ffb4f4";
	public name: string = "Flip";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Flip the normals of a surface based on local or remote geometry";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"surface_s": FlipInput_surface_s,
		"guide_g": FlipInput_guide_g,
	}

	public output:
	{
		"surface_s": FlipOutput_surface_s,
		"result_r": FlipOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"surface_s": new FlipInput_surface_s(),
			"guide_g": new FlipInput_guide_g(),
		}
		this.output = {
			"surface_s": new FlipOutput_surface_s(),
			"result_r": new FlipOutput_result_r(),
		}
	}

}

class FlipInput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlipInput_guide_g extends ResthopperParameter {

	public name: string = "Guide";
	public nickName: string = "G";
	public isOptional: boolean = true;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlipOutput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlipOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
