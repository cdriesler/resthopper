import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Fillet extends ResthopperComponent {

	public guid: string = "c92cdfc8-3df8-4c4e-abc1-ede092a0aa8a";
	public name: string = "Fillet";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Fillet a curve at a parameter.";
	public isObsolete: boolean = false;

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
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FilletInput_parameter_t extends ResthopperParameter {

	public name: string = "Parameter";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FilletInput_radius_r extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FilletOutput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FilletOutput_parameter_t extends ResthopperParameter {

	public name: string = "Parameter";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
