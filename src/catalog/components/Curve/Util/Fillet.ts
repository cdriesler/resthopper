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
		"Curve_C": FilletInput_Curve_C,
		"Parameter_t": FilletInput_Parameter_t,
		"Radius_R": FilletInput_Radius_R,
	}

	public output:
	{
		"Curve_C": FilletOutput_Curve_C,
		"Parameter_t": FilletOutput_Parameter_t,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new FilletInput_Curve_C(),
			"Parameter_t": new FilletInput_Parameter_t(),
			"Radius_R": new FilletInput_Radius_R(),
		}
		this.output = {
			"Curve_C": new FilletOutput_Curve_C(),
			"Parameter_t": new FilletOutput_Parameter_t(),
		}
	}

}

class FilletInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FilletInput_Parameter_t extends ResthopperParameter {

	public name: string = "Parameter";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FilletInput_Radius_R extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FilletOutput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FilletOutput_Parameter_t extends ResthopperParameter {

	public name: string = "Parameter";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
