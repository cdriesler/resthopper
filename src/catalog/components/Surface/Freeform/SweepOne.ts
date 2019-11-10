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

	public library: string = "Surface Components";

	public input:
	{
		"Rail_R": SweepOneInput_Rail_R,
		"Sections_S": SweepOneInput_Sections_S,
		"Miter_M": SweepOneInput_Miter_M,
	}

	public output:
	{
		"Brep_S": SweepOneOutput_Brep_S,
	}

	constructor() {
		super();
		this.input = {
			"Rail_R": new SweepOneInput_Rail_R(),
			"Sections_S": new SweepOneInput_Sections_S(),
			"Miter_M": new SweepOneInput_Miter_M(),
		}
		this.output = {
			"Brep_S": new SweepOneOutput_Brep_S(),
		}
	}

}

class SweepOneInput_Rail_R extends ResthopperParameter {

	public name: string = "Rail";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SweepOneInput_Sections_S extends ResthopperParameter {

	public name: string = "Sections";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SweepOneInput_Miter_M extends ResthopperParameter {

	public name: string = "Miter";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SweepOneOutput_Brep_S extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
