import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MatchCurve extends ResthopperComponent {

	public guid: string = "282bf4eb-668a-4a2c-81af-2432ac863ddd";
	public name: string = "MatchCurve";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Match two curves.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"CurveA_A": MatchCurveInput_CurveA_A,
		"CurveB_B": MatchCurveInput_CurveB_B,
		"Continuity_C": MatchCurveInput_Continuity_C,
	}

	public output:
	{
		"Match_M": MatchCurveOutput_Match_M,
	}

	constructor() {
		super();
		this.input = {
			"CurveA_A": new MatchCurveInput_CurveA_A(),
			"CurveB_B": new MatchCurveInput_CurveB_B(),
			"Continuity_C": new MatchCurveInput_Continuity_C(),
		}
		this.output = {
			"Match_M": new MatchCurveOutput_Match_M(),
		}
	}

}

class MatchCurveInput_CurveA_A extends ResthopperParameter {

	public name: string = "CurveA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MatchCurveInput_CurveB_B extends ResthopperParameter {

	public name: string = "CurveB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MatchCurveInput_Continuity_C extends ResthopperParameter {

	public name: string = "Continuity";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MatchCurveOutput_Match_M extends ResthopperParameter {

	public name: string = "Match";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
