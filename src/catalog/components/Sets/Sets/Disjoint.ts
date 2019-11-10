import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Disjoint extends ResthopperComponent {

	public guid: string = "81800098-1060-4e2b-80d4-17f835cc825f";
	public name: string = "Disjoint";
	public category: string = "Sets";
	public subCategory: string = "Sets";
	public description: string = "Test whether two sets are disjoint.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"SetA_A": DisjointInput_SetA_A,
		"SetB_B": DisjointInput_SetB_B,
	}

	public output:
	{
		"Result_R": DisjointOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"SetA_A": new DisjointInput_SetA_A(),
			"SetB_B": new DisjointInput_SetB_B(),
		}
		this.output = {
			"Result_R": new DisjointOutput_Result_R(),
		}
	}

}

class DisjointInput_SetA_A extends ResthopperParameter {

	public name: string = "SetA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DisjointInput_SetB_B extends ResthopperParameter {

	public name: string = "SetB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DisjointOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
