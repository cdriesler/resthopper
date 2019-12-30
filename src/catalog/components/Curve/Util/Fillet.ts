import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Fillet extends ResthopperComponent {

	public guid: string = "c92cdfc8-3df8-4c4e-abc1-ede092a0aa8a";
	public name: string = "Fillet";
	public nickName: string = "Fillet";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Fillet a curve at a parameter.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curve_c": FilletInput_curve_c,
		"parameter_t": FilletInput_parameter_t,
		"radius_r": FilletInput_radius_r,
	}

	public output:
	{
		"curve_c": FilletOutput_curve_c,
		"parameter_t": FilletOutput_parameter_t,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new FilletInput_curve_c(),
			"parameter_t": new FilletInput_parameter_t(),
			"radius_r": new FilletInput_radius_r(),
		}
		this.output = {
			"curve_c": new FilletOutput_curve_c(),
			"parameter_t": new FilletOutput_parameter_t(),
		}
	}

}

class FilletInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public description: string = "Curve to fillet"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FilletInput_parameter_t extends ResthopperParameter {

	public name: string = "Parameter";
	public nickName: string = "t";
	public description: string = "Curve parameter for fillet"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FilletInput_radius_r extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public description: string = "Radius of fillet"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FilletOutput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public description: string = "Filleted curve"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FilletOutput_parameter_t extends ResthopperParameter {

	public name: string = "Parameter";
	public nickName: string = "t";
	public description: string = "Parameter where the fillet eventually occured"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
