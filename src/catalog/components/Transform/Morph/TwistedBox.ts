import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TwistedBox extends ResthopperComponent {

	public guid: string = "124de0f5-65f8-4ae0-8f61-8fb066e2ba02";
	public name: string = "TwistedBox";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Create a twisted box from corner points.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"CornerA_A": TwistedBoxInput_CornerA_A,
		"CornerB_B": TwistedBoxInput_CornerB_B,
		"CornerC_C": TwistedBoxInput_CornerC_C,
		"CornerD_D": TwistedBoxInput_CornerD_D,
		"CornerE_E": TwistedBoxInput_CornerE_E,
		"CornerF_F": TwistedBoxInput_CornerF_F,
		"CornerG_G": TwistedBoxInput_CornerG_G,
		"CornerH_H": TwistedBoxInput_CornerH_H,
	}

	public output:
	{
		"TwistedBox_B": TwistedBoxOutput_TwistedBox_B,
	}

	constructor() {
		super();
		this.input = {
			"CornerA_A": new TwistedBoxInput_CornerA_A(),
			"CornerB_B": new TwistedBoxInput_CornerB_B(),
			"CornerC_C": new TwistedBoxInput_CornerC_C(),
			"CornerD_D": new TwistedBoxInput_CornerD_D(),
			"CornerE_E": new TwistedBoxInput_CornerE_E(),
			"CornerF_F": new TwistedBoxInput_CornerF_F(),
			"CornerG_G": new TwistedBoxInput_CornerG_G(),
			"CornerH_H": new TwistedBoxInput_CornerH_H(),
		}
		this.output = {
			"TwistedBox_B": new TwistedBoxOutput_TwistedBox_B(),
		}
	}

}

class TwistedBoxInput_CornerA_A extends ResthopperParameter {

	public name: string = "CornerA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TwistedBoxInput_CornerB_B extends ResthopperParameter {

	public name: string = "CornerB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TwistedBoxInput_CornerC_C extends ResthopperParameter {

	public name: string = "CornerC";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TwistedBoxInput_CornerD_D extends ResthopperParameter {

	public name: string = "CornerD";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TwistedBoxInput_CornerE_E extends ResthopperParameter {

	public name: string = "CornerE";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TwistedBoxInput_CornerF_F extends ResthopperParameter {

	public name: string = "CornerF";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TwistedBoxInput_CornerG_G extends ResthopperParameter {

	public name: string = "CornerG";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TwistedBoxInput_CornerH_H extends ResthopperParameter {

	public name: string = "CornerH";
	public nickName: string = "H";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TwistedBoxOutput_TwistedBox_B extends ResthopperParameter {

	public name: string = "TwistedBox";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Twisted Box;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
