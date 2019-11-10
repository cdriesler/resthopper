import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SurfaceCurvature extends ResthopperComponent {

	public guid: string = "4139f3a3-cf93-4fc0-b5e0-18a3acd0b003";
	public name: string = "SurfaceCurvature";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Evaluate the surface curvature at a {uv} coordinate.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Surface_S": SurfaceCurvatureInput_Surface_S,
		"Point_uv": SurfaceCurvatureInput_Point_uv,
	}

	public output:
	{
		"Frame_F": SurfaceCurvatureOutput_Frame_F,
		"Gaussian_G": SurfaceCurvatureOutput_Gaussian_G,
		"Mean_M": SurfaceCurvatureOutput_Mean_M,
	}

	constructor() {
		super();
		this.input = {
			"Surface_S": new SurfaceCurvatureInput_Surface_S(),
			"Point_uv": new SurfaceCurvatureInput_Point_uv(),
		}
		this.output = {
			"Frame_F": new SurfaceCurvatureOutput_Frame_F(),
			"Gaussian_G": new SurfaceCurvatureOutput_Gaussian_G(),
			"Mean_M": new SurfaceCurvatureOutput_Mean_M(),
		}
	}

}

class SurfaceCurvatureInput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceCurvatureInput_Point_uv extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "uv";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceCurvatureOutput_Frame_F extends ResthopperParameter {

	public name: string = "Frame";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceCurvatureOutput_Gaussian_G extends ResthopperParameter {

	public name: string = "Gaussian";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceCurvatureOutput_Mean_M extends ResthopperParameter {

	public name: string = "Mean";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
