import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TrimwithBrep extends ResthopperComponent {

	public guid: string = "3eba04bc-00e8-416d-b58f-a3dc8b3e22e2";
	public name: string = "TrimwithBrep";
	public category: string = "Intersect";
	public subCategory: string = "Region";
	public description: string = "Trim a curve with a Brep.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Curve_C": TrimwithBrepInput_Curve_C,
		"Brep_B": TrimwithBrepInput_Brep_B,
	}

	public output:
	{
		"Inside_Ci": TrimwithBrepOutput_Inside_Ci,
		"Outside_Co": TrimwithBrepOutput_Outside_Co,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new TrimwithBrepInput_Curve_C(),
			"Brep_B": new TrimwithBrepInput_Brep_B(),
		}
		this.output = {
			"Inside_Ci": new TrimwithBrepOutput_Inside_Ci(),
			"Outside_Co": new TrimwithBrepOutput_Outside_Co(),
		}
	}

}

class TrimwithBrepInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TrimwithBrepInput_Brep_B extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TrimwithBrepOutput_Inside_Ci extends ResthopperParameter {

	public name: string = "Inside";
	public nickName: string = "Ci";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TrimwithBrepOutput_Outside_Co extends ResthopperParameter {

	public name: string = "Outside";
	public nickName: string = "Co";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
