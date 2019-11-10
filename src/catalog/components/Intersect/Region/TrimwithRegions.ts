import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TrimwithRegions extends ResthopperComponent {

	public guid: string = "26949c81-9b50-43b7-ac49-3203deb6eec7";
	public name: string = "TrimwithRegions";
	public category: string = "Intersect";
	public subCategory: string = "Region";
	public description: string = "Trim a curve with multiple regions.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Curve_C": TrimwithRegionsInput_Curve_C,
		"Regions_R": TrimwithRegionsInput_Regions_R,
		"Plane_P": TrimwithRegionsInput_Plane_P,
	}

	public output:
	{
		"Inside_Ci": TrimwithRegionsOutput_Inside_Ci,
		"Outside_Co": TrimwithRegionsOutput_Outside_Co,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new TrimwithRegionsInput_Curve_C(),
			"Regions_R": new TrimwithRegionsInput_Regions_R(),
			"Plane_P": new TrimwithRegionsInput_Plane_P(),
		}
		this.output = {
			"Inside_Ci": new TrimwithRegionsOutput_Inside_Ci(),
			"Outside_Co": new TrimwithRegionsOutput_Outside_Co(),
		}
	}

}

class TrimwithRegionsInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TrimwithRegionsInput_Regions_R extends ResthopperParameter {

	public name: string = "Regions";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TrimwithRegionsInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = true;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TrimwithRegionsOutput_Inside_Ci extends ResthopperParameter {

	public name: string = "Inside";
	public nickName: string = "Ci";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TrimwithRegionsOutput_Outside_Co extends ResthopperParameter {

	public name: string = "Outside";
	public nickName: string = "Co";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
