import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Cylinder extends ResthopperComponent {

	public guid: string = "0373008a-80ee-45be-887d-ab5a244afc29";
	public name: string = "Cylinder";
	public category: string = "Surface";
	public subCategory: string = "Primitive";
	public description: string = "Create a cylindrical surface.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"base_b": CylinderInput_base_b,
		"radius_r": CylinderInput_radius_r,
		"length_l": CylinderInput_length_l,
	}

	public output:
	{
		"cylinder_c": CylinderOutput_cylinder_c,
	}

	constructor() {
		super();
		this.input = {
			"base_b": new CylinderInput_base_b(),
			"radius_r": new CylinderInput_radius_r(),
			"length_l": new CylinderInput_length_l(),
		}
		this.output = {
			"cylinder_c": new CylinderOutput_cylinder_c(),
		}
	}

}

class CylinderInput_base_b extends ResthopperParameter {

	public name: string = "Base";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CylinderInput_radius_r extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CylinderInput_length_l extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CylinderOutput_cylinder_c extends ResthopperParameter {

	public name: string = "Cylinder";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
