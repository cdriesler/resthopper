import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SurfacePoints extends ResthopperComponent {

	public guid: string = "15128198-399d-4d6c-9586-1f65db3ce7bf";
	public name: string = "SurfacePoints";
	public nickName: string = "SrfPt";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Get the control-points of a Nurbs Surface";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"surface_s": SurfacePointsInput_surface_s,
	}

	public output:
	{
		"points_p": SurfacePointsOutput_points_p,
		"weights_w": SurfacePointsOutput_weights_w,
		"greville_g": SurfacePointsOutput_greville_g,
		"ucount_u": SurfacePointsOutput_ucount_u,
		"vcount_v": SurfacePointsOutput_vcount_v,
	}

	constructor() {
		super();
		this.input = {
			"surface_s": new SurfacePointsInput_surface_s(),
		}
		this.output = {
			"points_p": new SurfacePointsOutput_points_p(),
			"weights_w": new SurfacePointsOutput_weights_w(),
			"greville_g": new SurfacePointsOutput_greville_g(),
			"ucount_u": new SurfacePointsOutput_ucount_u(),
			"vcount_v": new SurfacePointsOutput_vcount_v(),
		}
	}

}

class SurfacePointsInput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfacePointsOutput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfacePointsOutput_weights_w extends ResthopperParameter {

	public name: string = "Weights";
	public nickName: string = "W";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfacePointsOutput_greville_g extends ResthopperParameter {

	public name: string = "Greville";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfacePointsOutput_ucount_u extends ResthopperParameter {

	public name: string = "UCount";
	public nickName: string = "U";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfacePointsOutput_vcount_v extends ResthopperParameter {

	public name: string = "VCount";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
