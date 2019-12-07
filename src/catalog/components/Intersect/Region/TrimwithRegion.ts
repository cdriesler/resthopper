import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TrimwithRegion extends ResthopperComponent {

	public guid: string = "3092caf0-7cf9-4885-bcc0-e635d878832a";
	public name: string = "TrimwithRegion";
	public nickName: string = "Trim";
	public category: string = "Intersect";
	public subCategory: string = "Region";
	public description: string = "Trim a curve with a region.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curve_c": TrimwithRegionInput_curve_c,
		"region_r": TrimwithRegionInput_region_r,
		"plane_p": TrimwithRegionInput_plane_p,
	}

	public output:
	{
		"inside_ci": TrimwithRegionOutput_inside_ci,
		"outside_co": TrimwithRegionOutput_outside_co,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new TrimwithRegionInput_curve_c(),
			"region_r": new TrimwithRegionInput_region_r(),
			"plane_p": new TrimwithRegionInput_plane_p(),
		}
		this.output = {
			"inside_ci": new TrimwithRegionOutput_inside_ci(),
			"outside_co": new TrimwithRegionOutput_outside_co(),
		}
	}

}

class TrimwithRegionInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public description: string = "Empty Curve parameter"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TrimwithRegionInput_region_r extends ResthopperParameter {

	public name: string = "Region";
	public nickName: string = "R";
	public description: string = "Empty Curve parameter"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TrimwithRegionInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public description: string = "Empty Plane parameter"
	public isOptional: boolean = true;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TrimwithRegionOutput_inside_ci extends ResthopperParameter {

	public name: string = "Inside";
	public nickName: string = "Ci";
	public description: string = "Empty Curve parameter"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TrimwithRegionOutput_outside_co extends ResthopperParameter {

	public name: string = "Outside";
	public nickName: string = "Co";
	public description: string = "Empty Curve parameter"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
