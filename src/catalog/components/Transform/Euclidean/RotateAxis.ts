import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RotateAxis extends ResthopperComponent {

	public guid: string = "3ac8e589-37f5-477d-aa61-6699702c5728";
	public name: string = "RotateAxis";
	public category: string = "Transform";
	public subCategory: string = "Euclidean";
	public description: string = "Rotate an object around an axis.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"geometry_g": RotateAxisInput_geometry_g,
		"angle_a": RotateAxisInput_angle_a,
		"axis_x": RotateAxisInput_axis_x,
	}

	public output:
	{
		"geometry_g": RotateAxisOutput_geometry_g,
		"transform_x": RotateAxisOutput_transform_x,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new RotateAxisInput_geometry_g(),
			"angle_a": new RotateAxisInput_angle_a(),
			"axis_x": new RotateAxisInput_axis_x(),
		}
		this.output = {
			"geometry_g": new RotateAxisOutput_geometry_g(),
			"transform_x": new RotateAxisOutput_transform_x(),
		}
	}

}

class RotateAxisInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = true;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RotateAxisInput_angle_a extends ResthopperParameter {

	public name: string = "Angle";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RotateAxisInput_axis_x extends ResthopperParameter {

	public name: string = "Axis";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RotateAxisOutput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RotateAxisOutput_transform_x extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Transform"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
