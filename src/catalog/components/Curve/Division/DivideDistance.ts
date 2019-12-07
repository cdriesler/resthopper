import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DivideDistance extends ResthopperComponent {

	public guid: string = "1e531c08-9c80-46d6-8850-1b50d1dae69f";
	public name: string = "DivideDistance";
	public nickName: string = "DivDist";
	public category: string = "Curve";
	public subCategory: string = "Division";
	public description: string = "Divide a curve with a preset distance between points";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"curve_c": DivideDistanceInput_curve_c,
		"distance_d": DivideDistanceInput_distance_d,
	}

	public output:
	{
		"points_p": DivideDistanceOutput_points_p,
		"tangents_t": DivideDistanceOutput_tangents_t,
		"parameters_t": DivideDistanceOutput_parameters_t,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new DivideDistanceInput_curve_c(),
			"distance_d": new DivideDistanceInput_distance_d(),
		}
		this.output = {
			"points_p": new DivideDistanceOutput_points_p(),
			"tangents_t": new DivideDistanceOutput_tangents_t(),
			"parameters_t": new DivideDistanceOutput_parameters_t(),
		}
	}

}

class DivideDistanceInput_curve_c extends ResthopperParameter {

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

class DivideDistanceInput_distance_d extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideDistanceOutput_points_p extends ResthopperParameter {

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

class DivideDistanceOutput_tangents_t extends ResthopperParameter {

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

class DivideDistanceOutput_parameters_t extends ResthopperParameter {

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
