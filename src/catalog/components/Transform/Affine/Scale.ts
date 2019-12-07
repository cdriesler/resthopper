import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Scale extends ResthopperComponent {

	public guid: string = "4d2a06bd-4b0f-4c65-9ee0-4220e4c01703";
	public name: string = "Scale";
	public nickName: string = "Scale";
	public category: string = "Transform";
	public subCategory: string = "Affine";
	public description: string = "Scale an object uniformly in all directions.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"geometry_g": ScaleInput_geometry_g,
		"center_c": ScaleInput_center_c,
		"factor_f": ScaleInput_factor_f,
	}

	public output:
	{
		"geometry_g": ScaleOutput_geometry_g,
		"transform_x": ScaleOutput_transform_x,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new ScaleInput_geometry_g(),
			"center_c": new ScaleInput_center_c(),
			"factor_f": new ScaleInput_factor_f(),
		}
		this.output = {
			"geometry_g": new ScaleOutput_geometry_g(),
			"transform_x": new ScaleOutput_transform_x(),
		}
	}

}

class ScaleInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public description: string = "Empty Geometry parameter"
	public isOptional: boolean = true;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ScaleInput_center_c extends ResthopperParameter {

	public name: string = "Center";
	public nickName: string = "C";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ScaleInput_factor_f extends ResthopperParameter {

	public name: string = "Factor";
	public nickName: string = "F";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ScaleOutput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public description: string = "Empty Geometry parameter"
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ScaleOutput_transform_x extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public description: string = "Empty Transform parameter"
	public isOptional: boolean = false;
	public typeName: string = "Transform"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
