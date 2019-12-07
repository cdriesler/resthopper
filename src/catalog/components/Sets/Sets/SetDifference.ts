import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SetDifference extends ResthopperComponent {

	public guid: string = "e3b1a10c-4d49-4140-b8e6-0b5732a26c31";
	public name: string = "SetDifference";
	public nickName: string = "Difference";
	public category: string = "Sets";
	public subCategory: string = "Sets";
	public description: string = "Create the difference of two sets (the collection of objects present in A but not in B).";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"seta_a": SetDifferenceInput_seta_a,
		"setb_b": SetDifferenceInput_setb_b,
	}

	public output:
	{
		"union_u": SetDifferenceOutput_union_u,
	}

	constructor() {
		super();
		this.input = {
			"seta_a": new SetDifferenceInput_seta_a(),
			"setb_b": new SetDifferenceInput_setb_b(),
		}
		this.output = {
			"union_u": new SetDifferenceOutput_union_u(),
		}
	}

}

class SetDifferenceInput_seta_a extends ResthopperParameter {

	public name: string = "SetA";
	public nickName: string = "A";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SetDifferenceInput_setb_b extends ResthopperParameter {

	public name: string = "SetB";
	public nickName: string = "B";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SetDifferenceOutput_union_u extends ResthopperParameter {

	public name: string = "Union";
	public nickName: string = "U";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
