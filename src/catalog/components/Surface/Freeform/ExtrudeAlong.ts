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
		"base_b": ExtrudeAlongInput_base_b,
		"curve_c": ExtrudeAlongInput_curve_c,
	}

	public output:
	{
		"extrusion_e": ExtrudeAlongOutput_extrusion_e,
	}

	constructor() {
		super();
		this.input = {
			"base_b": new ExtrudeAlongInput_base_b(),
			"curve_c": new ExtrudeAlongInput_curve_c(),
		}
		this.output = {
			"extrusion_e": new ExtrudeAlongOutput_extrusion_e(),
		}
	}

}

class ExtrudeAlongInput_base_b extends ResthopperParameter {

	public name: string = "Base";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtrudeAlongInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtrudeAlongOutput_extrusion_e extends ResthopperParameter {

	public name: string = "Extrusion";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
