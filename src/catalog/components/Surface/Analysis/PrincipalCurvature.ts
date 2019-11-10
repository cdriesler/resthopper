import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PrincipalCurvature extends ResthopperComponent {

	public guid: string = "404f75ac-5594-4c48-ad8a-7d0f472bbf8a";
	public name: string = "PrincipalCurvature";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Evaluate the principal curvature of a surface at a {uv} coordinate.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"surface_s": PrincipalCurvatureInput_surface_s,
		"point_uv": PrincipalCurvatureInput_point_uv,
	}

	public output:
	{
		"frame_f": PrincipalCurvatureOutput_frame_f,
		"max_c": PrincipalCurvatureOutput_max_c,
		"maxdirection_k": PrincipalCurvatureOutput_maxdirection_k,
	}

	constructor() {
		super();
		this.input = {
			"surface_s": new PrincipalCurvatureInput_surface_s(),
			"point_uv": new PrincipalCurvatureInput_point_uv(),
		}
		this.output = {
			"frame_f": new PrincipalCurvatureOutput_frame_f(),
			"max_c": new PrincipalCurvatureOutput_max_c(),
			"maxdirection_k": new PrincipalCurvatureOutput_maxdirection_k(),
		}
	}

}

class PrincipalCurvatureInput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PrincipalCurvatureInput_point_uv extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "uv";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PrincipalCurvatureOutput_frame_f extends ResthopperParameter {

	public name: string = "Frame";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PrincipalCurvatureOutput_max_c extends ResthopperParameter {

	public name: string = "Max";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PrincipalCurvatureOutput_maxdirection_k extends ResthopperParameter {

	public name: string = "Maxdirection";
	public nickName: string = "K";
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
