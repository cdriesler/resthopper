import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Mirror extends ResthopperComponent {

	public guid: string = "f12daa2f-4fd5-48c1-8ac3-5dea476912ca";
	public name: string = "Mirror";
	public nickName: string = "Mirror";
	public category: string = "Transform";
	public subCategory: string = "Euclidean";
	public description: string = "Mirror an object.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"geometry_g": MirrorInput_geometry_g,
		"plane_p": MirrorInput_plane_p,
	}

	public output:
	{
		"geometry_g": MirrorOutput_geometry_g,
		"transform_x": MirrorOutput_transform_x,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new MirrorInput_geometry_g(),
			"plane_p": new MirrorInput_plane_p(),
		}
		this.output = {
			"geometry_g": new MirrorOutput_geometry_g(),
			"transform_x": new MirrorOutput_transform_x(),
		}
	}

}

class MirrorInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public description: string = "Base geometry"
	public isOptional: boolean = true;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MirrorInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public description: string = "Mirror plane"
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MirrorOutput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public description: string = "Mirrored geometry"
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MirrorOutput_transform_x extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public description: string = "Transformation data"
	public isOptional: boolean = false;
	public typeName: string = "Transform"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
