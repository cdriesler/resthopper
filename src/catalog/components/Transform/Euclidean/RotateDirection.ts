import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RotateDirection extends ResthopperComponent {

	public guid: string = "5edaea74-32cb-4586-bd72-66694eb73160";
	public name: string = "Rotate Direction";
	public nickName: string = "Rotate";
	public category: string = "Transform";
	public subCategory: string = "Euclidean";
	public description: string = "Rotate an object from one direction to another.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"geometry_g": RotateDirectionInput_geometry_g,
		"center_c": RotateDirectionInput_center_c,
		"from_f": RotateDirectionInput_from_f,
		"to_t": RotateDirectionInput_to_t,
	}

	public output:
	{
		"geometry_g": RotateDirectionOutput_geometry_g,
		"transform_x": RotateDirectionOutput_transform_x,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new RotateDirectionInput_geometry_g(),
			"center_c": new RotateDirectionInput_center_c(),
			"from_f": new RotateDirectionInput_from_f(),
			"to_t": new RotateDirectionInput_to_t(),
		}
		this.output = {
			"geometry_g": new RotateDirectionOutput_geometry_g(),
			"transform_x": new RotateDirectionOutput_transform_x(),
		}
	}

}

class RotateDirectionInput_geometry_g extends ResthopperParameter {

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

class RotateDirectionInput_center_c extends ResthopperParameter {

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

class RotateDirectionInput_from_f extends ResthopperParameter {

	public name: string = "From";
	public nickName: string = "F";
	public description: string = "Empty Vector parameter"
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RotateDirectionInput_to_t extends ResthopperParameter {

	public name: string = "To";
	public nickName: string = "T";
	public description: string = "Empty Vector parameter"
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RotateDirectionOutput_geometry_g extends ResthopperParameter {

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

class RotateDirectionOutput_transform_x extends ResthopperParameter {

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
