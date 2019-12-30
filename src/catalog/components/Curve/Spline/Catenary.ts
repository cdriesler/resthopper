import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Catenary extends ResthopperComponent {

	public guid: string = "275671d4-3e87-40bd-8aff-8e6a5fdbb892";
	public name: string = "Catenary";
	public nickName: string = "Cat";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Create a catenary chain between two points.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"pointa_a": CatenaryInput_pointa_a,
		"pointb_b": CatenaryInput_pointb_b,
		"length_l": CatenaryInput_length_l,
		"gravity_g": CatenaryInput_gravity_g,
	}

	public output:
	{
		"catenary_c": CatenaryOutput_catenary_c,
	}

	constructor() {
		super();
		this.input = {
			"pointa_a": new CatenaryInput_pointa_a(),
			"pointb_b": new CatenaryInput_pointb_b(),
			"length_l": new CatenaryInput_length_l(),
			"gravity_g": new CatenaryInput_gravity_g(),
		}
		this.output = {
			"catenary_c": new CatenaryOutput_catenary_c(),
		}
	}

}

class CatenaryInput_pointa_a extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "A";
	public description: string = "Start point of catenary"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CatenaryInput_pointb_b extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "B";
	public description: string = "End point of catenary"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CatenaryInput_length_l extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public description: string = "Length of catenary chain (should be larger than the distance |AB|)"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CatenaryInput_gravity_g extends ResthopperParameter {

	public name: string = "Gravity";
	public nickName: string = "G";
	public description: string = "Direction of gravity"
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CatenaryOutput_catenary_c extends ResthopperParameter {

	public name: string = "Catenary";
	public nickName: string = "C";
	public description: string = "Catenary chain"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
