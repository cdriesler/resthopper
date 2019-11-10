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

	public library: string = "Math Components";

	public input:
	{
		"TreeA_A": RelativeItemsInput_TreeA_A,
		"TreeB_B": RelativeItemsInput_TreeB_B,
		"Offset_O": RelativeItemsInput_Offset_O,
		"WrapPaths_Wp": RelativeItemsInput_WrapPaths_Wp,
		"WrapItems_Wi": RelativeItemsInput_WrapItems_Wi,
	}

	public output:
	{
		"ItemA_A": RelativeItemsOutput_ItemA_A,
		"ItemB_B": RelativeItemsOutput_ItemB_B,
	}

	constructor() {
		super();
		this.input = {
			"TreeA_A": new RelativeItemsInput_TreeA_A(),
			"TreeB_B": new RelativeItemsInput_TreeB_B(),
			"Offset_O": new RelativeItemsInput_Offset_O(),
			"WrapPaths_Wp": new RelativeItemsInput_WrapPaths_Wp(),
			"WrapItems_Wi": new RelativeItemsInput_WrapItems_Wi(),
		}
		this.output = {
			"ItemA_A": new RelativeItemsOutput_ItemA_A(),
			"ItemB_B": new RelativeItemsOutput_ItemB_B(),
		}
	}

}

class RelativeItemsInput_TreeA_A extends ResthopperParameter {

	public name: string = "TreeA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RelativeItemsInput_TreeB_B extends ResthopperParameter {

	public name: string = "TreeB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RelativeItemsInput_Offset_O extends ResthopperParameter {

	public name: string = "Offset";
	public nickName: string = "O";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RelativeItemsInput_WrapPaths_Wp extends ResthopperParameter {

	public name: string = "WrapPaths";
	public nickName: string = "Wp";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RelativeItemsInput_WrapItems_Wi extends ResthopperParameter {

	public name: string = "WrapItems";
	public nickName: string = "Wi";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RelativeItemsOutput_ItemA_A extends ResthopperParameter {

	public name: string = "ItemA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RelativeItemsOutput_ItemB_B extends ResthopperParameter {

	public name: string = "ItemB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
