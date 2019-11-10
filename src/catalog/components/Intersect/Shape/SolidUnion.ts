import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SolidUnion extends ResthopperComponent {

	public guid: string = "10434a15-da85-4281-bb64-a2b3a995b9c6";
	public name: string = "SolidUnion";
	public category: string = "Intersect";
	public subCategory: string = "Shape";
	public description: string = "Perform a solid union on a set of Breps.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Breps_B": SolidUnionInput_Breps_B,
	}

	public output:
	{
		"Result_R": SolidUnionOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"Breps_B": new SolidUnionInput_Breps_B(),
		}
		this.output = {
			"Result_R": new SolidUnionOutput_Result_R(),
		}
	}

}

class SolidUnionInput_Breps_B extends ResthopperParameter {

	public name: string = "Breps";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SolidUnionOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
