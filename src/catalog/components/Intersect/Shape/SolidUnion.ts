import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SolidUnion extends ResthopperComponent {

	public guid: string = "10434a15-da85-4281-bb64-a2b3a995b9c6";
	public name: string = "Solid Union";
	public nickName: string = "SUnion";
	public category: string = "Intersect";
	public subCategory: string = "Shape";
	public description: string = "Perform a solid union on a set of Breps.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"breps_b": SolidUnionInput_breps_b,
	}

	public output:
	{
		"result_r": SolidUnionOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"breps_b": new SolidUnionInput_breps_b(),
		}
		this.output = {
			"result_r": new SolidUnionOutput_result_r(),
		}
	}

}

class SolidUnionInput_breps_b extends ResthopperParameter {

	public name: string = "Breps";
	public nickName: string = "B";
	public description: string = "Empty Brep parameter"
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SolidUnionOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public description: string = "Empty Brep parameter"
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
