import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ControlPointLoft extends ResthopperComponent {

	public guid: string = "5c270622-ee80-45a4-b07a-bd8ffede92a2";
	public name: string = "ControlPointLoft";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create a loft through curve control points.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Curves_C": ControlPointLoftInput_Curves_C,
		"Degree_D": ControlPointLoftInput_Degree_D,
	}

	public output:
	{
		"Surface_S": ControlPointLoftOutput_Surface_S,
	}

	constructor() {
		super();
		this.input = {
			"Curves_C": new ControlPointLoftInput_Curves_C(),
			"Degree_D": new ControlPointLoftInput_Degree_D(),
		}
		this.output = {
			"Surface_S": new ControlPointLoftOutput_Surface_S(),
		}
	}

}

class ControlPointLoftInput_Curves_C extends ResthopperParameter {

	public name: string = "Curves";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ControlPointLoftInput_Degree_D extends ResthopperParameter {

	public name: string = "Degree";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ControlPointLoftOutput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
