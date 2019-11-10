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

	public library: string = "Curve Components";

	public input:
	{
		"Surface_S": CurveOnSurfaceInput_Surface_S,
		"UVcoordinates_uv": CurveOnSurfaceInput_UVcoordinates_uv,
		"Closed_C": CurveOnSurfaceInput_Closed_C,
	}

	public output:
	{
		"Curve_C": CurveOnSurfaceOutput_Curve_C,
		"Length_L": CurveOnSurfaceOutput_Length_L,
		"Domain_D": CurveOnSurfaceOutput_Domain_D,
	}

	constructor() {
		super();
		this.input = {
			"Surface_S": new CurveOnSurfaceInput_Surface_S(),
			"UVcoordinates_uv": new CurveOnSurfaceInput_UVcoordinates_uv(),
			"Closed_C": new CurveOnSurfaceInput_Closed_C(),
		}
		this.output = {
			"Curve_C": new CurveOnSurfaceOutput_Curve_C(),
			"Length_L": new CurveOnSurfaceOutput_Length_L(),
			"Domain_D": new CurveOnSurfaceOutput_Domain_D(),
		}
	}

}

class CurveOnSurfaceInput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveOnSurfaceInput_UVcoordinates_uv extends ResthopperParameter {

	public name: string = "UVcoordinates";
	public nickName: string = "uv";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveOnSurfaceInput_Closed_C extends ResthopperParameter {

	public name: string = "Closed";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveOnSurfaceOutput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveOnSurfaceOutput_Length_L extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveOnSurfaceOutput_Domain_D extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
