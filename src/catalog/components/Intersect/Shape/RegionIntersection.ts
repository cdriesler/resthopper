import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RegionIntersection extends ResthopperComponent {

	public guid: string = "477c2e7b-c5e5-421e-b8b2-ba60cdf5398b";
	public name: string = "RegionIntersection";
	public category: string = "Intersect";
	public subCategory: string = "Shape";
	public description: string = "Intersection between two sets of planar closed curves (regions)";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"CurvesA_A": RegionIntersectionInput_CurvesA_A,
		"CurvesB_B": RegionIntersectionInput_CurvesB_B,
		"Plane_P": RegionIntersectionInput_Plane_P,
	}

	public output:
	{
		"Result_R": RegionIntersectionOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"CurvesA_A": new RegionIntersectionInput_CurvesA_A(),
			"CurvesB_B": new RegionIntersectionInput_CurvesB_B(),
			"Plane_P": new RegionIntersectionInput_Plane_P(),
		}
		this.output = {
			"Result_R": new RegionIntersectionOutput_Result_R(),
		}
	}

}

class RegionIntersectionInput_CurvesA_A extends ResthopperParameter {

	public name: string = "CurvesA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RegionIntersectionInput_CurvesB_B extends ResthopperParameter {

	public name: string = "CurvesB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RegionIntersectionInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = true;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RegionIntersectionOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
