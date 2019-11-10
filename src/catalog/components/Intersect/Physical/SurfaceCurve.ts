import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SurfaceCurve extends ResthopperComponent {

	public guid: string = "68546dd0-aa82-471c-87e9-81cb16ac50ed";
	public name: string = "SurfaceCurve";
	public category: string = "Intersect";
	public subCategory: string = "Physical";
	public description: string = "Solve intersection events for a surface and a curve.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Surface_S": SurfaceCurveInput_Surface_S,
		"Curve_C": SurfaceCurveInput_Curve_C,
	}

	public output:
	{
		"Curves_C": SurfaceCurveOutput_Curves_C,
		"Points_P": SurfaceCurveOutput_Points_P,
		"UVPoints_uv": SurfaceCurveOutput_UVPoints_uv,
		"Normals_N": SurfaceCurveOutput_Normals_N,
		"Parameters_t": SurfaceCurveOutput_Parameters_t,
		"Tangents_T": SurfaceCurveOutput_Tangents_T,
	}

	constructor() {
		super();
		this.input = {
			"Surface_S": new SurfaceCurveInput_Surface_S(),
			"Curve_C": new SurfaceCurveInput_Curve_C(),
		}
		this.output = {
			"Curves_C": new SurfaceCurveOutput_Curves_C(),
			"Points_P": new SurfaceCurveOutput_Points_P(),
			"UVPoints_uv": new SurfaceCurveOutput_UVPoints_uv(),
			"Normals_N": new SurfaceCurveOutput_Normals_N(),
			"Parameters_t": new SurfaceCurveOutput_Parameters_t(),
			"Tangents_T": new SurfaceCurveOutput_Tangents_T(),
		}
	}

}

class SurfaceCurveInput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceCurveInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceCurveOutput_Curves_C extends ResthopperParameter {

	public name: string = "Curves";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceCurveOutput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceCurveOutput_UVPoints_uv extends ResthopperParameter {

	public name: string = "UVPoints";
	public nickName: string = "uv";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceCurveOutput_Normals_N extends ResthopperParameter {

	public name: string = "Normals";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceCurveOutput_Parameters_t extends ResthopperParameter {

	public name: string = "Parameters";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceCurveOutput_Tangents_T extends ResthopperParameter {

	public name: string = "Tangents";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
