import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RelativeItem extends ResthopperComponent {

	public guid: string = "fac0d5be-e3ff-4bbb-9742-ec9a54900d41";
	public name: string = "RelativeItem";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Retrieve a relative item combo from a data tree";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Tree_T": RelativeItemInput_Tree_T,
		"Offset_O": RelativeItemInput_Offset_O,
		"WrapPaths_Wp": RelativeItemInput_WrapPaths_Wp,
		"WrapItems_Wi": RelativeItemInput_WrapItems_Wi,
	}

	public output:
	{
		"ItemA_A": RelativeItemOutput_ItemA_A,
		"ItemB_B": RelativeItemOutput_ItemB_B,
	}

	constructor() {
		super();
		this.input = {
			"Tree_T": new RelativeItemInput_Tree_T(),
			"Offset_O": new RelativeItemInput_Offset_O(),
			"WrapPaths_Wp": new RelativeItemInput_WrapPaths_Wp(),
			"WrapItems_Wi": new RelativeItemInput_WrapItems_Wi(),
		}
		this.output = {
			"ItemA_A": new RelativeItemOutput_ItemA_A(),
			"ItemB_B": new RelativeItemOutput_ItemB_B(),
		}
	}

}

class RelativeItemInput_Tree_T extends ResthopperParameter {

	public name: string = "Tree";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RelativeItemInput_Offset_O extends ResthopperParameter {

	public name: string = "Offset";
	public nickName: string = "O";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RelativeItemInput_WrapPaths_Wp extends ResthopperParameter {

	public name: string = "WrapPaths";
	public nickName: string = "Wp";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RelativeItemInput_WrapItems_Wi extends ResthopperParameter {

	public name: string = "WrapItems";
	public nickName: string = "Wi";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RelativeItemOutput_ItemA_A extends ResthopperParameter {

	public name: string = "ItemA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RelativeItemOutput_ItemB_B extends ResthopperParameter {

	public name: string = "ItemB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
