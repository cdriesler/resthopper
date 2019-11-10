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
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"surface_s": IsoCurveInput_surface_s,
		"uvpoint_uv": IsoCurveInput_uvpoint_uv,
	}

	public output:
	{
		"uisocurve_u": IsoCurveOutput_uisocurve_u,
		"visocurve_v": IsoCurveOutput_visocurve_v,
	}

	constructor() {
		super();
		this.input = {
			"surface_s": new IsoCurveInput_surface_s(),
			"uvpoint_uv": new IsoCurveInput_uvpoint_uv(),
		}
		this.output = {
			"uisocurve_u": new IsoCurveOutput_uisocurve_u(),
			"visocurve_v": new IsoCurveOutput_visocurve_v(),
		}
	}

}

class IsoCurveInput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IsoCurveInput_uvpoint_uv extends ResthopperParameter {

	public name: string = "UVpoint";
	public nickName: string = "uv";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IsoCurveOutput_uisocurve_u extends ResthopperParameter {

	public name: string = "UIsocurve";
	public nickName: string = "U";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IsoCurveOutput_visocurve_v extends ResthopperParameter {

	public name: string = "VIsocurve";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
