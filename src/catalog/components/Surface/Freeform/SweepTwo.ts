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

	public library: string = "Surface Components";

	public input:
	{
		"Rail2_R": SweepTwoInput_Rail2_R,
		"Sections_S": SweepTwoInput_Sections_S,
		"SameHeight_H": SweepTwoInput_SameHeight_H,
	}

	public output:
	{
		"Brep_S": SweepTwoOutput_Brep_S,
	}

	constructor() {
		super();
		this.input = {
			"Rail2_R": new SweepTwoInput_Rail2_R(),
			"Sections_S": new SweepTwoInput_Sections_S(),
			"SameHeight_H": new SweepTwoInput_SameHeight_H(),
		}
		this.output = {
			"Brep_S": new SweepTwoOutput_Brep_S(),
		}
	}

}

class SweepTwoInput_Rail2_R extends ResthopperParameter {

	public name: string = "Rail2";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SweepTwoInput_Sections_S extends ResthopperParameter {

	public name: string = "Sections";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SweepTwoInput_SameHeight_H extends ResthopperParameter {

	public name: string = "SameHeight";
	public nickName: string = "H";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SweepTwoOutput_Brep_S extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
