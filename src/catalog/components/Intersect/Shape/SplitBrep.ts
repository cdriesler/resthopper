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
		"brep_b": SplitBrepInput_brep_b,
		"cutter_c": SplitBrepInput_cutter_c,
	}

	public output:
	{
		"result_r": SplitBrepOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"brep_b": new SplitBrepInput_brep_b(),
			"cutter_c": new SplitBrepInput_cutter_c(),
		}
		this.output = {
			"result_r": new SplitBrepOutput_result_r(),
		}
	}

}

class SplitBrepInput_brep_b extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitBrepInput_cutter_c extends ResthopperParameter {

	public name: string = "Cutter";
	public nickName: string = "C";
	public isOptional: boolean = true;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitBrepOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
