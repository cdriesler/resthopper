import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Extrude extends ResthopperComponent {

	public guid: string = "962034e9-cc27-4394-afc4-5c16e3447cf9";
	public name: string = "Extrude";
	public nickName: string = "Extr";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Extrude curves and surfaces along a vector.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"base_b": ExtrudeInput_base_b,
		"direction_d": ExtrudeInput_direction_d,
	}

	public output:
	{
		"extrusion_e": ExtrudeOutput_extrusion_e,
	}

	constructor() {
		super();
		this.input = {
			"base_b": new ExtrudeInput_base_b(),
			"direction_d": new ExtrudeInput_direction_d(),
		}
		this.output = {
			"extrusion_e": new ExtrudeOutput_extrusion_e(),
		}
	}

}

class ExtrudeInput_base_b extends ResthopperParameter {

	public name: string = "Base";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtrudeInput_direction_d extends ResthopperParameter {

	public name: string = "Direction";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtrudeOutput_extrusion_e extends ResthopperParameter {

	public name: string = "Extrusion";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
