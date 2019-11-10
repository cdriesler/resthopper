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
		"base_b": ConeInput_base_b,
		"radius_r": ConeInput_radius_r,
		"length_l": ConeInput_length_l,
	}

	public output:
	{
		"cone_c": ConeOutput_cone_c,
		"tip_t": ConeOutput_tip_t,
	}

	constructor() {
		super();
		this.input = {
			"base_b": new ConeInput_base_b(),
			"radius_r": new ConeInput_radius_r(),
			"length_l": new ConeInput_length_l(),
		}
		this.output = {
			"cone_c": new ConeOutput_cone_c(),
			"tip_t": new ConeOutput_tip_t(),
		}
	}

}

class ConeInput_base_b extends ResthopperParameter {

	public name: string = "Base";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConeInput_radius_r extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConeInput_length_l extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConeOutput_cone_c extends ResthopperParameter {

	public name: string = "Cone";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConeOutput_tip_t extends ResthopperParameter {

	public name: string = "Tip";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
