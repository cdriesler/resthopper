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
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"brep_b": SplitBrepMultipleInput_brep_b,
		"cutters_c": SplitBrepMultipleInput_cutters_c,
	}

	public output:
	{
		"result_r": SplitBrepMultipleOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"brep_b": new SplitBrepMultipleInput_brep_b(),
			"cutters_c": new SplitBrepMultipleInput_cutters_c(),
		}
		this.output = {
			"result_r": new SplitBrepMultipleOutput_result_r(),
		}
	}

}

class SplitBrepMultipleInput_brep_b extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitBrepMultipleInput_cutters_c extends ResthopperParameter {

	public name: string = "Cutters";
	public nickName: string = "C";
	public isOptional: boolean = true;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitBrepMultipleOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
