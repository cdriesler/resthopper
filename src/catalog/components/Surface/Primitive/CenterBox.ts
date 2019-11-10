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
		"Base_B": CenterBoxInput_Base_B,
		"X_X": CenterBoxInput_X_X,
		"Y_Y": CenterBoxInput_Y_Y,
		"Z_Z": CenterBoxInput_Z_Z,
	}

	public output:
	{
		"Box_B": CenterBoxOutput_Box_B,
	}

	constructor() {
		super();
		this.input = {
			"Base_B": new CenterBoxInput_Base_B(),
			"X_X": new CenterBoxInput_X_X(),
			"Y_Y": new CenterBoxInput_Y_Y(),
			"Z_Z": new CenterBoxInput_Z_Z(),
		}
		this.output = {
			"Box_B": new CenterBoxOutput_Box_B(),
		}
	}

}

class CenterBoxInput_Base_B extends ResthopperParameter {

	public name: string = "Base";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CenterBoxInput_X_X extends ResthopperParameter {

	public name: string = "X";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CenterBoxInput_Y_Y extends ResthopperParameter {

	public name: string = "Y";
	public nickName: string = "Y";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CenterBoxInput_Z_Z extends ResthopperParameter {

	public name: string = "Z";
	public nickName: string = "Z";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CenterBoxOutput_Box_B extends ResthopperParameter {

	public name: string = "Box";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Box;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
