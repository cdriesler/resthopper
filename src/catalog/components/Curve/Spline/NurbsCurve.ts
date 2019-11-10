import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class NurbsCurve extends ResthopperComponent {

	public guid: string = "dde71aef-d6ed-40a6-af98-6b0673983c82";
	public name: string = "NurbsCurve";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Construct a nurbs curve from control points.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"vertices_v": NurbsCurveInput_vertices_v,
		"degree_d": NurbsCurveInput_degree_d,
		"periodic_p": NurbsCurveInput_periodic_p,
	}

	public output:
	{
		"curve_c": NurbsCurveOutput_curve_c,
		"length_l": NurbsCurveOutput_length_l,
		"domain_d": NurbsCurveOutput_domain_d,
	}

	constructor() {
		super();
		this.input = {
			"vertices_v": new NurbsCurveInput_vertices_v(),
			"degree_d": new NurbsCurveInput_degree_d(),
			"periodic_p": new NurbsCurveInput_periodic_p(),
		}
		this.output = {
			"curve_c": new NurbsCurveOutput_curve_c(),
			"length_l": new NurbsCurveOutput_length_l(),
			"domain_d": new NurbsCurveOutput_domain_d(),
		}
	}

}

class NurbsCurveInput_vertices_v extends ResthopperParameter {

	public name: string = "Vertices";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class NurbsCurveInput_degree_d extends ResthopperParameter {

	public name: string = "Degree";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class NurbsCurveInput_periodic_p extends ResthopperParameter {

	public name: string = "Periodic";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class NurbsCurveOutput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class NurbsCurveOutput_length_l extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class NurbsCurveOutput_domain_d extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Domain"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
