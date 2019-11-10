import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Geodesic extends ResthopperComponent {

	public guid: string = "ce5963b4-1cea-4f71-acd2-a3c28ab85662";
	public name: string = "Geodesic";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Construct a surface geodesic between two points.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"start_s": GeodesicInput_start_s,
		"end_e": GeodesicInput_end_e,
	}

	public output:
	{
		"geodesic_g": GeodesicOutput_geodesic_g,
	}

	constructor() {
		super();
		this.input = {
			"start_s": new GeodesicInput_start_s(),
			"end_e": new GeodesicInput_end_e(),
		}
		this.output = {
			"geodesic_g": new GeodesicOutput_geodesic_g(),
		}
	}

}

class GeodesicInput_start_s extends ResthopperParameter {

	public name: string = "Start";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GeodesicInput_end_e extends ResthopperParameter {

	public name: string = "End";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GeodesicOutput_geodesic_g extends ResthopperParameter {

	public name: string = "Geodesic";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
