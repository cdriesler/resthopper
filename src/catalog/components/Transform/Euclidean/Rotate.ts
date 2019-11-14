import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Rotate extends ResthopperComponent {

	public guid: string = "b7798b74-037e-4f0c-8ac7-dc1043d093e0";
	public name: string = "Rotate";
	public nickName: string = "Rotate";
	public category: string = "Transform";
	public subCategory: string = "Euclidean";
	public description: string = "Rotate an object in a plane.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"geometry_g": RotateInput_geometry_g,
		"angle_a": RotateInput_angle_a,
		"plane_p": RotateInput_plane_p,
	}

	public output:
	{
		"geometry_g": RotateOutput_geometry_g,
		"transform_x": RotateOutput_transform_x,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new RotateInput_geometry_g(),
			"angle_a": new RotateInput_angle_a(),
			"plane_p": new RotateInput_plane_p(),
		}
		this.output = {
			"geometry_g": new RotateOutput_geometry_g(),
			"transform_x": new RotateOutput_transform_x(),
		}
	}

}

class RotateInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = true;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RotateInput_angle_a extends ResthopperParameter {

	public name: string = "Angle";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RotateInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RotateOutput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RotateOutput_transform_x extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Transform"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
