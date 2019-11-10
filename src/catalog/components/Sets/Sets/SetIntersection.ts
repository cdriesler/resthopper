import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SetIntersection extends ResthopperComponent {

	public guid: string = "82f19c48-9e73-43a4-ae6c-3a8368099b08";
	public name: string = "SetIntersection";
	public category: string = "Sets";
	public subCategory: string = "Sets";
	public description: string = "Creates the intersection of two sets (the collection of unique objects present in both sets).";
	public isObsolete: boolean = false;
	public isVariable: boolean = true;

	public library: string = "Math Components";

	public input:
	{
		"seta_a": SetIntersectionInput_seta_a,
		"setb_b": SetIntersectionInput_setb_b,
	}

	public output:
	{
		"union_u": SetIntersectionOutput_union_u,
	}

	constructor() {
		super();
		this.input = {
			"seta_a": new SetIntersectionInput_seta_a(),
			"setb_b": new SetIntersectionInput_setb_b(),
		}
		this.output = {
			"union_u": new SetIntersectionOutput_union_u(),
		}
	}

}

class SetIntersectionInput_seta_a extends ResthopperParameter {

	public name: string = "SetA";
	public nickName: string = "A";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SetIntersectionInput_setb_b extends ResthopperParameter {

	public name: string = "SetB";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SetIntersectionOutput_union_u extends ResthopperParameter {

	public name: string = "Union";
	public nickName: string = "U";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
