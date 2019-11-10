import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ShortestList extends ResthopperComponent {

	public guid: string = "5a13ec19-e4e9-43da-bf65-f93025fa87ca";
	public name: string = "ShortestList";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Shrink a collection of lists to the shortest length amongst them";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"lista_a": ShortestListInput_lista_a,
		"listb_b": ShortestListInput_listb_b,
	}

	public output:
	{
		"lista_a": ShortestListOutput_lista_a,
		"listb_b": ShortestListOutput_listb_b,
	}

	constructor() {
		super();
		this.input = {
			"lista_a": new ShortestListInput_lista_a(),
			"listb_b": new ShortestListInput_listb_b(),
		}
		this.output = {
			"lista_a": new ShortestListOutput_lista_a(),
			"listb_b": new ShortestListOutput_listb_b(),
		}
	}

}

class ShortestListInput_lista_a extends ResthopperParameter {

	public name: string = "ListA";
	public nickName: string = "A";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ShortestListInput_listb_b extends ResthopperParameter {

	public name: string = "ListB";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ShortestListOutput_lista_a extends ResthopperParameter {

	public name: string = "ListA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ShortestListOutput_listb_b extends ResthopperParameter {

	public name: string = "ListB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
