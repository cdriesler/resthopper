import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SurfaceCurve extends ResthopperComponent {

	public guid: string = "68546dd0-aa82-471c-87e9-81cb16ac50ed";
	public name: string = "Surface | Curve";
	public nickName: string = "SCX";
	public category: string = "Intersect";
	public subCategory: string = "Physical";
	public description: string = "Solve intersection events for a surface and a curve.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"surface_s": SurfaceCurveInput_surface_s,
		"curve_c": SurfaceCurveInput_curve_c,
	}

	public output:
	{
		"curves_c": SurfaceCurveOutput_curves_c,
		"points_p": SurfaceCurveOutput_points_p,
		"uvpoints_uv": SurfaceCurveOutput_uvpoints_uv,
		"normals_n": SurfaceCurveOutput_normals_n,
		"parameters_t": SurfaceCurveOutput_parameters_t,
		"tangents_t": SurfaceCurveOutput_tangents_t,
	}

	constructor() {
		super();
		this.input = {
			"surface_s": new SurfaceCurveInput_surface_s(),
			"curve_c": new SurfaceCurveInput_curve_c(),
		}
		this.output = {
			"curves_c": new SurfaceCurveOutput_curves_c(),
			"points_p": new SurfaceCurveOutput_points_p(),
			"uvpoints_uv": new SurfaceCurveOutput_uvpoints_uv(),
			"normals_n": new SurfaceCurveOutput_normals_n(),
			"parameters_t": new SurfaceCurveOutput_parameters_t(),
			"tangents_t": new SurfaceCurveOutput_tangents_t(),
		}
	}

}

class SurfaceCurveInput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public description: string = "Empty Surface parameter"
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceCurveInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public description: string = "Empty Curve parameter"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceCurveOutput_curves_c extends ResthopperParameter {

	public name: string = "Curves";
	public nickName: string = "C";
	public description: string = "Empty Curve parameter"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceCurveOutput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceCurveOutput_uvpoints_uv extends ResthopperParameter {

	public name: string = "UVPoints";
	public nickName: string = "uv";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceCurveOutput_normals_n extends ResthopperParameter {

	public name: string = "Normals";
	public nickName: string = "N";
	public description: string = "Empty Vector parameter"
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceCurveOutput_parameters_t extends ResthopperParameter {

	public name: string = "Parameters";
	public nickName: string = "t";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceCurveOutput_tangents_t extends ResthopperParameter {

	public name: string = "Tangents";
	public nickName: string = "T";
	public description: string = "Empty Vector parameter"
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
