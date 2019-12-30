import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Interpolatedata extends ResthopperComponent {

	public guid: string = "e168ff6b-e5c0-48f1-b831-f6996bf3b459";
	public name: string = "Interpolate data";
	public nickName: string = "Interp";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Interpolate a collection of data.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"data_d": InterpolatedataInput_data_d,
		"parameter_t": InterpolatedataInput_parameter_t,
	}

	public output:
	{
		"value_v": InterpolatedataOutput_value_v,
	}

	constructor() {
		super();
		this.input = {
			"data_d": new InterpolatedataInput_data_d(),
			"parameter_t": new InterpolatedataInput_parameter_t(),
		}
		this.output = {
			"value_v": new InterpolatedataOutput_value_v(),
		}
	}

}

class InterpolatedataInput_data_d extends ResthopperParameter {

	public name: string = "Data";
	public nickName: string = "D";
	public description: string = "Data to interpolate (simple data types only)."
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InterpolatedataInput_parameter_t extends ResthopperParameter {

	public name: string = "Parameter";
	public nickName: string = "t";
	public description: string = "Normalised interpolation parameter."
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InterpolatedataOutput_value_v extends ResthopperParameter {

	public name: string = "Value";
	public nickName: string = "V";
	public description: string = "Interpolated value."
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
