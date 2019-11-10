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

	public library: string = "Transform Components";

	public input:
	{
		"Geometry_G": RotateThreeDInput_Geometry_G,
		"Angle_A": RotateThreeDInput_Angle_A,
		"Center_C": RotateThreeDInput_Center_C,
		"Axis_X": RotateThreeDInput_Axis_X,
	}

	public output:
	{
		"Geometry_G": RotateThreeDOutput_Geometry_G,
		"Transform_X": RotateThreeDOutput_Transform_X,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new RotateThreeDInput_Geometry_G(),
			"Angle_A": new RotateThreeDInput_Angle_A(),
			"Center_C": new RotateThreeDInput_Center_C(),
			"Axis_X": new RotateThreeDInput_Axis_X(),
		}
		this.output = {
			"Geometry_G": new RotateThreeDOutput_Geometry_G(),
			"Transform_X": new RotateThreeDOutput_Transform_X(),
		}
	}

}

class RotateThreeDInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = true;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RotateThreeDInput_Angle_A extends ResthopperParameter {

	public name: string = "Angle";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RotateThreeDInput_Center_C extends ResthopperParameter {

	public name: string = "Center";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RotateThreeDInput_Axis_X extends ResthopperParameter {

	public name: string = "Axis";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RotateThreeDOutput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RotateThreeDOutput_Transform_X extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Transform;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
