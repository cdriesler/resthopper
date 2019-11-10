import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MirrorSurface extends ResthopperComponent {

	public guid: string = "6ce1aa3c-626b-4db7-8b5b-bf74c78f8c5e";
	public name: string = "MirrorSurface";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Mirror geometry in a freeform surface.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Geometry_G": MirrorSurfaceInput_Geometry_G,
		"Surface_S": MirrorSurfaceInput_Surface_S,
		"Frame_F": MirrorSurfaceInput_Frame_F,
	}

	public output:
	{
		"Geometry_G": MirrorSurfaceOutput_Geometry_G,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new MirrorSurfaceInput_Geometry_G(),
			"Surface_S": new MirrorSurfaceInput_Surface_S(),
			"Frame_F": new MirrorSurfaceInput_Frame_F(),
		}
		this.output = {
			"Geometry_G": new MirrorSurfaceOutput_Geometry_G(),
		}
	}

}

class MirrorSurfaceInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MirrorSurfaceInput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MirrorSurfaceInput_Frame_F extends ResthopperParameter {

	public name: string = "Frame";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MirrorSurfaceOutput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
