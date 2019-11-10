import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RegionUnion extends ResthopperComponent {

	public guid: string = "1222394f-0d33-4f31-9101-7281bde89fe5";
	public name: string = "RegionUnion";
	public category: string = "Intersect";
	public subCategory: string = "Shape";
	public description: string = "Union of a set of planar closed curves (regions)";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Curves_C": RegionUnionInput_Curves_C,
		"Plane_P": RegionUnionInput_Plane_P,
	}

	public output:
	{
		"Result_R": RegionUnionOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"Curves_C": new RegionUnionInput_Curves_C(),
			"Plane_P": new RegionUnionInput_Plane_P(),
		}
		this.output = {
			"Result_R": new RegionUnionOutput_Result_R(),
		}
	}

}

class RegionUnionInput_Curves_C extends ResthopperParameter {

	public name: string = "Curves";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RegionUnionInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = true;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RegionUnionOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
