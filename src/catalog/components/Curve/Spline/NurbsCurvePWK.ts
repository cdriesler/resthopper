import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class NurbsCurvePWK extends ResthopperComponent {

	public guid: string = "1f8e1ff7-8278-4421-b39d-350e71d85d37";
	public name: string = "Nurbs Curve PWK";
	public nickName: string = "NurbCrv";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Construct a nurbs curve from control points, weights and knots.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"points_p": NurbsCurvePWKInput_points_p,
		"weights_w": NurbsCurvePWKInput_weights_w,
		"knots_k": NurbsCurvePWKInput_knots_k,
	}

	public output:
	{
		"curve_c": NurbsCurvePWKOutput_curve_c,
		"length_l": NurbsCurvePWKOutput_length_l,
		"domain_d": NurbsCurvePWKOutput_domain_d,
	}

	constructor() {
		super();
		this.input = {
			"points_p": new NurbsCurvePWKInput_points_p(),
			"weights_w": new NurbsCurvePWKInput_weights_w(),
			"knots_k": new NurbsCurvePWKInput_knots_k(),
		}
		this.output = {
			"curve_c": new NurbsCurvePWKOutput_curve_c(),
			"length_l": new NurbsCurvePWKOutput_length_l(),
			"domain_d": new NurbsCurvePWKOutput_domain_d(),
		}
	}

}

class NurbsCurvePWKInput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public description: string = "Curve control points"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class NurbsCurvePWKInput_weights_w extends ResthopperParameter {

	public name: string = "Weights";
	public nickName: string = "W";
	public description: string = "Optional control point weights"
	public isOptional: boolean = true;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class NurbsCurvePWKInput_knots_k extends ResthopperParameter {

	public name: string = "Knots";
	public nickName: string = "K";
	public description: string = "Nurbs knot vector"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class NurbsCurvePWKOutput_curve_c extends ResthopperParameter {

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

class NurbsCurvePWKOutput_length_l extends ResthopperParameter {

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

class NurbsCurvePWKOutput_domain_d extends ResthopperParameter {

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
