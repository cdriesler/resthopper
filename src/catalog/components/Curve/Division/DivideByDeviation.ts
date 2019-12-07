import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DivideByDeviation extends ResthopperComponent {

	public guid: string = "6e9c0577-ae4a-4b21-8880-0ec3daf3eb4d";
	public name: string = "DivideByDeviation";
	public nickName: string = "DivideDev";
	public category: string = "Curve";
	public subCategory: string = "Division";
	public description: string = "Divide a curve into segments with equal deviation";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"curve_c": DivideByDeviationInput_curve_c,
		"count_n": DivideByDeviationInput_count_n,
	}

	public output:
	{
		"points_p": DivideByDeviationOutput_points_p,
		"tangents_t": DivideByDeviationOutput_tangents_t,
		"parameters_t": DivideByDeviationOutput_parameters_t,
		"deviation_d": DivideByDeviationOutput_deviation_d,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new DivideByDeviationInput_curve_c(),
			"count_n": new DivideByDeviationInput_count_n(),
		}
		this.output = {
			"points_p": new DivideByDeviationOutput_points_p(),
			"tangents_t": new DivideByDeviationOutput_tangents_t(),
			"parameters_t": new DivideByDeviationOutput_parameters_t(),
			"deviation_d": new DivideByDeviationOutput_deviation_d(),
		}
	}

}

class DivideByDeviationInput_curve_c extends ResthopperParameter {

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

class DivideByDeviationInput_count_n extends ResthopperParameter {

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

class DivideByDeviationOutput_points_p extends ResthopperParameter {

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

class DivideByDeviationOutput_tangents_t extends ResthopperParameter {

	public name: string = "Tangents";
	public nickName: string = "T";
	public description: string = "Empty Vector parameter"
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideByDeviationOutput_parameters_t extends ResthopperParameter {

	public name: string = "Parameters";
	public nickName: string = "t";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideByDeviationOutput_deviation_d extends ResthopperParameter {

	public name: string = "Deviation";
	public nickName: string = "d";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
