import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Occlusion extends ResthopperComponent {

	public guid: string = "1583bd7e-4ab7-4439-b922-d6f8cd63c399";
	public name: string = "Occlusion";
	public nickName: string = "Occ";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Solve occlusion for a collection of view rays and obstructions.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"samples_s": OcclusionInput_samples_s,
		"obstructions_o": OcclusionInput_obstructions_o,
		"rays_r": OcclusionInput_rays_r,
	}

	public output:
	{
		"hits_h": OcclusionOutput_hits_h,
		"occlusion_o": OcclusionOutput_occlusion_o,
	}

	constructor() {
		super();
		this.input = {
			"samples_s": new OcclusionInput_samples_s(),
			"obstructions_o": new OcclusionInput_obstructions_o(),
			"rays_r": new OcclusionInput_rays_r(),
		}
		this.output = {
			"hits_h": new OcclusionOutput_hits_h(),
			"occlusion_o": new OcclusionOutput_occlusion_o(),
		}
	}

}

class OcclusionInput_samples_s extends ResthopperParameter {

	public name: string = "Samples";
	public nickName: string = "S";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OcclusionInput_obstructions_o extends ResthopperParameter {

	public name: string = "Obstructions";
	public nickName: string = "O";
	public description: string = "Empty Mesh parameter"
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OcclusionInput_rays_r extends ResthopperParameter {

	public name: string = "Rays";
	public nickName: string = "R";
	public description: string = "Empty Vector parameter"
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OcclusionOutput_hits_h extends ResthopperParameter {

	public name: string = "Hits";
	public nickName: string = "H";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OcclusionOutput_occlusion_o extends ResthopperParameter {

	public name: string = "Occlusion";
	public nickName: string = "O";
	public description: string = "Empty Boolean parameter"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
