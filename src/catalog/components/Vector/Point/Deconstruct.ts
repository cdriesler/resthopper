import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Deconstruct extends ResthopperComponent {

	public guid: string = "9abae6b7-fa1d-448c-9209-4a8155345841";
	public name: string = "Deconstruct";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Deconstruct a point into its component parts.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"point_p": DeconstructInput_point_p,
	}

	public output:
	{
		"xcomponent_x": DeconstructOutput_xcomponent_x,
		"ycomponent_y": DeconstructOutput_ycomponent_y,
		"zcomponent_z": DeconstructOutput_zcomponent_z,
	}

	constructor() {
		super();
		this.input = {
			"point_p": new DeconstructInput_point_p(),
		}
		this.output = {
			"xcomponent_x": new DeconstructOutput_xcomponent_x(),
			"ycomponent_y": new DeconstructOutput_ycomponent_y(),
			"zcomponent_z": new DeconstructOutput_zcomponent_z(),
		}
	}

}

class DeconstructInput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructOutput_xcomponent_x extends ResthopperParameter {

	public name: string = "Xcomponent";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructOutput_ycomponent_y extends ResthopperParameter {

	public name: string = "Ycomponent";
	public nickName: string = "Y";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructOutput_zcomponent_z extends ResthopperParameter {

	public name: string = "Zcomponent";
	public nickName: string = "Z";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
