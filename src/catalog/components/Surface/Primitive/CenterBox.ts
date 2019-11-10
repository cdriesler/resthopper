import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CenterBox extends ResthopperComponent {

	public guid: string = "28061aae-04fb-4cb5-ac45-16f3b66bc0a4";
	public name: string = "CenterBox";
	public category: string = "Surface";
	public subCategory: string = "Primitive";
	public description: string = "Create a box centered on a plane.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"base_b": CenterBoxInput_base_b,
		"x_x": CenterBoxInput_x_x,
		"y_y": CenterBoxInput_y_y,
		"z_z": CenterBoxInput_z_z,
	}

	public output:
	{
		"box_b": CenterBoxOutput_box_b,
	}

	constructor() {
		super();
		this.input = {
			"base_b": new CenterBoxInput_base_b(),
			"x_x": new CenterBoxInput_x_x(),
			"y_y": new CenterBoxInput_y_y(),
			"z_z": new CenterBoxInput_z_z(),
		}
		this.output = {
			"box_b": new CenterBoxOutput_box_b(),
		}
	}

}

class CenterBoxInput_base_b extends ResthopperParameter {

	public name: string = "Base";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CenterBoxInput_x_x extends ResthopperParameter {

	public name: string = "X";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CenterBoxInput_y_y extends ResthopperParameter {

	public name: string = "Y";
	public nickName: string = "Y";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CenterBoxInput_z_z extends ResthopperParameter {

	public name: string = "Z";
	public nickName: string = "Z";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CenterBoxOutput_box_b extends ResthopperParameter {

	public name: string = "Box";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Box"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
