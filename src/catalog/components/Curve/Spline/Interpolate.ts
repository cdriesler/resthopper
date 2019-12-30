import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Interpolate extends ResthopperComponent {

	public guid: string = "2b2a4145-3dff-41d4-a8de-1ea9d29eef33";
	public name: string = "Interpolate";
	public nickName: string = "IntCrv";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Create an interpolated curve through a set of points.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"vertices_v": InterpolateInput_vertices_v,
		"degree_d": InterpolateInput_degree_d,
		"periodic_p": InterpolateInput_periodic_p,
		"knotstyle_k": InterpolateInput_knotstyle_k,
	}

	public output:
	{
		"curve_c": InterpolateOutput_curve_c,
		"length_l": InterpolateOutput_length_l,
		"domain_d": InterpolateOutput_domain_d,
	}

	constructor() {
		super();
		this.input = {
			"vertices_v": new InterpolateInput_vertices_v(),
			"degree_d": new InterpolateInput_degree_d(),
			"periodic_p": new InterpolateInput_periodic_p(),
			"knotstyle_k": new InterpolateInput_knotstyle_k(),
		}
		this.output = {
			"curve_c": new InterpolateOutput_curve_c(),
			"length_l": new InterpolateOutput_length_l(),
			"domain_d": new InterpolateOutput_domain_d(),
		}
	}

}

class InterpolateInput_vertices_v extends ResthopperParameter {

	public name: string = "Vertices";
	public nickName: string = "V";
	public description: string = "Interpolation points"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InterpolateInput_degree_d extends ResthopperParameter {

	public name: string = "Degree";
	public nickName: string = "D";
	public description: string = "Curve degree"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InterpolateInput_periodic_p extends ResthopperParameter {

	public name: string = "Periodic";
	public nickName: string = "P";
	public description: string = "Periodic curve"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InterpolateInput_knotstyle_k extends ResthopperParameter {

	public name: string = "KnotStyle";
	public nickName: string = "K";
	public description: string = "Knot spacing (0=uniform, 1=chord, 2=sqrtchord)"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InterpolateOutput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public description: string = "Resulting nurbs curve"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InterpolateOutput_length_l extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public description: string = "Curve length"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InterpolateOutput_domain_d extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "D";
	public description: string = "Curve domain"
	public isOptional: boolean = false;
	public typeName: string = "Domain"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
