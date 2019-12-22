import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DashPattern extends ResthopperComponent {

	public guid: string = "95866bbe-648e-4e2b-a97c-7d04679e94e0";
	public name: string = "Dash Pattern";
	public nickName: string = "Dash";
	public category: string = "Curve";
	public subCategory: string = "Division";
	public description: string = "Convert a curve to a dash pattern.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curve_c": DashPatternInput_curve_c,
		"pattern_pt": DashPatternInput_pattern_pt,
	}

	public output:
	{
		"dashes_d": DashPatternOutput_dashes_d,
		"gaps_g": DashPatternOutput_gaps_g,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new DashPatternInput_curve_c(),
			"pattern_pt": new DashPatternInput_pattern_pt(),
		}
		this.output = {
			"dashes_d": new DashPatternOutput_dashes_d(),
			"gaps_g": new DashPatternOutput_gaps_g(),
		}
	}

}

class DashPatternInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public description: string = "Empty Curve parameter"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DashPatternInput_pattern_pt extends ResthopperParameter {

	public name: string = "Pattern";
	public nickName: string = "Pt";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DashPatternOutput_dashes_d extends ResthopperParameter {

	public name: string = "Dashes";
	public nickName: string = "D";
	public description: string = "Empty Curve parameter"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DashPatternOutput_gaps_g extends ResthopperParameter {

	public name: string = "Gaps";
	public nickName: string = "G";
	public description: string = "Empty Curve parameter"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
