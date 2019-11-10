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
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curves_c": ControlPointLoftInput_curves_c,
		"degree_d": ControlPointLoftInput_degree_d,
	}

	public output:
	{
		"surface_s": ControlPointLoftOutput_surface_s,
	}

	constructor() {
		super();
		this.input = {
			"curves_c": new ControlPointLoftInput_curves_c(),
			"degree_d": new ControlPointLoftInput_degree_d(),
		}
		this.output = {
			"surface_s": new ControlPointLoftOutput_surface_s(),
		}
	}

}

class ControlPointLoftInput_curves_c extends ResthopperParameter {

	public name: string = "Curves";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ControlPointLoftInput_degree_d extends ResthopperParameter {

	public name: string = "Degree";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ControlPointLoftOutput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
