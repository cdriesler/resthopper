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
		"Geometry_G": TwistInput_Geometry_G,
		"Axis_X": TwistInput_Axis_X,
		"Angle_A": TwistInput_Angle_A,
		"Infinite_I": TwistInput_Infinite_I,
		"Rigid_R": TwistInput_Rigid_R,
	}

	public output:
	{
		"Geometry_G": TwistOutput_Geometry_G,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new TwistInput_Geometry_G(),
			"Axis_X": new TwistInput_Axis_X(),
			"Angle_A": new TwistInput_Angle_A(),
			"Infinite_I": new TwistInput_Infinite_I(),
			"Rigid_R": new TwistInput_Rigid_R(),
		}
		this.output = {
			"Geometry_G": new TwistOutput_Geometry_G(),
		}
	}

}

class TwistInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TwistInput_Axis_X extends ResthopperParameter {

	public name: string = "Axis";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TwistInput_Angle_A extends ResthopperParameter {

	public name: string = "Angle";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TwistInput_Infinite_I extends ResthopperParameter {

	public name: string = "Infinite";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TwistInput_Rigid_R extends ResthopperParameter {

	public name: string = "Rigid";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TwistOutput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
