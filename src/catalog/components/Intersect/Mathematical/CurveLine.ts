import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CurveLine extends ResthopperComponent {

	public guid: string = "0e3173b6-91c6-4845-a748-e45d4fdbc262";
	public name: string = "Curve | Line";
	public nickName: string = "CLX";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Solve intersection events for a curve and a line.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curve_c": CurveLineInput_curve_c,
		"line_l": CurveLineInput_line_l,
	}

	public output:
	{
		"points_p": CurveLineOutput_points_p,
		"params_t": CurveLineOutput_params_t,
		"count_n": CurveLineOutput_count_n,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new CurveLineInput_curve_c(),
			"line_l": new CurveLineInput_line_l(),
		}
		this.output = {
			"points_p": new CurveLineOutput_points_p(),
			"params_t": new CurveLineOutput_params_t(),
			"count_n": new CurveLineOutput_count_n(),
		}
	}

}

class CurveLineInput_curve_c extends ResthopperParameter {

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

class CurveLineInput_line_l extends ResthopperParameter {

	public name: string = "Line";
	public nickName: string = "L";
	public description: string = "Empty Line parameter"
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveLineOutput_points_p extends ResthopperParameter {

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

class CurveLineOutput_params_t extends ResthopperParameter {

	public name: string = "Params";
	public nickName: string = "t";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveLineOutput_count_n extends ResthopperParameter {

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
