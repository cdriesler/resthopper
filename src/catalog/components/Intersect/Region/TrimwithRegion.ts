import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TrimwithRegion extends ResthopperComponent {

	public guid: string = "3092caf0-7cf9-4885-bcc0-e635d878832a";
	public name: string = "TrimwithRegion";
	public category: string = "Intersect";
	public subCategory: string = "Region";
	public description: string = "Trim a curve with a region.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Curve_C": TrimwithRegionInput_Curve_C,
		"Region_R": TrimwithRegionInput_Region_R,
		"Plane_P": TrimwithRegionInput_Plane_P,
	}

	public output:
	{
		"Inside_Ci": TrimwithRegionOutput_Inside_Ci,
		"Outside_Co": TrimwithRegionOutput_Outside_Co,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new TrimwithRegionInput_Curve_C(),
			"Region_R": new TrimwithRegionInput_Region_R(),
			"Plane_P": new TrimwithRegionInput_Plane_P(),
		}
		this.output = {
			"Inside_Ci": new TrimwithRegionOutput_Inside_Ci(),
			"Outside_Co": new TrimwithRegionOutput_Outside_Co(),
		}
	}

}

class TrimwithRegionInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TrimwithRegionInput_Region_R extends ResthopperParameter {

	public name: string = "Region";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TrimwithRegionInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = true;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TrimwithRegionOutput_Inside_Ci extends ResthopperParameter {

	public name: string = "Inside";
	public nickName: string = "Ci";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TrimwithRegionOutput_Outside_Co extends ResthopperParameter {

	public name: string = "Outside";
	public nickName: string = "Co";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
