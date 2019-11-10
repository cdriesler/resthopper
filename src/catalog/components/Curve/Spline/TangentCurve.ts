import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TangentCurve extends ResthopperComponent {

	public guid: string = "f73498c5-178b-4e09-ad61-73d172fa6e56";
	public name: string = "TangentCurve";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Create a curve through a set of points with tangents.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"vertices_v": TangentCurveInput_vertices_v,
		"tangents_t": TangentCurveInput_tangents_t,
		"blend_b": TangentCurveInput_blend_b,
		"degree_d": TangentCurveInput_degree_d,
	}

	public output:
	{
		"curve_c": TangentCurveOutput_curve_c,
		"length_l": TangentCurveOutput_length_l,
		"domain_d": TangentCurveOutput_domain_d,
	}

	constructor() {
		super();
		this.input = {
			"vertices_v": new TangentCurveInput_vertices_v(),
			"tangents_t": new TangentCurveInput_tangents_t(),
			"blend_b": new TangentCurveInput_blend_b(),
			"degree_d": new TangentCurveInput_degree_d(),
		}
		this.output = {
			"curve_c": new TangentCurveOutput_curve_c(),
			"length_l": new TangentCurveOutput_length_l(),
			"domain_d": new TangentCurveOutput_domain_d(),
		}
	}

}

class TangentCurveInput_vertices_v extends ResthopperParameter {

	public name: string = "Vertices";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TangentCurveInput_tangents_t extends ResthopperParameter {

	public name: string = "Tangents";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TangentCurveInput_blend_b extends ResthopperParameter {

	public name: string = "Blend";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TangentCurveInput_degree_d extends ResthopperParameter {

	public name: string = "Degree";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TangentCurveOutput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TangentCurveOutput_length_l extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TangentCurveOutput_domain_d extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Domain"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
