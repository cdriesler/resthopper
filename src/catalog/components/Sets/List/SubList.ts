import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SubList extends ResthopperComponent {

	public guid: string = "b333ff42-93bd-406b-8e17-15780719b6ec";
	public name: string = "SubList";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Extract a subset from a list.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"List_L": SubListInput_List_L,
		"Domain_D": SubListInput_Domain_D,
		"Wrap_W": SubListInput_Wrap_W,
	}

	public output:
	{
		"List_L": SubListOutput_List_L,
		"Index_I": SubListOutput_Index_I,
	}

	constructor() {
		super();
		this.input = {
			"List_L": new SubListInput_List_L(),
			"Domain_D": new SubListInput_Domain_D(),
			"Wrap_W": new SubListInput_Wrap_W(),
		}
		this.output = {
			"List_L": new SubListOutput_List_L(),
			"Index_I": new SubListOutput_Index_I(),
		}
	}

}

class SubListInput_List_L extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubListInput_Domain_D extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubListInput_Wrap_W extends ResthopperParameter {

	public name: string = "Wrap";
	public nickName: string = "W";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubListOutput_List_L extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubListOutput_Index_I extends ResthopperParameter {

	public name: string = "Index";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
