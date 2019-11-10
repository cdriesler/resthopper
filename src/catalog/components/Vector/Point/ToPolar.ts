import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ToPolar extends ResthopperComponent {

	public guid: string = "61647ba2-31eb-4921-9632-df81e3286f7d";
	public name: string = "ToPolar";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Convert a 3D point to plane polar coordinates.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Point_P": ToPolarInput_Point_P,
		"System_S": ToPolarInput_System_S,
	}

	public output:
	{
		"Phi_P": ToPolarOutput_Phi_P,
		"Theta_T": ToPolarOutput_Theta_T,
		"Radius_R": ToPolarOutput_Radius_R,
	}

	constructor() {
		super();
		this.input = {
			"Point_P": new ToPolarInput_Point_P(),
			"System_S": new ToPolarInput_System_S(),
		}
		this.output = {
			"Phi_P": new ToPolarOutput_Phi_P(),
			"Theta_T": new ToPolarOutput_Theta_T(),
			"Radius_R": new ToPolarOutput_Radius_R(),
		}
	}

}

class ToPolarInput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ToPolarInput_System_S extends ResthopperParameter {

	public name: string = "System";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ToPolarOutput_Phi_P extends ResthopperParameter {

	public name: string = "Phi";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ToPolarOutput_Theta_T extends ResthopperParameter {

	public name: string = "Theta";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ToPolarOutput_Radius_R extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
