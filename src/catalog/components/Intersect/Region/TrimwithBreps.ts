import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TrimwithBreps extends ResthopperComponent {

	public guid: string = "916e7ebc-524c-47ce-8936-e50a09a7b43c";
	public name: string = "TrimwithBreps";
	public category: string = "Intersect";
	public subCategory: string = "Region";
	public description: string = "Trim a curve with multiple Breps.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Curve_C": TrimwithBrepsInput_Curve_C,
		"Brep_B": TrimwithBrepsInput_Brep_B,
	}

	public output:
	{
		"Inside_Ci": TrimwithBrepsOutput_Inside_Ci,
		"Outside_Co": TrimwithBrepsOutput_Outside_Co,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new TrimwithBrepsInput_Curve_C(),
			"Brep_B": new TrimwithBrepsInput_Brep_B(),
		}
		this.output = {
			"Inside_Ci": new TrimwithBrepsOutput_Inside_Ci(),
			"Outside_Co": new TrimwithBrepsOutput_Outside_Co(),
		}
	}

}

class TrimwithBrepsInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TrimwithBrepsInput_Brep_B extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TrimwithBrepsOutput_Inside_Ci extends ResthopperParameter {

	public name: string = "Inside";
	public nickName: string = "Ci";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TrimwithBrepsOutput_Outside_Co extends ResthopperParameter {

	public name: string = "Outside";
	public nickName: string = "Co";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
