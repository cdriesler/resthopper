import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SplitBrep extends ResthopperComponent {

	public guid: string = "ef6b26f4-f820-48d6-b0c5-85898ef8888b";
	public name: string = "SplitBrep";
	public category: string = "Intersect";
	public subCategory: string = "Shape";
	public description: string = "Split one brep with another.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Brep_B": SplitBrepInput_Brep_B,
		"Cutter_C": SplitBrepInput_Cutter_C,
	}

	public output:
	{
		"Result_R": SplitBrepOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"Brep_B": new SplitBrepInput_Brep_B(),
			"Cutter_C": new SplitBrepInput_Cutter_C(),
		}
		this.output = {
			"Result_R": new SplitBrepOutput_Result_R(),
		}
	}

}

class SplitBrepInput_Brep_B extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitBrepInput_Cutter_C extends ResthopperParameter {

	public name: string = "Cutter";
	public nickName: string = "C";
	public isOptional: boolean = true;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitBrepOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
