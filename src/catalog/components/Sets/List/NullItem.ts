import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class NullItem extends ResthopperComponent {

	public guid: string = "c74efd0e-7fe3-4c2d-8c9d-295c5672fb13";
	public name: string = "NullItem";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Test a data item for null or invalidity";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Item_I": NullItemInput_Item_I,
	}

	public output:
	{
		"NullFlags_N": NullItemOutput_NullFlags_N,
		"InvalidFlags_X": NullItemOutput_InvalidFlags_X,
		"Description_D": NullItemOutput_Description_D,
	}

	constructor() {
		super();
		this.input = {
			"Item_I": new NullItemInput_Item_I(),
		}
		this.output = {
			"NullFlags_N": new NullItemOutput_NullFlags_N(),
			"InvalidFlags_X": new NullItemOutput_InvalidFlags_X(),
			"Description_D": new NullItemOutput_Description_D(),
		}
	}

}

class NullItemInput_Item_I extends ResthopperParameter {

	public name: string = "Item";
	public nickName: string = "I";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class NullItemOutput_NullFlags_N extends ResthopperParameter {

	public name: string = "NullFlags";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class NullItemOutput_InvalidFlags_X extends ResthopperParameter {

	public name: string = "InvalidFlags";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class NullItemOutput_Description_D extends ResthopperParameter {

	public name: string = "Description";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
