import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class LineLine extends ResthopperComponent {

	public guid: string = "6d4b82a7-8c1d-4bec-af7b-ca321ba4beb1";
	public name: string = "LineLine";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Solve intersection events for two lines.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Line1_A": LineLineInput_Line1_A,
		"Line2_B": LineLineInput_Line2_B,
	}

	public output:
	{
		"ParamA_tA": LineLineOutput_ParamA_tA,
		"ParamB_tB": LineLineOutput_ParamB_tB,
		"PointA_pA": LineLineOutput_PointA_pA,
		"PointB_pB": LineLineOutput_PointB_pB,
	}

	constructor() {
		super();
		this.input = {
			"Line1_A": new LineLineInput_Line1_A(),
			"Line2_B": new LineLineInput_Line2_B(),
		}
		this.output = {
			"ParamA_tA": new LineLineOutput_ParamA_tA(),
			"ParamB_tB": new LineLineOutput_ParamB_tB(),
			"PointA_pA": new LineLineOutput_PointA_pA(),
			"PointB_pB": new LineLineOutput_PointB_pB(),
		}
	}

}

class LineLineInput_Line1_A extends ResthopperParameter {

	public name: string = "Line1";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineLineInput_Line2_B extends ResthopperParameter {

	public name: string = "Line2";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineLineOutput_ParamA_tA extends ResthopperParameter {

	public name: string = "ParamA";
	public nickName: string = "tA";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineLineOutput_ParamB_tB extends ResthopperParameter {

	public name: string = "ParamB";
	public nickName: string = "tB";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineLineOutput_PointA_pA extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "pA";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineLineOutput_PointB_pB extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "pB";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
