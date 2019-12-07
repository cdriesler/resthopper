import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Dispatch extends ResthopperComponent {

	public guid: string = "d8332545-21b2-4716-96e3-8559a9876e17";
	public name: string = "Dispatch";
	public nickName: string = "Dispatch";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Dispatch the items in a list into two target lists.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"list_l": DispatchInput_list_l,
		"dispatchpattern_p": DispatchInput_dispatchpattern_p,
	}

	public output:
	{
		"lista_a": DispatchOutput_lista_a,
		"listb_b": DispatchOutput_listb_b,
	}

	constructor() {
		super();
		this.input = {
			"list_l": new DispatchInput_list_l(),
			"dispatchpattern_p": new DispatchInput_dispatchpattern_p(),
		}
		this.output = {
			"lista_a": new DispatchOutput_lista_a(),
			"listb_b": new DispatchOutput_listb_b(),
		}
	}

}

class DispatchInput_list_l extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DispatchInput_dispatchpattern_p extends ResthopperParameter {

	public name: string = "Dispatchpattern";
	public nickName: string = "P";
	public description: string = "Empty Boolean parameter"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DispatchOutput_lista_a extends ResthopperParameter {

	public name: string = "ListA";
	public nickName: string = "A";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DispatchOutput_listb_b extends ResthopperParameter {

	public name: string = "ListB";
	public nickName: string = "B";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
