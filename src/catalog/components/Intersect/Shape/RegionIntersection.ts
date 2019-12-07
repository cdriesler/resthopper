import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RegionIntersection extends ResthopperComponent {

	public guid: string = "477c2e7b-c5e5-421e-b8b2-ba60cdf5398b";
	public name: string = "RegionIntersection";
	public nickName: string = "RInt";
	public category: string = "Intersect";
	public subCategory: string = "Shape";
	public description: string = "Intersection between two sets of planar closed curves (regions)";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"curvesa_a": RegionIntersectionInput_curvesa_a,
		"curvesb_b": RegionIntersectionInput_curvesb_b,
		"plane_p": RegionIntersectionInput_plane_p,
	}

	public output:
	{
		"result_r": RegionIntersectionOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"curvesa_a": new RegionIntersectionInput_curvesa_a(),
			"curvesb_b": new RegionIntersectionInput_curvesb_b(),
			"plane_p": new RegionIntersectionInput_plane_p(),
		}
		this.output = {
			"result_r": new RegionIntersectionOutput_result_r(),
		}
	}

}

class RegionIntersectionInput_curvesa_a extends ResthopperParameter {

	public name: string = "CurvesA";
	public nickName: string = "A";
	public description: string = "Empty Curve parameter"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RegionIntersectionInput_curvesb_b extends ResthopperParameter {

	public name: string = "CurvesB";
	public nickName: string = "B";
	public description: string = "Empty Curve parameter"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RegionIntersectionInput_plane_p extends ResthopperParameter {

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

class RegionIntersectionOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public description: string = "Empty Curve parameter"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
