import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RelativeItem extends ResthopperComponent {

	public guid: string = "fac0d5be-e3ff-4bbb-9742-ec9a54900d41";
	public name: string = "Relative Item";
	public nickName: string = "RelItem";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Retrieve a relative item combo from a data tree";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"tree_t": RelativeItemInput_tree_t,
		"offset_o": RelativeItemInput_offset_o,
		"wrappaths_wp": RelativeItemInput_wrappaths_wp,
		"wrapitems_wi": RelativeItemInput_wrapitems_wi,
	}

	public output:
	{
		"itema_a": RelativeItemOutput_itema_a,
		"itemb_b": RelativeItemOutput_itemb_b,
	}

	constructor() {
		super();
		this.input = {
			"tree_t": new RelativeItemInput_tree_t(),
			"offset_o": new RelativeItemInput_offset_o(),
			"wrappaths_wp": new RelativeItemInput_wrappaths_wp(),
			"wrapitems_wi": new RelativeItemInput_wrapitems_wi(),
		}
		this.output = {
			"itema_a": new RelativeItemOutput_itema_a(),
			"itemb_b": new RelativeItemOutput_itemb_b(),
		}
	}

}

class RelativeItemInput_tree_t extends ResthopperParameter {

	public name: string = "Tree";
	public nickName: string = "T";
	public description: string = "Tree to operate on"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RelativeItemInput_offset_o extends ResthopperParameter {

	public name: string = "Offset";
	public nickName: string = "O";
	public description: string = "Relative offset for item combo"
	public isOptional: boolean = false;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RelativeItemInput_wrappaths_wp extends ResthopperParameter {

	public name: string = "WrapPaths";
	public nickName: string = "Wp";
	public description: string = "Wrap paths when the shift is out of bounds"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RelativeItemInput_wrapitems_wi extends ResthopperParameter {

	public name: string = "WrapItems";
	public nickName: string = "Wi";
	public description: string = "Wrap items when the shift is out of bounds"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RelativeItemOutput_itema_a extends ResthopperParameter {

	public name: string = "ItemA";
	public nickName: string = "A";
	public description: string = "Tree item"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RelativeItemOutput_itemb_b extends ResthopperParameter {

	public name: string = "ItemB";
	public nickName: string = "B";
	public description: string = "Tree item relative to A"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
