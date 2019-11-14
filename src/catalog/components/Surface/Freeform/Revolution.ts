import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Revolution extends ResthopperComponent {

	public guid: string = "cdee962f-4202-456b-a1b4-f3ed9aa0dc29";
	public name: string = "Revolution";
	public nickName: string = "RevSrf";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create a surface of revolution.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"curve_p": RevolutionInput_curve_p,
		"axis_a": RevolutionInput_axis_a,
		"domain_d": RevolutionInput_domain_d,
	}

	public output:
	{
		"surface_s": RevolutionOutput_surface_s,
	}

	constructor() {
		super();
		this.input = {
			"curve_p": new RevolutionInput_curve_p(),
			"axis_a": new RevolutionInput_axis_a(),
			"domain_d": new RevolutionInput_domain_d(),
		}
		this.output = {
			"surface_s": new RevolutionOutput_surface_s(),
		}
	}

}

class RevolutionInput_curve_p extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RevolutionInput_axis_a extends ResthopperParameter {

	public name: string = "Axis";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RevolutionInput_domain_d extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Domain"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RevolutionOutput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
