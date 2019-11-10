import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PlaneClosestPoint extends ResthopperComponent {

	public guid: string = "b075c065-efda-4c9f-9cc9-288362b1b4b9";
	public name: string = "PlaneClosestPoint";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "Find the closest point on a plane.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Point_S": PlaneClosestPointInput_Point_S,
		"Plane_P": PlaneClosestPointInput_Plane_P,
	}

	public output:
	{
		"Point_P": PlaneClosestPointOutput_Point_P,
		"UVPoint_uv": PlaneClosestPointOutput_UVPoint_uv,
		"Distance_D": PlaneClosestPointOutput_Distance_D,
	}

	constructor() {
		super();
		this.input = {
			"Point_S": new PlaneClosestPointInput_Point_S(),
			"Plane_P": new PlaneClosestPointInput_Plane_P(),
		}
		this.output = {
			"Point_P": new PlaneClosestPointOutput_Point_P(),
			"UVPoint_uv": new PlaneClosestPointOutput_UVPoint_uv(),
			"Distance_D": new PlaneClosestPointOutput_Distance_D(),
		}
	}

}

class PlaneClosestPointInput_Point_S extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneClosestPointInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneClosestPointOutput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneClosestPointOutput_UVPoint_uv extends ResthopperParameter {

	public name: string = "UVPoint";
	public nickName: string = "uv";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneClosestPointOutput_Distance_D extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
