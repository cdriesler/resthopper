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
		"item_i": NullItemInput_item_i,
	}

	public output:
	{
		"nullflags_n": NullItemOutput_nullflags_n,
		"invalidflags_x": NullItemOutput_invalidflags_x,
		"description_d": NullItemOutput_description_d,
	}

	constructor() {
		super();
		this.input = {
			"item_i": new NullItemInput_item_i(),
		}
		this.output = {
			"nullflags_n": new NullItemOutput_nullflags_n(),
			"invalidflags_x": new NullItemOutput_invalidflags_x(),
			"description_d": new NullItemOutput_description_d(),
		}
	}

}

class NullItemInput_item_i extends ResthopperParameter {

	public name: string = "Item";
	public nickName: string = "I";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class NullItemOutput_nullflags_n extends ResthopperParameter {

	public name: string = "NullFlags";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class NullItemOutput_invalidflags_x extends ResthopperParameter {

	public name: string = "InvalidFlags";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class NullItemOutput_description_d extends ResthopperParameter {

	public name: string = "Description";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
