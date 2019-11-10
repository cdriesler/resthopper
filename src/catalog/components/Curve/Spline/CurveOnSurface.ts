import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CurveOnSurface extends ResthopperComponent {

	public guid: string = "ffe2dbed-9b5d-4f91-8fe3-10c8961ac2f8";
	public name: string = "CurveOnSurface";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Create an interpolated curve through a set of points on a surface.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"surface_s": CurveOnSurfaceInput_surface_s,
		"uvcoordinates_uv": CurveOnSurfaceInput_uvcoordinates_uv,
		"closed_c": CurveOnSurfaceInput_closed_c,
	}

	public output:
	{
		"curve_c": CurveOnSurfaceOutput_curve_c,
		"length_l": CurveOnSurfaceOutput_length_l,
		"domain_d": CurveOnSurfaceOutput_domain_d,
	}

	constructor() {
		super();
		this.input = {
			"surface_s": new CurveOnSurfaceInput_surface_s(),
			"uvcoordinates_uv": new CurveOnSurfaceInput_uvcoordinates_uv(),
			"closed_c": new CurveOnSurfaceInput_closed_c(),
		}
		this.output = {
			"curve_c": new CurveOnSurfaceOutput_curve_c(),
			"length_l": new CurveOnSurfaceOutput_length_l(),
			"domain_d": new CurveOnSurfaceOutput_domain_d(),
		}
	}

}

class CurveOnSurfaceInput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveOnSurfaceInput_uvcoordinates_uv extends ResthopperParameter {

	public name: string = "UVcoordinates";
	public nickName: string = "uv";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveOnSurfaceInput_closed_c extends ResthopperParameter {

	public name: string = "Closed";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveOnSurfaceOutput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveOnSurfaceOutput_length_l extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveOnSurfaceOutput_domain_d extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Domain"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
