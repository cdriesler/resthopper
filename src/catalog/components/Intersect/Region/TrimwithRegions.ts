import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TrimwithRegions extends ResthopperComponent {

	public guid: string = "26949c81-9b50-43b7-ac49-3203deb6eec7";
	public name: string = "Trim with Regions";
	public nickName: string = "Trim";
	public category: string = "Intersect";
	public subCategory: string = "Region";
	public description: string = "Trim a curve with multiple regions.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curve_c": TrimwithRegionsInput_curve_c,
		"regions_r": TrimwithRegionsInput_regions_r,
		"plane_p": TrimwithRegionsInput_plane_p,
	}

	public output:
	{
		"inside_ci": TrimwithRegionsOutput_inside_ci,
		"outside_co": TrimwithRegionsOutput_outside_co,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new TrimwithRegionsInput_curve_c(),
			"regions_r": new TrimwithRegionsInput_regions_r(),
			"plane_p": new TrimwithRegionsInput_plane_p(),
		}
		this.output = {
			"inside_ci": new TrimwithRegionsOutput_inside_ci(),
			"outside_co": new TrimwithRegionsOutput_outside_co(),
		}
	}

}

class TrimwithRegionsInput_curve_c extends ResthopperParameter {

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

class TrimwithRegionsInput_regions_r extends ResthopperParameter {

	public name: string = "Regions";
	public nickName: string = "R";
	public description: string = "Empty Curve parameter"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TrimwithRegionsInput_plane_p extends ResthopperParameter {

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

class TrimwithRegionsOutput_inside_ci extends ResthopperParameter {

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

class TrimwithRegionsOutput_outside_co extends ResthopperParameter {

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
