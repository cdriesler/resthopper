import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SweepOne extends ResthopperComponent {

	public guid: string = "bb6666e7-d0f4-41ec-a257-df2371619f13";
	public name: string = "Sweep1";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create a sweep surface with one rail curve.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"rail_r": SweepOneInput_rail_r,
		"sections_s": SweepOneInput_sections_s,
		"miter_m": SweepOneInput_miter_m,
	}

	public output:
	{
		"brep_s": SweepOneOutput_brep_s,
	}

	constructor() {
		super();
		this.input = {
			"rail_r": new SweepOneInput_rail_r(),
			"sections_s": new SweepOneInput_sections_s(),
			"miter_m": new SweepOneInput_miter_m(),
		}
		this.output = {
			"brep_s": new SweepOneOutput_brep_s(),
		}
	}

}

class SweepOneInput_rail_r extends ResthopperParameter {

	public name: string = "Rail";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SweepOneInput_sections_s extends ResthopperParameter {

	public name: string = "Sections";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SweepOneInput_miter_m extends ResthopperParameter {

	public name: string = "Miter";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SweepOneOutput_brep_s extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
