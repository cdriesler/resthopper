import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SweepTwo extends ResthopperComponent {

	public guid: string = "75164624-395a-4d24-b60b-6bf91cab0194";
	public name: string = "Sweep2";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create a sweep surface with two rail curves.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"rail2_r": SweepTwoInput_rail2_r,
		"sections_s": SweepTwoInput_sections_s,
		"sameheight_h": SweepTwoInput_sameheight_h,
	}

	public output:
	{
		"brep_s": SweepTwoOutput_brep_s,
	}

	constructor() {
		super();
		this.input = {
			"rail2_r": new SweepTwoInput_rail2_r(),
			"sections_s": new SweepTwoInput_sections_s(),
			"sameheight_h": new SweepTwoInput_sameheight_h(),
		}
		this.output = {
			"brep_s": new SweepTwoOutput_brep_s(),
		}
	}

}

class SweepTwoInput_rail2_r extends ResthopperParameter {

	public name: string = "Rail2";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SweepTwoInput_sections_s extends ResthopperParameter {

	public name: string = "Sections";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SweepTwoInput_sameheight_h extends ResthopperParameter {

	public name: string = "SameHeight";
	public nickName: string = "H";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SweepTwoOutput_brep_s extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
