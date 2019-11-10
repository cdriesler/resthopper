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
		"PointA_A": OrthocentreInput_PointA_A,
		"PointB_B": OrthocentreInput_PointB_B,
		"PointC_C": OrthocentreInput_PointC_C,
	}

	public output:
	{
		"Orthocentre_C": OrthocentreOutput_Orthocentre_C,
		"AltitudeAB_AB": OrthocentreOutput_AltitudeAB_AB,
		"AltitudeBC_BC": OrthocentreOutput_AltitudeBC_BC,
		"AltitudeCA_CA": OrthocentreOutput_AltitudeCA_CA,
	}

	constructor() {
		super();
		this.input = {
			"PointA_A": new OrthocentreInput_PointA_A(),
			"PointB_B": new OrthocentreInput_PointB_B(),
			"PointC_C": new OrthocentreInput_PointC_C(),
		}
		this.output = {
			"Orthocentre_C": new OrthocentreOutput_Orthocentre_C(),
			"AltitudeAB_AB": new OrthocentreOutput_AltitudeAB_AB(),
			"AltitudeBC_BC": new OrthocentreOutput_AltitudeBC_BC(),
			"AltitudeCA_CA": new OrthocentreOutput_AltitudeCA_CA(),
		}
	}

}

class OrthocentreInput_PointA_A extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OrthocentreInput_PointB_B extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OrthocentreInput_PointC_C extends ResthopperParameter {

	public name: string = "PointC";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OrthocentreOutput_Orthocentre_C extends ResthopperParameter {

	public name: string = "Orthocentre";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OrthocentreOutput_AltitudeAB_AB extends ResthopperParameter {

	public name: string = "AltitudeAB";
	public nickName: string = "AB";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OrthocentreOutput_AltitudeBC_BC extends ResthopperParameter {

	public name: string = "AltitudeBC";
	public nickName: string = "BC";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OrthocentreOutput_AltitudeCA_CA extends ResthopperParameter {

	public name: string = "AltitudeCA";
	public nickName: string = "CA";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
