import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SplitBrepMultiple extends ResthopperComponent {

	public guid: string = "03f22640-ff80-484e-bb53-a4025c5faa07";
	public name: string = "SplitBrepMultiple";
	public category: string = "Intersect";
	public subCategory: string = "Shape";
	public description: string = "Split one brep with a bunch of others.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Brep_B": SplitBrepMultipleInput_Brep_B,
		"Cutters_C": SplitBrepMultipleInput_Cutters_C,
	}

	public output:
	{
		"Result_R": SplitBrepMultipleOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"Brep_B": new SplitBrepMultipleInput_Brep_B(),
			"Cutters_C": new SplitBrepMultipleInput_Cutters_C(),
		}
		this.output = {
			"Result_R": new SplitBrepMultipleOutput_Result_R(),
		}
	}

}

class SplitBrepMultipleInput_Brep_B extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitBrepMultipleInput_Cutters_C extends ResthopperParameter {

	public name: string = "Cutters";
	public nickName: string = "C";
	public isOptional: boolean = true;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitBrepMultipleOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
