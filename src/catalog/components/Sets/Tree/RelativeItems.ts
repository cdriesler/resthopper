import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RelativeItems extends ResthopperComponent {

	public guid: string = "2653b135-4df1-4a6b-820c-55e2ad3bc1e0";
	public name: string = "RelativeItems";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Retrieve a relative item combo from two data trees";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"treea_a": RelativeItemsInput_treea_a,
		"treeb_b": RelativeItemsInput_treeb_b,
		"offset_o": RelativeItemsInput_offset_o,
		"wrappaths_wp": RelativeItemsInput_wrappaths_wp,
		"wrapitems_wi": RelativeItemsInput_wrapitems_wi,
	}

	public output:
	{
		"itema_a": RelativeItemsOutput_itema_a,
		"itemb_b": RelativeItemsOutput_itemb_b,
	}

	constructor() {
		super();
		this.input = {
			"treea_a": new RelativeItemsInput_treea_a(),
			"treeb_b": new RelativeItemsInput_treeb_b(),
			"offset_o": new RelativeItemsInput_offset_o(),
			"wrappaths_wp": new RelativeItemsInput_wrappaths_wp(),
			"wrapitems_wi": new RelativeItemsInput_wrapitems_wi(),
		}
		this.output = {
			"itema_a": new RelativeItemsOutput_itema_a(),
			"itemb_b": new RelativeItemsOutput_itemb_b(),
		}
	}

}

class RelativeItemsInput_treea_a extends ResthopperParameter {

	public name: string = "TreeA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RelativeItemsInput_treeb_b extends ResthopperParameter {

	public name: string = "TreeB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RelativeItemsInput_offset_o extends ResthopperParameter {

	public name: string = "Offset";
	public nickName: string = "O";
	public isOptional: boolean = false;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RelativeItemsInput_wrappaths_wp extends ResthopperParameter {

	public name: string = "WrapPaths";
	public nickName: string = "Wp";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RelativeItemsInput_wrapitems_wi extends ResthopperParameter {

	public name: string = "WrapItems";
	public nickName: string = "Wi";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RelativeItemsOutput_itema_a extends ResthopperParameter {

	public name: string = "ItemA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RelativeItemsOutput_itemb_b extends ResthopperParameter {

	public name: string = "ItemB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
