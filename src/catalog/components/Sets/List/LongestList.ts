import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class LongestList extends ResthopperComponent {

	public guid: string = "8440fd1b-b6e0-4bdb-aa93-4ec295c213e9";
	public name: string = "Longest List";
	public nickName: string = "Long";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Grow a collection of lists to the longest length amongst them";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"lista_a": LongestListInput_lista_a,
		"listb_b": LongestListInput_listb_b,
	}

	public output:
	{
		"lista_a": LongestListOutput_lista_a,
		"listb_b": LongestListOutput_listb_b,
	}

	constructor() {
		super();
		this.input = {
			"lista_a": new LongestListInput_lista_a(),
			"listb_b": new LongestListInput_listb_b(),
		}
		this.output = {
			"lista_a": new LongestListOutput_lista_a(),
			"listb_b": new LongestListOutput_listb_b(),
		}
	}

}

class LongestListInput_lista_a extends ResthopperParameter {

	public name: string = "ListA";
	public nickName: string = "A";
	public description: string = "List (A) to operate on"
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LongestListInput_listb_b extends ResthopperParameter {

	public name: string = "ListB";
	public nickName: string = "B";
	public description: string = "List (B) to operate on"
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LongestListOutput_lista_a extends ResthopperParameter {

	public name: string = "ListA";
	public nickName: string = "A";
	public description: string = "Adjusted list (A)"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LongestListOutput_listb_b extends ResthopperParameter {

	public name: string = "ListB";
	public nickName: string = "B";
	public description: string = "Adjusted list (B)"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
