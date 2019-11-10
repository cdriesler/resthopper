import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RotateThreeD extends ResthopperComponent {

	public guid: string = "3dfb9a77-6e05-4016-9f20-94f78607d672";
	public name: string = "Rotate3D";
	public category: string = "Transform";
	public subCategory: string = "Euclidean";
	public description: string = "Rotate an object around a center point and an axis vector.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"geometry_g": RotateThreeDInput_geometry_g,
		"angle_a": RotateThreeDInput_angle_a,
		"center_c": RotateThreeDInput_center_c,
		"axis_x": RotateThreeDInput_axis_x,
	}

	public output:
	{
		"geometry_g": RotateThreeDOutput_geometry_g,
		"transform_x": RotateThreeDOutput_transform_x,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new RotateThreeDInput_geometry_g(),
			"angle_a": new RotateThreeDInput_angle_a(),
			"center_c": new RotateThreeDInput_center_c(),
			"axis_x": new RotateThreeDInput_axis_x(),
		}
		this.output = {
			"geometry_g": new RotateThreeDOutput_geometry_g(),
			"transform_x": new RotateThreeDOutput_transform_x(),
		}
	}

}

class RotateThreeDInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = true;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RotateThreeDInput_angle_a extends ResthopperParameter {

	public name: string = "Angle";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RotateThreeDInput_center_c extends ResthopperParameter {

	public name: string = "Center";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RotateThreeDInput_axis_x extends ResthopperParameter {

	public name: string = "Axis";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RotateThreeDOutput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RotateThreeDOutput_transform_x extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Transform"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
