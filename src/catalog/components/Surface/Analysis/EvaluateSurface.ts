import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class EvaluateSurface extends ResthopperComponent {

	public guid: string = "353b206e-bde5-4f02-a913-b3b8a977d4b9";
	public name: string = "EvaluateSurface";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Evaluate local surface properties at a {uv} coordinate.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Surface_S": EvaluateSurfaceInput_Surface_S,
		"Point_uv": EvaluateSurfaceInput_Point_uv,
	}

	public output:
	{
		"Point_P": EvaluateSurfaceOutput_Point_P,
		"Normal_N": EvaluateSurfaceOutput_Normal_N,
		"Udirection_U": EvaluateSurfaceOutput_Udirection_U,
		"Vdirection_V": EvaluateSurfaceOutput_Vdirection_V,
		"Frame_F": EvaluateSurfaceOutput_Frame_F,
	}

	constructor() {
		super();
		this.input = {
			"Surface_S": new EvaluateSurfaceInput_Surface_S(),
			"Point_uv": new EvaluateSurfaceInput_Point_uv(),
		}
		this.output = {
			"Point_P": new EvaluateSurfaceOutput_Point_P(),
			"Normal_N": new EvaluateSurfaceOutput_Normal_N(),
			"Udirection_U": new EvaluateSurfaceOutput_Udirection_U(),
			"Vdirection_V": new EvaluateSurfaceOutput_Vdirection_V(),
			"Frame_F": new EvaluateSurfaceOutput_Frame_F(),
		}
	}

}

class EvaluateSurfaceInput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateSurfaceInput_Point_uv extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "uv";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateSurfaceOutput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateSurfaceOutput_Normal_N extends ResthopperParameter {

	public name: string = "Normal";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateSurfaceOutput_Udirection_U extends ResthopperParameter {

	public name: string = "Udirection";
	public nickName: string = "U";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateSurfaceOutput_Vdirection_V extends ResthopperParameter {

	public name: string = "Vdirection";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EvaluateSurfaceOutput_Frame_F extends ResthopperParameter {

	public name: string = "Frame";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
