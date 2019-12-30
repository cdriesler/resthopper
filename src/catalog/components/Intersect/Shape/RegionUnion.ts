import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RegionUnion extends ResthopperComponent {

	public guid: string = "1222394f-0d33-4f31-9101-7281bde89fe5";
	public name: string = "Region Union";
	public nickName: string = "RUnion";
	public category: string = "Intersect";
	public subCategory: string = "Shape";
	public description: string = "Union of a set of planar closed curves (regions)";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"curves_c": RegionUnionInput_curves_c,
		"plane_p": RegionUnionInput_plane_p,
	}

	public output:
	{
		"result_r": RegionUnionOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"curves_c": new RegionUnionInput_curves_c(),
			"plane_p": new RegionUnionInput_plane_p(),
		}
		this.output = {
			"result_r": new RegionUnionOutput_result_r(),
		}
	}

}

class RegionUnionInput_curves_c extends ResthopperParameter {

	public name: string = "Curves";
	public nickName: string = "C";
	public description: string = "Curves for boolean union operation"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RegionUnionInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public description: string = "Optional plane for boolean solution"
	public isOptional: boolean = true;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RegionUnionOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public description: string = "Result outlines of boolean union"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
