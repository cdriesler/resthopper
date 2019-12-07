import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class KinkyCurve extends ResthopperComponent {

	public guid: string = "6f0993e8-5f2f-4fc0-bd73-b84bc240e78e";
	public name: string = "KinkyCurve";
	public nickName: string = "KinkCrv";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Construct an interpolated curve through a set of points with a kink angle threshold.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"vertices_v": KinkyCurveInput_vertices_v,
		"degree_d": KinkyCurveInput_degree_d,
		"angle_a": KinkyCurveInput_angle_a,
	}

	public output:
	{
		"curve_c": KinkyCurveOutput_curve_c,
		"length_l": KinkyCurveOutput_length_l,
		"domain_d": KinkyCurveOutput_domain_d,
	}

	constructor() {
		super();
		this.input = {
			"vertices_v": new KinkyCurveInput_vertices_v(),
			"degree_d": new KinkyCurveInput_degree_d(),
			"angle_a": new KinkyCurveInput_angle_a(),
		}
		this.output = {
			"curve_c": new KinkyCurveOutput_curve_c(),
			"length_l": new KinkyCurveOutput_length_l(),
			"domain_d": new KinkyCurveOutput_domain_d(),
		}
	}

}

class KinkyCurveInput_vertices_v extends ResthopperParameter {

	public name: string = "Vertices";
	public nickName: string = "V";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class KinkyCurveInput_degree_d extends ResthopperParameter {

	public name: string = "Degree";
	public nickName: string = "D";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class KinkyCurveInput_angle_a extends ResthopperParameter {

	public name: string = "Angle";
	public nickName: string = "A";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class KinkyCurveOutput_curve_c extends ResthopperParameter {

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

class KinkyCurveOutput_length_l extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class KinkyCurveOutput_domain_d extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "D";
	public description: string = "Empty Domain parameter"
	public isOptional: boolean = false;
	public typeName: string = "Domain"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
