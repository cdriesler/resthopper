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
		"seta_a": DisjointInput_seta_a,
		"setb_b": DisjointInput_setb_b,
	}

	public output:
	{
		"result_r": DisjointOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"seta_a": new DisjointInput_seta_a(),
			"setb_b": new DisjointInput_setb_b(),
		}
		this.output = {
			"result_r": new DisjointOutput_result_r(),
		}
	}

}

class DisjointInput_seta_a extends ResthopperParameter {

	public name: string = "SetA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DisjointInput_setb_b extends ResthopperParameter {

	public name: string = "SetB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DisjointOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
