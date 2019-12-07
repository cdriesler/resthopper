import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Derivatives extends ResthopperComponent {

	public guid: string = "ab14760f-87a6-462e-b481-4a2c26a9a0d7";
	public name: string = "Derivatives";
	public nickName: string = "CDiv";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Evaluate the derivatives of a curve at a specified parameter.";
	public isObsolete: boolean = false;
	public isVariable: boolean = true;

	public library: string = "Curve Components";

	public input:
	{
		"curve_c": DerivativesInput_curve_c,
		"parameter_t": DerivativesInput_parameter_t,
	}

	public output:
	{
		"firstderivative_1": DerivativesOutput_firstderivative_1,
		"point_p": DerivativesOutput_point_p,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new DerivativesInput_curve_c(),
			"parameter_t": new DerivativesInput_parameter_t(),
		}
		this.output = {
			"firstderivative_1": new DerivativesOutput_firstderivative_1(),
			"point_p": new DerivativesOutput_point_p(),
		}
	}

}

class DerivativesInput_curve_c extends ResthopperParameter {

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

class DerivativesInput_parameter_t extends ResthopperParameter {

	public name: string = "Parameter";
	public nickName: string = "t";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DerivativesOutput_firstderivative_1 extends ResthopperParameter {

	public name: string = "Firstderivative";
	public nickName: string = "1";
	public description: string = "Empty Vector parameter"
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DerivativesOutput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
