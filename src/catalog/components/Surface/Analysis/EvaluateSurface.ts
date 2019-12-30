import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class EvaluateSurface extends ResthopperComponent {

	public guid: string = "353b206e-bde5-4f02-a913-b3b8a977d4b9";
	public name: string = "Evaluate Surface";
	public nickName: string = "EvalSrf";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Evaluate local surface properties at a {uv} coordinate.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"surface_s": EvaluateSurfaceInput_surface_s,
		"point_uv": EvaluateSurfaceInput_point_uv,
	}

	public output:
	{
		"point_p": EvaluateSurfaceOutput_point_p,
		"normal_n": EvaluateSurfaceOutput_normal_n,
		"udirection_u": EvaluateSurfaceOutput_udirection_u,
		"vdirection_v": EvaluateSurfaceOutput_vdirection_v,
		"frame_f": EvaluateSurfaceOutput_frame_f,
	}

	constructor() {
		super();
		this.input = {
			"surface_s": new EvaluateSurfaceInput_surface_s(),
			"point_uv": new EvaluateSurfaceInput_point_uv(),
		}
		this.output = {
			"point_p": new EvaluateSurfaceOutput_point_p(),
			"normal_n": new EvaluateSurfaceOutput_normal_n(),
			"udirection_u": new EvaluateSurfaceOutput_udirection_u(),
			"vdirection_v": new EvaluateSurfaceOutput_vdirection_v(),
			"frame_f": new EvaluateSurfaceOutput_frame_f(),
		}
	}

}

class EvaluateSurfaceInput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public description: string = "Base surface"
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateSurfaceInput_point_uv extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "uv";
	public description: string = "{uv} coordinate to evaluate"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateSurfaceOutput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public description: string = "Point at {uv}"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateSurfaceOutput_normal_n extends ResthopperParameter {

	public name: string = "Normal";
	public nickName: string = "N";
	public description: string = "Normal at {uv}"
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateSurfaceOutput_udirection_u extends ResthopperParameter {

	public name: string = "Udirection";
	public nickName: string = "U";
	public description: string = "U direction at {uv}"
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateSurfaceOutput_vdirection_v extends ResthopperParameter {

	public name: string = "Vdirection";
	public nickName: string = "V";
	public description: string = "V direction at {uv}"
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateSurfaceOutput_frame_f extends ResthopperParameter {

	public name: string = "Frame";
	public nickName: string = "F";
	public description: string = "Frame at {uv}"
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
