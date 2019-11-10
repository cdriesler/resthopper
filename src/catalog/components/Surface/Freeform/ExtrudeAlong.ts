import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ExtrudeAlong extends ResthopperComponent {

	public guid: string = "38a5638b-6d01-4417-bf11-976d925f8a71";
	public name: string = "ExtrudeAlong";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Extrude curves and surfaces along a curve.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Base_B": ExtrudeAlongInput_Base_B,
		"Curve_C": ExtrudeAlongInput_Curve_C,
	}

	public output:
	{
		"Extrusion_E": ExtrudeAlongOutput_Extrusion_E,
	}

	constructor() {
		super();
		this.input = {
			"Base_B": new ExtrudeAlongInput_Base_B(),
			"Curve_C": new ExtrudeAlongInput_Curve_C(),
		}
		this.output = {
			"Extrusion_E": new ExtrudeAlongOutput_Extrusion_E(),
		}
	}

}

class ExtrudeAlongInput_Base_B extends ResthopperParameter {

	public name: string = "Base";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtrudeAlongInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtrudeAlongOutput_Extrusion_E extends ResthopperParameter {

	public name: string = "Extrusion";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
