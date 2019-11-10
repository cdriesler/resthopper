import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Derivatives extends ResthopperComponent {

	public guid: string = "ab14760f-87a6-462e-b481-4a2c26a9a0d7";
	public name: string = "Derivatives";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Evaluate the derivatives of a curve at a specified parameter.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Curve_C": DerivativesInput_Curve_C,
		"Parameter_t": DerivativesInput_Parameter_t,
	}

	public output:
	{
		"Firstderivative_1": DerivativesOutput_Firstderivative_1,
		"Point_P": DerivativesOutput_Point_P,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new DerivativesInput_Curve_C(),
			"Parameter_t": new DerivativesInput_Parameter_t(),
		}
		this.output = {
			"Firstderivative_1": new DerivativesOutput_Firstderivative_1(),
			"Point_P": new DerivativesOutput_Point_P(),
		}
	}

}

class DerivativesInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DerivativesInput_Parameter_t extends ResthopperParameter {

	public name: string = "Parameter";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DerivativesOutput_Firstderivative_1 extends ResthopperParameter {

	public name: string = "Firstderivative";
	public nickName: string = "1";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DerivativesOutput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
