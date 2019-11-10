import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RotateDirection extends ResthopperComponent {

	public guid: string = "5edaea74-32cb-4586-bd72-66694eb73160";
	public name: string = "RotateDirection";
	public category: string = "Transform";
	public subCategory: string = "Euclidean";
	public description: string = "Rotate an object from one direction to another.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Geometry_G": RotateDirectionInput_Geometry_G,
		"Center_C": RotateDirectionInput_Center_C,
		"From_F": RotateDirectionInput_From_F,
		"To_T": RotateDirectionInput_To_T,
	}

	public output:
	{
		"Geometry_G": RotateDirectionOutput_Geometry_G,
		"Transform_X": RotateDirectionOutput_Transform_X,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new RotateDirectionInput_Geometry_G(),
			"Center_C": new RotateDirectionInput_Center_C(),
			"From_F": new RotateDirectionInput_From_F(),
			"To_T": new RotateDirectionInput_To_T(),
		}
		this.output = {
			"Geometry_G": new RotateDirectionOutput_Geometry_G(),
			"Transform_X": new RotateDirectionOutput_Transform_X(),
		}
	}

}

class RotateDirectionInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = true;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RotateDirectionInput_Center_C extends ResthopperParameter {

	public name: string = "Center";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RotateDirectionInput_From_F extends ResthopperParameter {

	public name: string = "From";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RotateDirectionInput_To_T extends ResthopperParameter {

	public name: string = "To";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RotateDirectionOutput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RotateDirectionOutput_Transform_X extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Transform;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
