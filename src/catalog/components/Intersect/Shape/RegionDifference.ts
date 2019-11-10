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
		"CurvesA_A": RegionDifferenceInput_CurvesA_A,
		"CurvesB_B": RegionDifferenceInput_CurvesB_B,
		"Plane_P": RegionDifferenceInput_Plane_P,
	}

	public output:
	{
		"Result_R": RegionDifferenceOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"CurvesA_A": new RegionDifferenceInput_CurvesA_A(),
			"CurvesB_B": new RegionDifferenceInput_CurvesB_B(),
			"Plane_P": new RegionDifferenceInput_Plane_P(),
		}
		this.output = {
			"Result_R": new RegionDifferenceOutput_Result_R(),
		}
	}

}

class RegionDifferenceInput_CurvesA_A extends ResthopperParameter {

	public name: string = "CurvesA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RegionDifferenceInput_CurvesB_B extends ResthopperParameter {

	public name: string = "CurvesB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RegionDifferenceInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = true;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RegionDifferenceOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
