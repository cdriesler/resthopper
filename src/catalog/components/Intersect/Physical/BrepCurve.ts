import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BrepCurve extends ResthopperComponent {

	public guid: string = "20ef81e8-df15-4a0c-acf1-993a7607cafb";
	public name: string = "BrepCurve";
	public nickName: string = "BCX";
	public category: string = "Intersect";
	public subCategory: string = "Physical";
	public description: string = "Solve intersection events for a Brep and a curve.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"brep_b": BrepCurveInput_brep_b,
		"curve_c": BrepCurveInput_curve_c,
	}

	public output:
	{
		"curves_c": BrepCurveOutput_curves_c,
		"points_p": BrepCurveOutput_points_p,
	}

	constructor() {
		super();
		this.input = {
			"brep_b": new BrepCurveInput_brep_b(),
			"curve_c": new BrepCurveInput_curve_c(),
		}
		this.output = {
			"curves_c": new BrepCurveOutput_curves_c(),
			"points_p": new BrepCurveOutput_points_p(),
		}
	}

}

class BrepCurveInput_brep_b extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public description: string = "Empty Brep parameter"
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepCurveInput_curve_c extends ResthopperParameter {

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

class BrepCurveOutput_curves_c extends ResthopperParameter {

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

class BrepCurveOutput_points_p extends ResthopperParameter {

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
