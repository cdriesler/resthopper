import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Revolution extends ResthopperComponent {

	public guid: string = "cdee962f-4202-456b-a1b4-f3ed9aa0dc29";
	public name: string = "Revolution";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create a surface of revolution.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Curve_P": RevolutionInput_Curve_P,
		"Axis_A": RevolutionInput_Axis_A,
		"Domain_D": RevolutionInput_Domain_D,
	}

	public output:
	{
		"Surface_S": RevolutionOutput_Surface_S,
	}

	constructor() {
		super();
		this.input = {
			"Curve_P": new RevolutionInput_Curve_P(),
			"Axis_A": new RevolutionInput_Axis_A(),
			"Domain_D": new RevolutionInput_Domain_D(),
		}
		this.output = {
			"Surface_S": new RevolutionOutput_Surface_S(),
		}
	}

}

class RevolutionInput_Curve_P extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RevolutionInput_Axis_A extends ResthopperParameter {

	public name: string = "Axis";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RevolutionInput_Domain_D extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RevolutionOutput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
