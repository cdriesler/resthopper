import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ShearAngle extends ResthopperComponent {

	public guid: string = "f19ee36c-f21f-4e25-be4c-4ca4b30eda0d";
	public name: string = "ShearAngle";
	public category: string = "Transform";
	public subCategory: string = "Affine";
	public description: string = "Shear an object based on tilt angles.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Geometry_G": ShearAngleInput_Geometry_G,
		"Base_P": ShearAngleInput_Base_P,
		"AngleX_Ax": ShearAngleInput_AngleX_Ax,
		"AngleY_Ay": ShearAngleInput_AngleY_Ay,
	}

	public output:
	{
		"Geometry_G": ShearAngleOutput_Geometry_G,
		"Transform_X": ShearAngleOutput_Transform_X,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new ShearAngleInput_Geometry_G(),
			"Base_P": new ShearAngleInput_Base_P(),
			"AngleX_Ax": new ShearAngleInput_AngleX_Ax(),
			"AngleY_Ay": new ShearAngleInput_AngleY_Ay(),
		}
		this.output = {
			"Geometry_G": new ShearAngleOutput_Geometry_G(),
			"Transform_X": new ShearAngleOutput_Transform_X(),
		}
	}

}

class ShearAngleInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = true;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ShearAngleInput_Base_P extends ResthopperParameter {

	public name: string = "Base";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ShearAngleInput_AngleX_Ax extends ResthopperParameter {

	public name: string = "AngleX";
	public nickName: string = "Ax";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ShearAngleInput_AngleY_Ay extends ResthopperParameter {

	public name: string = "AngleY";
	public nickName: string = "Ay";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ShearAngleOutput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ShearAngleOutput_Transform_X extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Transform;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
