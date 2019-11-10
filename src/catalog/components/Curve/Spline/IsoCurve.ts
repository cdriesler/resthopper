import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class IsoCurve extends ResthopperComponent {

	public guid: string = "d1d57181-d594-41e8-8efb-041e29f8a5ca";
	public name: string = "IsoCurve";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Construct {uv} isocurves on a surface.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Surface_S": IsoCurveInput_Surface_S,
		"UVpoint_uv": IsoCurveInput_UVpoint_uv,
	}

	public output:
	{
		"UIsocurve_U": IsoCurveOutput_UIsocurve_U,
		"VIsocurve_V": IsoCurveOutput_VIsocurve_V,
	}

	constructor() {
		super();
		this.input = {
			"Surface_S": new IsoCurveInput_Surface_S(),
			"UVpoint_uv": new IsoCurveInput_UVpoint_uv(),
		}
		this.output = {
			"UIsocurve_U": new IsoCurveOutput_UIsocurve_U(),
			"VIsocurve_V": new IsoCurveOutput_VIsocurve_V(),
		}
	}

}

class IsoCurveInput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IsoCurveInput_UVpoint_uv extends ResthopperParameter {

	public name: string = "UVpoint";
	public nickName: string = "uv";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IsoCurveOutput_UIsocurve_U extends ResthopperParameter {

	public name: string = "UIsocurve";
	public nickName: string = "U";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IsoCurveOutput_VIsocurve_V extends ResthopperParameter {

	public name: string = "VIsocurve";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
