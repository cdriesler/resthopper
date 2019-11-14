import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DivideCurve extends ResthopperComponent {

	public guid: string = "2162e72e-72fc-4bf8-9459-d4d82fa8aa14";
	public name: string = "DivideCurve";
	public nickName: string = "Divide";
	public category: string = "Curve";
	public subCategory: string = "Division";
	public description: string = "Divide a curve into equal length segments";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"curve_c": DivideCurveInput_curve_c,
		"count_n": DivideCurveInput_count_n,
		"kinks_k": DivideCurveInput_kinks_k,
	}

	public output:
	{
		"points_p": DivideCurveOutput_points_p,
		"tangents_t": DivideCurveOutput_tangents_t,
		"parameters_t": DivideCurveOutput_parameters_t,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new DivideCurveInput_curve_c(),
			"count_n": new DivideCurveInput_count_n(),
			"kinks_k": new DivideCurveInput_kinks_k(),
		}
		this.output = {
			"points_p": new DivideCurveOutput_points_p(),
			"tangents_t": new DivideCurveOutput_tangents_t(),
			"parameters_t": new DivideCurveOutput_parameters_t(),
		}
	}

}

class DivideCurveInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideCurveInput_count_n extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideCurveInput_kinks_k extends ResthopperParameter {

	public name: string = "Kinks";
	public nickName: string = "K";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideCurveOutput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideCurveOutput_tangents_t extends ResthopperParameter {

	public name: string = "Tangents";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideCurveOutput_parameters_t extends ResthopperParameter {

	public name: string = "Parameters";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
