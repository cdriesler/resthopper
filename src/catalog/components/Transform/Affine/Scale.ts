import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Scale extends ResthopperComponent {

	public guid: string = "4d2a06bd-4b0f-4c65-9ee0-4220e4c01703";
	public name: string = "Scale";
	public category: string = "Transform";
	public subCategory: string = "Affine";
	public description: string = "Scale an object uniformly in all directions.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Geometry_G": ScaleInput_Geometry_G,
		"Center_C": ScaleInput_Center_C,
		"Factor_F": ScaleInput_Factor_F,
	}

	public output:
	{
		"Geometry_G": ScaleOutput_Geometry_G,
		"Transform_X": ScaleOutput_Transform_X,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new ScaleInput_Geometry_G(),
			"Center_C": new ScaleInput_Center_C(),
			"Factor_F": new ScaleInput_Factor_F(),
		}
		this.output = {
			"Geometry_G": new ScaleOutput_Geometry_G(),
			"Transform_X": new ScaleOutput_Transform_X(),
		}
	}

}

class ScaleInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = true;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ScaleInput_Center_C extends ResthopperParameter {

	public name: string = "Center";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ScaleInput_Factor_F extends ResthopperParameter {

	public name: string = "Factor";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ScaleOutput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ScaleOutput_Transform_X extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Transform;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
