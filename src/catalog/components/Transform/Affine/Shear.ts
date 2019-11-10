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
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"grip_g": ShearInput_grip_g,
		"base_p": ShearInput_base_p,
		"target_t": ShearInput_target_t,
	}

	public output:
	{
		"geometry_g": ShearOutput_geometry_g,
		"transform_x": ShearOutput_transform_x,
	}

	constructor() {
		super();
		this.input = {
			"grip_g": new ShearInput_grip_g(),
			"base_p": new ShearInput_base_p(),
			"target_t": new ShearInput_target_t(),
		}
		this.output = {
			"geometry_g": new ShearOutput_geometry_g(),
			"transform_x": new ShearOutput_transform_x(),
		}
	}

}

class ShearInput_grip_g extends ResthopperParameter {

	public name: string = "Grip";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ShearInput_base_p extends ResthopperParameter {

	public name: string = "Base";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ShearInput_target_t extends ResthopperParameter {

	public name: string = "Target";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ShearOutput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ShearOutput_transform_x extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Transform"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
