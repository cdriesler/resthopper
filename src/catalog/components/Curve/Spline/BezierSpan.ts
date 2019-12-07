import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BezierSpan extends ResthopperComponent {

	public guid: string = "30ce59ce-22a1-49ee-9e21-e6d16b3684a8";
	public name: string = "BezierSpan";
	public nickName: string = "BzSpan";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Construct a bezier span from endpoints and tangents.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"startpoint_a": BezierSpanInput_startpoint_a,
		"starttangent_at": BezierSpanInput_starttangent_at,
		"endpoint_b": BezierSpanInput_endpoint_b,
		"endtangent_bt": BezierSpanInput_endtangent_bt,
	}

	public output:
	{
		"curve_c": BezierSpanOutput_curve_c,
		"length_l": BezierSpanOutput_length_l,
		"domain_d": BezierSpanOutput_domain_d,
	}

	constructor() {
		super();
		this.input = {
			"startpoint_a": new BezierSpanInput_startpoint_a(),
			"starttangent_at": new BezierSpanInput_starttangent_at(),
			"endpoint_b": new BezierSpanInput_endpoint_b(),
			"endtangent_bt": new BezierSpanInput_endtangent_bt(),
		}
		this.output = {
			"curve_c": new BezierSpanOutput_curve_c(),
			"length_l": new BezierSpanOutput_length_l(),
			"domain_d": new BezierSpanOutput_domain_d(),
		}
	}

}

class BezierSpanInput_startpoint_a extends ResthopperParameter {

	public name: string = "Startpoint";
	public nickName: string = "A";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BezierSpanInput_starttangent_at extends ResthopperParameter {

	public name: string = "Starttangent";
	public nickName: string = "At";
	public description: string = "Empty Vector parameter"
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BezierSpanInput_endpoint_b extends ResthopperParameter {

	public name: string = "Endpoint";
	public nickName: string = "B";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BezierSpanInput_endtangent_bt extends ResthopperParameter {

	public name: string = "Endtangent";
	public nickName: string = "Bt";
	public description: string = "Empty Vector parameter"
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BezierSpanOutput_curve_c extends ResthopperParameter {

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

class BezierSpanOutput_length_l extends ResthopperParameter {

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

class BezierSpanOutput_domain_d extends ResthopperParameter {

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
