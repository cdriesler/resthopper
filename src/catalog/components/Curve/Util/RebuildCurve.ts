import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RebuildCurve extends ResthopperComponent {

	public guid: string = "9333c5b3-11f9-423c-bbb5-7e5156430219";
	public name: string = "Rebuild Curve";
	public nickName: string = "ReB";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Rebuild a curve with a specific number of control-points.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curve_c": RebuildCurveInput_curve_c,
		"degree_d": RebuildCurveInput_degree_d,
		"count_n": RebuildCurveInput_count_n,
		"tangents_t": RebuildCurveInput_tangents_t,
	}

	public output:
	{
		"curve_c": RebuildCurveOutput_curve_c,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new RebuildCurveInput_curve_c(),
			"degree_d": new RebuildCurveInput_degree_d(),
			"count_n": new RebuildCurveInput_count_n(),
			"tangents_t": new RebuildCurveInput_tangents_t(),
		}
		this.output = {
			"curve_c": new RebuildCurveOutput_curve_c(),
		}
	}

}

class RebuildCurveInput_curve_c extends ResthopperParameter {

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

class RebuildCurveInput_degree_d extends ResthopperParameter {

	public name: string = "Degree";
	public nickName: string = "D";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = true;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RebuildCurveInput_count_n extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RebuildCurveInput_tangents_t extends ResthopperParameter {

	public name: string = "Tangents";
	public nickName: string = "T";
	public description: string = "Empty Boolean parameter"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RebuildCurveOutput_curve_c extends ResthopperParameter {

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
