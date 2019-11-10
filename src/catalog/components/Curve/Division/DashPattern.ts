import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DashPattern extends ResthopperComponent {

	public guid: string = "95866bbe-648e-4e2b-a97c-7d04679e94e0";
	public name: string = "DashPattern";
	public category: string = "Curve";
	public subCategory: string = "Division";
	public description: string = "Convert a curve to a dash pattern.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Curve_C": DashPatternInput_Curve_C,
		"Pattern_Pt": DashPatternInput_Pattern_Pt,
	}

	public output:
	{
		"Dashes_D": DashPatternOutput_Dashes_D,
		"Gaps_G": DashPatternOutput_Gaps_G,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new DashPatternInput_Curve_C(),
			"Pattern_Pt": new DashPatternInput_Pattern_Pt(),
		}
		this.output = {
			"Dashes_D": new DashPatternOutput_Dashes_D(),
			"Gaps_G": new DashPatternOutput_Gaps_G(),
		}
	}

}

class DashPatternInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DashPatternInput_Pattern_Pt extends ResthopperParameter {

	public name: string = "Pattern";
	public nickName: string = "Pt";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DashPatternOutput_Dashes_D extends ResthopperParameter {

	public name: string = "Dashes";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DashPatternOutput_Gaps_G extends ResthopperParameter {

	public name: string = "Gaps";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
