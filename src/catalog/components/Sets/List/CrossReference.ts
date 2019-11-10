import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CrossReference extends ResthopperComponent {

	public guid: string = "36947590-f0cb-4807-a8f9-9c90c9b20621";
	public name: string = "CrossReference";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Cross Reference data from multiple lists";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"ListA_A": CrossReferenceInput_ListA_A,
		"ListB_B": CrossReferenceInput_ListB_B,
	}

	public output:
	{
		"ListA_A": CrossReferenceOutput_ListA_A,
		"ListB_B": CrossReferenceOutput_ListB_B,
	}

	constructor() {
		super();
		this.input = {
			"ListA_A": new CrossReferenceInput_ListA_A(),
			"ListB_B": new CrossReferenceInput_ListB_B(),
		}
		this.output = {
			"ListA_A": new CrossReferenceOutput_ListA_A(),
			"ListB_B": new CrossReferenceOutput_ListB_B(),
		}
	}

}

class CrossReferenceInput_ListA_A extends ResthopperParameter {

	public name: string = "ListA";
	public nickName: string = "A";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CrossReferenceInput_ListB_B extends ResthopperParameter {

	public name: string = "ListB";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CrossReferenceOutput_ListA_A extends ResthopperParameter {

	public name: string = "ListA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CrossReferenceOutput_ListB_B extends ResthopperParameter {

	public name: string = "ListB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
