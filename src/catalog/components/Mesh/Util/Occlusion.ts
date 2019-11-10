import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Occlusion extends ResthopperComponent {

	public guid: string = "1583bd7e-4ab7-4439-b922-d6f8cd63c399";
	public name: string = "Occlusion";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Solve occlusion for a collection of view rays and obstructions.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Samples_S": OcclusionInput_Samples_S,
		"Obstructions_O": OcclusionInput_Obstructions_O,
		"Rays_R": OcclusionInput_Rays_R,
	}

	public output:
	{
		"Hits_H": OcclusionOutput_Hits_H,
		"Occlusion_O": OcclusionOutput_Occlusion_O,
	}

	constructor() {
		super();
		this.input = {
			"Samples_S": new OcclusionInput_Samples_S(),
			"Obstructions_O": new OcclusionInput_Obstructions_O(),
			"Rays_R": new OcclusionInput_Rays_R(),
		}
		this.output = {
			"Hits_H": new OcclusionOutput_Hits_H(),
			"Occlusion_O": new OcclusionOutput_Occlusion_O(),
		}
	}

}

class OcclusionInput_Samples_S extends ResthopperParameter {

	public name: string = "Samples";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OcclusionInput_Obstructions_O extends ResthopperParameter {

	public name: string = "Obstructions";
	public nickName: string = "O";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OcclusionInput_Rays_R extends ResthopperParameter {

	public name: string = "Rays";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OcclusionOutput_Hits_H extends ResthopperParameter {

	public name: string = "Hits";
	public nickName: string = "H";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OcclusionOutput_Occlusion_O extends ResthopperParameter {

	public name: string = "Occlusion";
	public nickName: string = "O";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
