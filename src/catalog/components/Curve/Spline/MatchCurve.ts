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
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curvea_a": MatchCurveInput_curvea_a,
		"curveb_b": MatchCurveInput_curveb_b,
		"continuity_c": MatchCurveInput_continuity_c,
	}

	public output:
	{
		"match_m": MatchCurveOutput_match_m,
	}

	constructor() {
		super();
		this.input = {
			"curvea_a": new MatchCurveInput_curvea_a(),
			"curveb_b": new MatchCurveInput_curveb_b(),
			"continuity_c": new MatchCurveInput_continuity_c(),
		}
		this.output = {
			"match_m": new MatchCurveOutput_match_m(),
		}
	}

}

class MatchCurveInput_curvea_a extends ResthopperParameter {

	public name: string = "CurveA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MatchCurveInput_curveb_b extends ResthopperParameter {

	public name: string = "CurveB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MatchCurveInput_continuity_c extends ResthopperParameter {

	public name: string = "Continuity";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MatchCurveOutput_match_m extends ResthopperParameter {

	public name: string = "Match";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
