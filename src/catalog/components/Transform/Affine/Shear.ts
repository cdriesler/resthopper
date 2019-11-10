import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Shear extends ResthopperComponent {

	public guid: string = "5a27203a-e05f-4eea-b80f-a5f29a00fdf2";
	public name: string = "Shear";
	public category: string = "Transform";
	public subCategory: string = "Affine";
	public description: string = "Shear an object based on a shearing vector.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Grip_G": ShearInput_Grip_G,
		"Base_P": ShearInput_Base_P,
		"Target_T": ShearInput_Target_T,
	}

	public output:
	{
		"Geometry_G": ShearOutput_Geometry_G,
		"Transform_X": ShearOutput_Transform_X,
	}

	constructor() {
		super();
		this.input = {
			"Grip_G": new ShearInput_Grip_G(),
			"Base_P": new ShearInput_Base_P(),
			"Target_T": new ShearInput_Target_T(),
		}
		this.output = {
			"Geometry_G": new ShearOutput_Geometry_G(),
			"Transform_X": new ShearOutput_Transform_X(),
		}
	}

}

class ShearInput_Grip_G extends ResthopperParameter {

	public name: string = "Grip";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ShearInput_Base_P extends ResthopperParameter {

	public name: string = "Base";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ShearInput_Target_T extends ResthopperParameter {

	public name: string = "Target";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ShearOutput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ShearOutput_Transform_X extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Transform;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
