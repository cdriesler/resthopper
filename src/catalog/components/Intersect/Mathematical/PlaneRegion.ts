import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PlaneRegion extends ResthopperComponent {

	public guid: string = "80e3614a-25ae-43e7-bb0a-760e68ade864";
	public name: string = "PlaneRegion";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Create a bounded region from intersecting planes.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Plane_P": PlaneRegionInput_Plane_P,
		"Bounds_B": PlaneRegionInput_Bounds_B,
	}

	public output:
	{
		"Region_R": PlaneRegionOutput_Region_R,
	}

	constructor() {
		super();
		this.input = {
			"Plane_P": new PlaneRegionInput_Plane_P(),
			"Bounds_B": new PlaneRegionInput_Bounds_B(),
		}
		this.output = {
			"Region_R": new PlaneRegionOutput_Region_R(),
		}
	}

}

class PlaneRegionInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneRegionInput_Bounds_B extends ResthopperParameter {

	public name: string = "Bounds";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneRegionOutput_Region_R extends ResthopperParameter {

	public name: string = "Region";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
