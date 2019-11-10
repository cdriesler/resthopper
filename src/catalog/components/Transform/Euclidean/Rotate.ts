import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Rotate extends ResthopperComponent {

	public guid: string = "b7798b74-037e-4f0c-8ac7-dc1043d093e0";
	public name: string = "Rotate";
	public category: string = "Transform";
	public subCategory: string = "Euclidean";
	public description: string = "Rotate an object in a plane.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Geometry_G": RotateInput_Geometry_G,
		"Angle_A": RotateInput_Angle_A,
		"Plane_P": RotateInput_Plane_P,
	}

	public output:
	{
		"Geometry_G": RotateOutput_Geometry_G,
		"Transform_X": RotateOutput_Transform_X,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new RotateInput_Geometry_G(),
			"Angle_A": new RotateInput_Angle_A(),
			"Plane_P": new RotateInput_Plane_P(),
		}
		this.output = {
			"Geometry_G": new RotateOutput_Geometry_G(),
			"Transform_X": new RotateOutput_Transform_X(),
		}
	}

}

class RotateInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = true;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RotateInput_Angle_A extends ResthopperParameter {

	public name: string = "Angle";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RotateInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RotateOutput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RotateOutput_Transform_X extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Transform;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
