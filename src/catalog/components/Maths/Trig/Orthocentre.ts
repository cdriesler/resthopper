import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Orthocentre extends ResthopperComponent {

	public guid: string = "36dd5551-b6bd-4246-bd2f-1fd91eb2f02d";
	public name: string = "Orthocentre";
	public category: string = "Maths";
	public subCategory: string = "Trig";
	public description: string = "Generate the triangle orthocentre from altitudes.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"pointa_a": OrthocentreInput_pointa_a,
		"pointb_b": OrthocentreInput_pointb_b,
		"pointc_c": OrthocentreInput_pointc_c,
	}

	public output:
	{
		"orthocentre_c": OrthocentreOutput_orthocentre_c,
		"altitudeab_ab": OrthocentreOutput_altitudeab_ab,
		"altitudebc_bc": OrthocentreOutput_altitudebc_bc,
		"altitudeca_ca": OrthocentreOutput_altitudeca_ca,
	}

	constructor() {
		super();
		this.input = {
			"pointa_a": new OrthocentreInput_pointa_a(),
			"pointb_b": new OrthocentreInput_pointb_b(),
			"pointc_c": new OrthocentreInput_pointc_c(),
		}
		this.output = {
			"orthocentre_c": new OrthocentreOutput_orthocentre_c(),
			"altitudeab_ab": new OrthocentreOutput_altitudeab_ab(),
			"altitudebc_bc": new OrthocentreOutput_altitudebc_bc(),
			"altitudeca_ca": new OrthocentreOutput_altitudeca_ca(),
		}
	}

}

class OrthocentreInput_pointa_a extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OrthocentreInput_pointb_b extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OrthocentreInput_pointc_c extends ResthopperParameter {

	public name: string = "PointC";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OrthocentreOutput_orthocentre_c extends ResthopperParameter {

	public name: string = "Orthocentre";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OrthocentreOutput_altitudeab_ab extends ResthopperParameter {

	public name: string = "AltitudeAB";
	public nickName: string = "AB";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OrthocentreOutput_altitudebc_bc extends ResthopperParameter {

	public name: string = "AltitudeBC";
	public nickName: string = "BC";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OrthocentreOutput_altitudeca_ca extends ResthopperParameter {

	public name: string = "AltitudeCA";
	public nickName: string = "CA";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
