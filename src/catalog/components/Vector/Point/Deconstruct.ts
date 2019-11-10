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
		"Point_P": DeconstructInput_Point_P,
	}

	public output:
	{
		"Xcomponent_X": DeconstructOutput_Xcomponent_X,
		"Ycomponent_Y": DeconstructOutput_Ycomponent_Y,
		"Zcomponent_Z": DeconstructOutput_Zcomponent_Z,
	}

	constructor() {
		super();
		this.input = {
			"Point_P": new DeconstructInput_Point_P(),
		}
		this.output = {
			"Xcomponent_X": new DeconstructOutput_Xcomponent_X(),
			"Ycomponent_Y": new DeconstructOutput_Ycomponent_Y(),
			"Zcomponent_Z": new DeconstructOutput_Zcomponent_Z(),
		}
	}

}

class DeconstructInput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructOutput_Xcomponent_X extends ResthopperParameter {

	public name: string = "Xcomponent";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructOutput_Ycomponent_Y extends ResthopperParameter {

	public name: string = "Ycomponent";
	public nickName: string = "Y";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructOutput_Zcomponent_Z extends ResthopperParameter {

	public name: string = "Zcomponent";
	public nickName: string = "Z";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
