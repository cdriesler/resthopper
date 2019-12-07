import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class LengthParameter extends ResthopperComponent {

	public guid: string = "a1c16251-74f0-400f-9e7c-5e379d739963";
	public name: string = "LengthParameter";
	public nickName: string = "LenP";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Measure the length of a curve to and from a parameter.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curve_c": LengthParameterInput_curve_c,
		"parameter_p": LengthParameterInput_parameter_p,
	}

	public output:
	{
		"length_l": LengthParameterOutput_length_l,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new LengthParameterInput_curve_c(),
			"parameter_p": new LengthParameterInput_parameter_p(),
		}
		this.output = {
			"length_l": new LengthParameterOutput_length_l(),
		}
	}

}

class LengthParameterInput_curve_c extends ResthopperParameter {

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

class LengthParameterInput_parameter_p extends ResthopperParameter {

	public name: string = "Parameter";
	public nickName: string = "P";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LengthParameterOutput_length_l extends ResthopperParameter {

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
