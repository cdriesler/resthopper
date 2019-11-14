import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SurfaceFromPoints extends ResthopperComponent {

	public guid: string = "4b04a1e1-cddf-405d-a7db-335aaa940541";
	public name: string = "SurfaceFromPoints";
	public nickName: string = "SrfGrid";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create a nurbs surface from a grid of points.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"points_p": SurfaceFromPointsInput_points_p,
		"ucount_u": SurfaceFromPointsInput_ucount_u,
		"interpolate_i": SurfaceFromPointsInput_interpolate_i,
	}

	public output:
	{
		"surface_s": SurfaceFromPointsOutput_surface_s,
	}

	constructor() {
		super();
		this.input = {
			"points_p": new SurfaceFromPointsInput_points_p(),
			"ucount_u": new SurfaceFromPointsInput_ucount_u(),
			"interpolate_i": new SurfaceFromPointsInput_interpolate_i(),
		}
		this.output = {
			"surface_s": new SurfaceFromPointsOutput_surface_s(),
		}
	}

}

class SurfaceFromPointsInput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceFromPointsInput_ucount_u extends ResthopperParameter {

	public name: string = "UCount";
	public nickName: string = "U";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceFromPointsInput_interpolate_i extends ResthopperParameter {

	public name: string = "Interpolate";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceFromPointsOutput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
