import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Twist extends ResthopperComponent {

	public guid: string = "9509cb30-d24f-4f55-a5ac-bf0b12a06cfa";
	public name: string = "Twist";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Deforms objects by twisting them around an axis.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"geometry_g": TwistInput_geometry_g,
		"axis_x": TwistInput_axis_x,
		"angle_a": TwistInput_angle_a,
		"infinite_i": TwistInput_infinite_i,
		"rigid_r": TwistInput_rigid_r,
	}

	public output:
	{
		"geometry_g": TwistOutput_geometry_g,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new TwistInput_geometry_g(),
			"axis_x": new TwistInput_axis_x(),
			"angle_a": new TwistInput_angle_a(),
			"infinite_i": new TwistInput_infinite_i(),
			"rigid_r": new TwistInput_rigid_r(),
		}
		this.output = {
			"geometry_g": new TwistOutput_geometry_g(),
		}
	}

}

class TwistInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TwistInput_axis_x extends ResthopperParameter {

	public name: string = "Axis";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TwistInput_angle_a extends ResthopperParameter {

	public name: string = "Angle";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TwistInput_infinite_i extends ResthopperParameter {

	public name: string = "Infinite";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TwistInput_rigid_r extends ResthopperParameter {

	public name: string = "Rigid";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TwistOutput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
