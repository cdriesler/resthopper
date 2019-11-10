import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RegionDifference extends ResthopperComponent {

	public guid: string = "f72c480b-7ee6-42ef-9821-c371e9203b44";
	public name: string = "RegionDifference";
	public category: string = "Intersect";
	public subCategory: string = "Shape";
	public description: string = "Difference between two sets of planar closed curves (regions)";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"curvesa_a": RegionDifferenceInput_curvesa_a,
		"curvesb_b": RegionDifferenceInput_curvesb_b,
		"plane_p": RegionDifferenceInput_plane_p,
	}

	public output:
	{
		"result_r": RegionDifferenceOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"curvesa_a": new RegionDifferenceInput_curvesa_a(),
			"curvesb_b": new RegionDifferenceInput_curvesb_b(),
			"plane_p": new RegionDifferenceInput_plane_p(),
		}
		this.output = {
			"result_r": new RegionDifferenceOutput_result_r(),
		}
	}

}

class RegionDifferenceInput_curvesa_a extends ResthopperParameter {

	public name: string = "CurvesA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RegionDifferenceInput_curvesb_b extends ResthopperParameter {

	public name: string = "CurvesB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RegionDifferenceInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = true;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RegionDifferenceOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
