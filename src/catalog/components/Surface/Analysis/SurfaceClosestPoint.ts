import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SurfaceClosestPoint extends ResthopperComponent {

	public guid: string = "4a9e9a8e-0943-4438-b360-129c30f2bb0f";
	public name: string = "SurfaceClosestPoint";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Find the closest point on a surface.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Point_P": SurfaceClosestPointInput_Point_P,
		"Surface_S": SurfaceClosestPointInput_Surface_S,
	}

	public output:
	{
		"Point_P": SurfaceClosestPointOutput_Point_P,
		"UVPoint_uvP": SurfaceClosestPointOutput_UVPoint_uvP,
		"Distance_D": SurfaceClosestPointOutput_Distance_D,
	}

	constructor() {
		super();
		this.input = {
			"Point_P": new SurfaceClosestPointInput_Point_P(),
			"Surface_S": new SurfaceClosestPointInput_Surface_S(),
		}
		this.output = {
			"Point_P": new SurfaceClosestPointOutput_Point_P(),
			"UVPoint_uvP": new SurfaceClosestPointOutput_UVPoint_uvP(),
			"Distance_D": new SurfaceClosestPointOutput_Distance_D(),
		}
	}

}

class SurfaceClosestPointInput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceClosestPointInput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceClosestPointOutput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceClosestPointOutput_UVPoint_uvP extends ResthopperParameter {

	public name: string = "UVPoint";
	public nickName: string = "uvP";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceClosestPointOutput_Distance_D extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
