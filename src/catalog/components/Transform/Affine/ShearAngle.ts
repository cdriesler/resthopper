import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ShearAngle extends ResthopperComponent {

	public guid: string = "f19ee36c-f21f-4e25-be4c-4ca4b30eda0d";
	public name: string = "Shear Angle";
	public nickName: string = "Shear";
	public category: string = "Transform";
	public subCategory: string = "Affine";
	public description: string = "Shear an object based on tilt angles.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"geometry_g": ShearAngleInput_geometry_g,
		"base_p": ShearAngleInput_base_p,
		"anglex_ax": ShearAngleInput_anglex_ax,
		"angley_ay": ShearAngleInput_angley_ay,
	}

	public output:
	{
		"geometry_g": ShearAngleOutput_geometry_g,
		"transform_x": ShearAngleOutput_transform_x,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new ShearAngleInput_geometry_g(),
			"base_p": new ShearAngleInput_base_p(),
			"anglex_ax": new ShearAngleInput_anglex_ax(),
			"angley_ay": new ShearAngleInput_angley_ay(),
		}
		this.output = {
			"geometry_g": new ShearAngleOutput_geometry_g(),
			"transform_x": new ShearAngleOutput_transform_x(),
		}
	}

}

class ShearAngleInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public description: string = "Base geometry"
	public isOptional: boolean = true;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ShearAngleInput_base_p extends ResthopperParameter {

	public name: string = "Base";
	public nickName: string = "P";
	public description: string = "Base plane"
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ShearAngleInput_anglex_ax extends ResthopperParameter {

	public name: string = "AngleX";
	public nickName: string = "Ax";
	public description: string = "Rotation around {x} axis in radians"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ShearAngleInput_angley_ay extends ResthopperParameter {

	public name: string = "AngleY";
	public nickName: string = "Ay";
	public description: string = "Rotation around {y} axis in radians"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ShearAngleOutput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public description: string = "Sheared geometry"
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ShearAngleOutput_transform_x extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public description: string = "Transformation data"
	public isOptional: boolean = false;
	public typeName: string = "Transform"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
