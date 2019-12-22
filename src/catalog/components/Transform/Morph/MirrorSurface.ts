import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MirrorSurface extends ResthopperComponent {

	public guid: string = "6ce1aa3c-626b-4db7-8b5b-bf74c78f8c5e";
	public name: string = "Mirror Surface";
	public nickName: string = "Mirror";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Mirror geometry in a freeform surface.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"geometry_g": MirrorSurfaceInput_geometry_g,
		"surface_s": MirrorSurfaceInput_surface_s,
		"frame_f": MirrorSurfaceInput_frame_f,
	}

	public output:
	{
		"geometry_g": MirrorSurfaceOutput_geometry_g,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new MirrorSurfaceInput_geometry_g(),
			"surface_s": new MirrorSurfaceInput_surface_s(),
			"frame_f": new MirrorSurfaceInput_frame_f(),
		}
		this.output = {
			"geometry_g": new MirrorSurfaceOutput_geometry_g(),
		}
	}

}

class MirrorSurfaceInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public description: string = "Empty Geometry parameter"
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MirrorSurfaceInput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public description: string = "Empty Surface parameter"
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MirrorSurfaceInput_frame_f extends ResthopperParameter {

	public name: string = "Frame";
	public nickName: string = "F";
	public description: string = "Empty Boolean parameter"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MirrorSurfaceOutput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public description: string = "Empty Geometry parameter"
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
