import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SumSurface extends ResthopperComponent {

	public guid: string = "5e33c760-adcd-4235-b1dd-05cf72eb7a38";
	public name: string = "SumSurface";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create a sum surface from two edge curves.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"CurveA_A": SumSurfaceInput_CurveA_A,
		"CurveB_B": SumSurfaceInput_CurveB_B,
	}

	public output:
	{
		"Surface_S": SumSurfaceOutput_Surface_S,
	}

	constructor() {
		super();
		this.input = {
			"CurveA_A": new SumSurfaceInput_CurveA_A(),
			"CurveB_B": new SumSurfaceInput_CurveB_B(),
		}
		this.output = {
			"Surface_S": new SumSurfaceOutput_Surface_S(),
		}
	}

}

class SumSurfaceInput_CurveA_A extends ResthopperParameter {

	public name: string = "CurveA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SumSurfaceInput_CurveB_B extends ResthopperParameter {

	public name: string = "CurveB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SumSurfaceOutput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
