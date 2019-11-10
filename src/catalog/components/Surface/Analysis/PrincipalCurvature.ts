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

	public library: string = "Surface Components";

	public input:
	{
		"Surface_S": PrincipalCurvatureInput_Surface_S,
		"Point_uv": PrincipalCurvatureInput_Point_uv,
	}

	public output:
	{
		"Frame_F": PrincipalCurvatureOutput_Frame_F,
		"Max_C": PrincipalCurvatureOutput_Max_C,
		"Maxdirection_K": PrincipalCurvatureOutput_Maxdirection_K,
	}

	constructor() {
		super();
		this.input = {
			"Surface_S": new PrincipalCurvatureInput_Surface_S(),
			"Point_uv": new PrincipalCurvatureInput_Point_uv(),
		}
		this.output = {
			"Frame_F": new PrincipalCurvatureOutput_Frame_F(),
			"Max_C": new PrincipalCurvatureOutput_Max_C(),
			"Maxdirection_K": new PrincipalCurvatureOutput_Maxdirection_K(),
		}
	}

}

class PrincipalCurvatureInput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PrincipalCurvatureInput_Point_uv extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "uv";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PrincipalCurvatureOutput_Frame_F extends ResthopperParameter {

	public name: string = "Frame";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PrincipalCurvatureOutput_Max_C extends ResthopperParameter {

	public name: string = "Max";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PrincipalCurvatureOutput_Maxdirection_K extends ResthopperParameter {

	public name: string = "Maxdirection";
	public nickName: string = "K";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
