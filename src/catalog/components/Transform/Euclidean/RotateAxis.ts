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

	public library: string = "Transform Components";

	public input:
	{
		"Geometry_G": RotateAxisInput_Geometry_G,
		"Angle_A": RotateAxisInput_Angle_A,
		"Axis_X": RotateAxisInput_Axis_X,
	}

	public output:
	{
		"Geometry_G": RotateAxisOutput_Geometry_G,
		"Transform_X": RotateAxisOutput_Transform_X,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new RotateAxisInput_Geometry_G(),
			"Angle_A": new RotateAxisInput_Angle_A(),
			"Axis_X": new RotateAxisInput_Axis_X(),
		}
		this.output = {
			"Geometry_G": new RotateAxisOutput_Geometry_G(),
			"Transform_X": new RotateAxisOutput_Transform_X(),
		}
	}

}

class RotateAxisInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = true;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RotateAxisInput_Angle_A extends ResthopperParameter {

	public name: string = "Angle";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RotateAxisInput_Axis_X extends ResthopperParameter {

	public name: string = "Axis";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RotateAxisOutput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RotateAxisOutput_Transform_X extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Transform;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
