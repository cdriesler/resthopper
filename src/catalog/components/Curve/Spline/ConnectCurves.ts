import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ConnectCurves extends ResthopperComponent {

	public guid: string = "d0a1b843-873d-4d1d-965c-b5423b35f327";
	public name: string = "ConnectCurves";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Connect a sequence of curves.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Curves_C": ConnectCurvesInput_Curves_C,
		"Continuity_G": ConnectCurvesInput_Continuity_G,
		"Close_L": ConnectCurvesInput_Close_L,
		"Bulge_B": ConnectCurvesInput_Bulge_B,
	}

	public output:
	{
		"Curve_C": ConnectCurvesOutput_Curve_C,
	}

	constructor() {
		super();
		this.input = {
			"Curves_C": new ConnectCurvesInput_Curves_C(),
			"Continuity_G": new ConnectCurvesInput_Continuity_G(),
			"Close_L": new ConnectCurvesInput_Close_L(),
			"Bulge_B": new ConnectCurvesInput_Bulge_B(),
		}
		this.output = {
			"Curve_C": new ConnectCurvesOutput_Curve_C(),
		}
	}

}

class ConnectCurvesInput_Curves_C extends ResthopperParameter {

	public name: string = "Curves";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConnectCurvesInput_Continuity_G extends ResthopperParameter {

	public name: string = "Continuity";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConnectCurvesInput_Close_L extends ResthopperParameter {

	public name: string = "Close";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConnectCurvesInput_Bulge_B extends ResthopperParameter {

	public name: string = "Bulge";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConnectCurvesOutput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
