import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ScaleNU extends ResthopperComponent {

	public guid: string = "290f418a-65ee-406a-a9d0-35699815b512";
	public name: string = "ScaleNU";
	public nickName: string = "ScaleNU";
	public category: string = "Transform";
	public subCategory: string = "Affine";
	public description: string = "Scale an object with non-uniform factors.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"geometry_g": ScaleNUInput_geometry_g,
		"plane_p": ScaleNUInput_plane_p,
		"scalex_x": ScaleNUInput_scalex_x,
		"scaley_y": ScaleNUInput_scaley_y,
		"scalez_z": ScaleNUInput_scalez_z,
	}

	public output:
	{
		"geometry_g": ScaleNUOutput_geometry_g,
		"transform_x": ScaleNUOutput_transform_x,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new ScaleNUInput_geometry_g(),
			"plane_p": new ScaleNUInput_plane_p(),
			"scalex_x": new ScaleNUInput_scalex_x(),
			"scaley_y": new ScaleNUInput_scaley_y(),
			"scalez_z": new ScaleNUInput_scalez_z(),
		}
		this.output = {
			"geometry_g": new ScaleNUOutput_geometry_g(),
			"transform_x": new ScaleNUOutput_transform_x(),
		}
	}

}

class ScaleNUInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = true;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ScaleNUInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ScaleNUInput_scalex_x extends ResthopperParameter {

	public name: string = "ScaleX";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ScaleNUInput_scaley_y extends ResthopperParameter {

	public name: string = "ScaleY";
	public nickName: string = "Y";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ScaleNUInput_scalez_z extends ResthopperParameter {

	public name: string = "ScaleZ";
	public nickName: string = "Z";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ScaleNUOutput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ScaleNUOutput_transform_x extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Transform"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
