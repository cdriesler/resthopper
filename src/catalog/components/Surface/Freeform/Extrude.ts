import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Extrude extends ResthopperComponent {

	public guid: string = "962034e9-cc27-4394-afc4-5c16e3447cf9";
	public name: string = "Extrude";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Extrude curves and surfaces along a vector.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Base_B": ExtrudeInput_Base_B,
		"Direction_D": ExtrudeInput_Direction_D,
	}

	public output:
	{
		"Extrusion_E": ExtrudeOutput_Extrusion_E,
	}

	constructor() {
		super();
		this.input = {
			"Base_B": new ExtrudeInput_Base_B(),
			"Direction_D": new ExtrudeInput_Direction_D(),
		}
		this.output = {
			"Extrusion_E": new ExtrudeOutput_Extrusion_E(),
		}
	}

}

class ExtrudeInput_Base_B extends ResthopperParameter {

	public name: string = "Base";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtrudeInput_Direction_D extends ResthopperParameter {

	public name: string = "Direction";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtrudeOutput_Extrusion_E extends ResthopperParameter {

	public name: string = "Extrusion";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
