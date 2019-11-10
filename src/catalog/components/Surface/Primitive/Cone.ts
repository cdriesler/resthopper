import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Cone extends ResthopperComponent {

	public guid: string = "03e331ed-c4d1-4a23-afa2-f57b87d2043c";
	public name: string = "Cone";
	public category: string = "Surface";
	public subCategory: string = "Primitive";
	public description: string = "Create a conical surface";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Base_B": ConeInput_Base_B,
		"Radius_R": ConeInput_Radius_R,
		"Length_L": ConeInput_Length_L,
	}

	public output:
	{
		"Cone_C": ConeOutput_Cone_C,
		"Tip_T": ConeOutput_Tip_T,
	}

	constructor() {
		super();
		this.input = {
			"Base_B": new ConeInput_Base_B(),
			"Radius_R": new ConeInput_Radius_R(),
			"Length_L": new ConeInput_Length_L(),
		}
		this.output = {
			"Cone_C": new ConeOutput_Cone_C(),
			"Tip_T": new ConeOutput_Tip_T(),
		}
	}

}

class ConeInput_Base_B extends ResthopperParameter {

	public name: string = "Base";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConeInput_Radius_R extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConeInput_Length_L extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConeOutput_Cone_C extends ResthopperParameter {

	public name: string = "Cone";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConeOutput_Tip_T extends ResthopperParameter {

	public name: string = "Tip";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
