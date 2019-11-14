import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Interpolatet extends ResthopperComponent {

	public guid: string = "75eb156d-d023-42f9-a85e-2f2456b8bcce";
	public name: string = "Interpolatet";
	public nickName: string = "IntCrvt";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Create an interpolated curve through a set of points with tangents.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"vertices_v": InterpolatetInput_vertices_v,
		"tangentstart_ts": InterpolatetInput_tangentstart_ts,
		"tangentend_te": InterpolatetInput_tangentend_te,
		"knotstyle_k": InterpolatetInput_knotstyle_k,
	}

	public output:
	{
		"curve_c": InterpolatetOutput_curve_c,
		"length_l": InterpolatetOutput_length_l,
		"domain_d": InterpolatetOutput_domain_d,
	}

	constructor() {
		super();
		this.input = {
			"vertices_v": new InterpolatetInput_vertices_v(),
			"tangentstart_ts": new InterpolatetInput_tangentstart_ts(),
			"tangentend_te": new InterpolatetInput_tangentend_te(),
			"knotstyle_k": new InterpolatetInput_knotstyle_k(),
		}
		this.output = {
			"curve_c": new InterpolatetOutput_curve_c(),
			"length_l": new InterpolatetOutput_length_l(),
			"domain_d": new InterpolatetOutput_domain_d(),
		}
	}

}

class InterpolatetInput_vertices_v extends ResthopperParameter {

	public name: string = "Vertices";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InterpolatetInput_tangentstart_ts extends ResthopperParameter {

	public name: string = "TangentStart";
	public nickName: string = "Ts";
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InterpolatetInput_tangentend_te extends ResthopperParameter {

	public name: string = "TangentEnd";
	public nickName: string = "Te";
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InterpolatetInput_knotstyle_k extends ResthopperParameter {

	public name: string = "KnotStyle";
	public nickName: string = "K";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InterpolatetOutput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InterpolatetOutput_length_l extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InterpolatetOutput_domain_d extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Domain"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
