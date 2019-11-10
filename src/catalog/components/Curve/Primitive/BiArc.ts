import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BiArc extends ResthopperComponent {

	public guid: string = "75f4b0fd-9721-47b1-99e7-9c098b342e67";
	public name: string = "BiArc";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create a bi-arc based on endpoints and tangents.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"startpoint_s": BiArcInput_startpoint_s,
		"starttangent_ts": BiArcInput_starttangent_ts,
		"endpoint_e": BiArcInput_endpoint_e,
		"endtangent_te": BiArcInput_endtangent_te,
		"ratio_r": BiArcInput_ratio_r,
	}

	public output:
	{
		"firstarc_a1": BiArcOutput_firstarc_a1,
		"secondarc_a2": BiArcOutput_secondarc_a2,
		"biarc_b": BiArcOutput_biarc_b,
	}

	constructor() {
		super();
		this.input = {
			"startpoint_s": new BiArcInput_startpoint_s(),
			"starttangent_ts": new BiArcInput_starttangent_ts(),
			"endpoint_e": new BiArcInput_endpoint_e(),
			"endtangent_te": new BiArcInput_endtangent_te(),
			"ratio_r": new BiArcInput_ratio_r(),
		}
		this.output = {
			"firstarc_a1": new BiArcOutput_firstarc_a1(),
			"secondarc_a2": new BiArcOutput_secondarc_a2(),
			"biarc_b": new BiArcOutput_biarc_b(),
		}
	}

}

class BiArcInput_startpoint_s extends ResthopperParameter {

	public name: string = "StartPoint";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BiArcInput_starttangent_ts extends ResthopperParameter {

	public name: string = "StartTangent";
	public nickName: string = "Ts";
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BiArcInput_endpoint_e extends ResthopperParameter {

	public name: string = "EndPoint";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BiArcInput_endtangent_te extends ResthopperParameter {

	public name: string = "EndTangent";
	public nickName: string = "Te";
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BiArcInput_ratio_r extends ResthopperParameter {

	public name: string = "Ratio";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BiArcOutput_firstarc_a1 extends ResthopperParameter {

	public name: string = "Firstarc";
	public nickName: string = "A1";
	public isOptional: boolean = false;
	public typeName: string = "Arc"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BiArcOutput_secondarc_a2 extends ResthopperParameter {

	public name: string = "Secondarc";
	public nickName: string = "A2";
	public isOptional: boolean = false;
	public typeName: string = "Arc"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BiArcOutput_biarc_b extends ResthopperParameter {

	public name: string = "BiArc";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
