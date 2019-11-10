import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CameraObscura extends ResthopperComponent {

	public guid: string = "407e35c6-7c40-4652-bd80-fde1eb7ec034";
	public name: string = "CameraObscura";
	public category: string = "Transform";
	public subCategory: string = "Affine";
	public description: string = "Camera Obscura (point mirror) transformation.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"geometry_g": CameraObscuraInput_geometry_g,
		"point_p": CameraObscuraInput_point_p,
		"factor_f": CameraObscuraInput_factor_f,
	}

	public output:
	{
		"geometry_g": CameraObscuraOutput_geometry_g,
		"transform_x": CameraObscuraOutput_transform_x,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new CameraObscuraInput_geometry_g(),
			"point_p": new CameraObscuraInput_point_p(),
			"factor_f": new CameraObscuraInput_factor_f(),
		}
		this.output = {
			"geometry_g": new CameraObscuraOutput_geometry_g(),
			"transform_x": new CameraObscuraOutput_transform_x(),
		}
	}

}

class CameraObscuraInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = true;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CameraObscuraInput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CameraObscuraInput_factor_f extends ResthopperParameter {

	public name: string = "Factor";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CameraObscuraOutput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CameraObscuraOutput_transform_x extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Transform;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
