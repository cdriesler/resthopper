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
		"Base_B": CylinderInput_Base_B,
		"Radius_R": CylinderInput_Radius_R,
		"Length_L": CylinderInput_Length_L,
	}

	public output:
	{
		"Cylinder_C": CylinderOutput_Cylinder_C,
	}

	constructor() {
		super();
		this.input = {
			"Base_B": new CylinderInput_Base_B(),
			"Radius_R": new CylinderInput_Radius_R(),
			"Length_L": new CylinderInput_Length_L(),
		}
		this.output = {
			"Cylinder_C": new CylinderOutput_Cylinder_C(),
		}
	}

}

class CylinderInput_Base_B extends ResthopperParameter {

	public name: string = "Base";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CylinderInput_Radius_R extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CylinderInput_Length_L extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CylinderOutput_Cylinder_C extends ResthopperParameter {

	public name: string = "Cylinder";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
