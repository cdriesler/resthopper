import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SurfaceCurvature extends ResthopperComponent {

	public guid: string = "4139f3a3-cf93-4fc0-b5e0-18a3acd0b003";
	public name: string = "SurfaceCurvature";
	public nickName: string = "Curvature";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Evaluate the surface curvature at a {uv} coordinate.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"surface_s": SurfaceCurvatureInput_surface_s,
		"point_uv": SurfaceCurvatureInput_point_uv,
	}

	public output:
	{
		"frame_f": SurfaceCurvatureOutput_frame_f,
		"gaussian_g": SurfaceCurvatureOutput_gaussian_g,
		"mean_m": SurfaceCurvatureOutput_mean_m,
	}

	constructor() {
		super();
		this.input = {
			"surface_s": new SurfaceCurvatureInput_surface_s(),
			"point_uv": new SurfaceCurvatureInput_point_uv(),
		}
		this.output = {
			"frame_f": new SurfaceCurvatureOutput_frame_f(),
			"gaussian_g": new SurfaceCurvatureOutput_gaussian_g(),
			"mean_m": new SurfaceCurvatureOutput_mean_m(),
		}
	}

}

class SurfaceCurvatureInput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceCurvatureInput_point_uv extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "uv";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceCurvatureOutput_frame_f extends ResthopperParameter {

	public name: string = "Frame";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceCurvatureOutput_gaussian_g extends ResthopperParameter {

	public name: string = "Gaussian";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceCurvatureOutput_mean_m extends ResthopperParameter {

	public name: string = "Mean";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
