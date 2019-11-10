import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DeconstructBox extends ResthopperComponent {

	public guid: string = "db7d83b1-2898-4ef9-9be5-4e94b4e2048d";
	public name: string = "DeconstructBox";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Deconstruct a box into its constituent parts.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Box_B": DeconstructBoxInput_Box_B,
	}

	public output:
	{
		"Plane_P": DeconstructBoxOutput_Plane_P,
		"X_X": DeconstructBoxOutput_X_X,
		"Y_Y": DeconstructBoxOutput_Y_Y,
		"Z_Z": DeconstructBoxOutput_Z_Z,
	}

	constructor() {
		super();
		this.input = {
			"Box_B": new DeconstructBoxInput_Box_B(),
		}
		this.output = {
			"Plane_P": new DeconstructBoxOutput_Plane_P(),
			"X_X": new DeconstructBoxOutput_X_X(),
			"Y_Y": new DeconstructBoxOutput_Y_Y(),
			"Z_Z": new DeconstructBoxOutput_Z_Z(),
		}
	}

}

class DeconstructBoxInput_Box_B extends ResthopperParameter {

	public name: string = "Box";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Box;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructBoxOutput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructBoxOutput_X_X extends ResthopperParameter {

	public name: string = "X";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructBoxOutput_Y_Y extends ResthopperParameter {

	public name: string = "Y";
	public nickName: string = "Y";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructBoxOutput_Z_Z extends ResthopperParameter {

	public name: string = "Z";
	public nickName: string = "Z";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
