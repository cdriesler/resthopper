import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class OffsetonSrf extends ResthopperComponent {

	public guid: string = "b6f5cb51-f260-4c74-bf73-deb47de1bf91";
	public name: string = "Offset on Srf";
	public nickName: string = "OffsetS";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Offset a curve on a surface with a specified distance.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curve_c": OffsetonSrfInput_curve_c,
		"distance_d": OffsetonSrfInput_distance_d,
		"surface_s": OffsetonSrfInput_surface_s,
	}

	public output:
	{
		"curve_c": OffsetonSrfOutput_curve_c,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new OffsetonSrfInput_curve_c(),
			"distance_d": new OffsetonSrfInput_distance_d(),
			"surface_s": new OffsetonSrfInput_surface_s(),
		}
		this.output = {
			"curve_c": new OffsetonSrfOutput_curve_c(),
		}
	}

}

class OffsetonSrfInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public description: string = "Curve to offset"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OffsetonSrfInput_distance_d extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public description: string = "Offset distance"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OffsetonSrfInput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public description: string = "Surface for offset operation"
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OffsetonSrfOutput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public description: string = "Resulting offsets"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
