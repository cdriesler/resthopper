import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DivideLength extends ResthopperComponent {

	public guid: string = "fdc466a9-d3b8-4056-852a-09dba0f74aca";
	public name: string = "Divide Length";
	public nickName: string = "DivLength";
	public category: string = "Curve";
	public subCategory: string = "Division";
	public description: string = "Divide a curve into segments with a preset length";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"curve_c": DivideLengthInput_curve_c,
		"length_l": DivideLengthInput_length_l,
	}

	public output:
	{
		"points_p": DivideLengthOutput_points_p,
		"tangents_t": DivideLengthOutput_tangents_t,
		"parameters_t": DivideLengthOutput_parameters_t,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new DivideLengthInput_curve_c(),
			"length_l": new DivideLengthInput_length_l(),
		}
		this.output = {
			"points_p": new DivideLengthOutput_points_p(),
			"tangents_t": new DivideLengthOutput_tangents_t(),
			"parameters_t": new DivideLengthOutput_parameters_t(),
		}
	}

}

class DivideLengthInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public description: string = "Curve to divide"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideLengthInput_length_l extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public description: string = "Length of segments"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideLengthOutput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public description: string = "Division points"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideLengthOutput_tangents_t extends ResthopperParameter {

	public name: string = "Tangents";
	public nickName: string = "T";
	public description: string = "Tangent vectors at division points"
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideLengthOutput_parameters_t extends ResthopperParameter {

	public name: string = "Parameters";
	public nickName: string = "t";
	public description: string = "Parameter values at division points"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
