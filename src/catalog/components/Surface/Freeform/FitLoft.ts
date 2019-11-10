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

	public library: string = "Curve Components";

	public input:
	{
		"Curves_C": FitLoftInput_Curves_C,
		"CountU_Nu": FitLoftInput_CountU_Nu,
		"DegreeU_Du": FitLoftInput_DegreeU_Du,
		"DegreeV_Dv": FitLoftInput_DegreeV_Dv,
	}

	public output:
	{
		"Surface_S": FitLoftOutput_Surface_S,
	}

	constructor() {
		super();
		this.input = {
			"Curves_C": new FitLoftInput_Curves_C(),
			"CountU_Nu": new FitLoftInput_CountU_Nu(),
			"DegreeU_Du": new FitLoftInput_DegreeU_Du(),
			"DegreeV_Dv": new FitLoftInput_DegreeV_Dv(),
		}
		this.output = {
			"Surface_S": new FitLoftOutput_Surface_S(),
		}
	}

}

class FitLoftInput_Curves_C extends ResthopperParameter {

	public name: string = "Curves";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FitLoftInput_CountU_Nu extends ResthopperParameter {

	public name: string = "CountU";
	public nickName: string = "Nu";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FitLoftInput_DegreeU_Du extends ResthopperParameter {

	public name: string = "DegreeU";
	public nickName: string = "Du";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FitLoftInput_DegreeV_Dv extends ResthopperParameter {

	public name: string = "DegreeV";
	public nickName: string = "Dv";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FitLoftOutput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
