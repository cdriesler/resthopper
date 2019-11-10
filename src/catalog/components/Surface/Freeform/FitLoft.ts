import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class FitLoft extends ResthopperComponent {

	public guid: string = "342aa574-1327-4bc2-8daf-203da2a45676";
	public name: string = "FitLoft";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create a loft fitted through a set of curves.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curves_c": FitLoftInput_curves_c,
		"countu_nu": FitLoftInput_countu_nu,
		"degreeu_du": FitLoftInput_degreeu_du,
		"degreev_dv": FitLoftInput_degreev_dv,
	}

	public output:
	{
		"surface_s": FitLoftOutput_surface_s,
	}

	constructor() {
		super();
		this.input = {
			"curves_c": new FitLoftInput_curves_c(),
			"countu_nu": new FitLoftInput_countu_nu(),
			"degreeu_du": new FitLoftInput_degreeu_du(),
			"degreev_dv": new FitLoftInput_degreev_dv(),
		}
		this.output = {
			"surface_s": new FitLoftOutput_surface_s(),
		}
	}

}

class FitLoftInput_curves_c extends ResthopperParameter {

	public name: string = "Curves";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FitLoftInput_countu_nu extends ResthopperParameter {

	public name: string = "CountU";
	public nickName: string = "Nu";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FitLoftInput_degreeu_du extends ResthopperParameter {

	public name: string = "DegreeU";
	public nickName: string = "Du";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FitLoftInput_degreev_dv extends ResthopperParameter {

	public name: string = "DegreeV";
	public nickName: string = "Dv";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FitLoftOutput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
