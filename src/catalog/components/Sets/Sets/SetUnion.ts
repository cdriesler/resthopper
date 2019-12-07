import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SetUnion extends ResthopperComponent {

	public guid: string = "8eed5d78-7810-4ba1-968e-8a1f1db98e39";
	public name: string = "SetUnion";
	public nickName: string = "SUnion";
	public category: string = "Sets";
	public subCategory: string = "Sets";
	public description: string = "Creates the union of two sets (the collection of unique objects present in either set).";
	public isObsolete: boolean = false;
	public isVariable: boolean = true;

	public library: string = "Math Components";

	public input:
	{
		"seta_a": SetUnionInput_seta_a,
		"setb_b": SetUnionInput_setb_b,
	}

	public output:
	{
		"union_u": SetUnionOutput_union_u,
	}

	constructor() {
		super();
		this.input = {
			"seta_a": new SetUnionInput_seta_a(),
			"setb_b": new SetUnionInput_setb_b(),
		}
		this.output = {
			"union_u": new SetUnionOutput_union_u(),
		}
	}

}

class SetUnionInput_seta_a extends ResthopperParameter {

	public name: string = "SetA";
	public nickName: string = "A";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SetUnionInput_setb_b extends ResthopperParameter {

	public name: string = "SetB";
	public nickName: string = "B";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SetUnionOutput_union_u extends ResthopperParameter {

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
