import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PlaneRegion extends ResthopperComponent {

	public guid: string = "80e3614a-25ae-43e7-bb0a-760e68ade864";
	public name: string = "PlaneRegion";
	public nickName: string = "PlReg";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Create a bounded region from intersecting planes.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"plane_p": PlaneRegionInput_plane_p,
		"bounds_b": PlaneRegionInput_bounds_b,
	}

	public output:
	{
		"region_r": PlaneRegionOutput_region_r,
	}

	constructor() {
		super();
		this.input = {
			"plane_p": new PlaneRegionInput_plane_p(),
			"bounds_b": new PlaneRegionInput_bounds_b(),
		}
		this.output = {
			"region_r": new PlaneRegionOutput_region_r(),
		}
	}

}

class PlaneRegionInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneRegionInput_bounds_b extends ResthopperParameter {

	public name: string = "Bounds";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneRegionOutput_region_r extends ResthopperParameter {

	public name: string = "Region";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
