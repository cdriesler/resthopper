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
		"Start_S": GeodesicInput_Start_S,
		"End_E": GeodesicInput_End_E,
	}

	public output:
	{
		"Geodesic_G": GeodesicOutput_Geodesic_G,
	}

	constructor() {
		super();
		this.input = {
			"Start_S": new GeodesicInput_Start_S(),
			"End_E": new GeodesicInput_End_E(),
		}
		this.output = {
			"Geodesic_G": new GeodesicOutput_Geodesic_G(),
		}
	}

}

class GeodesicInput_Start_S extends ResthopperParameter {

	public name: string = "Start";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GeodesicInput_End_E extends ResthopperParameter {

	public name: string = "End";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GeodesicOutput_Geodesic_G extends ResthopperParameter {

	public name: string = "Geodesic";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
