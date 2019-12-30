import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SplitList extends ResthopperComponent {

	public guid: string = "9ab93e1a-ebdf-4090-9296-b000cff7b202";
	public name: string = "Split List";
	public nickName: string = "Split";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Split a list into separate parts.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"list_l": SplitListInput_list_l,
		"index_i": SplitListInput_index_i,
	}

	public output:
	{
		"lista_a": SplitListOutput_lista_a,
		"listb_b": SplitListOutput_listb_b,
	}

	constructor() {
		super();
		this.input = {
			"list_l": new SplitListInput_list_l(),
			"index_i": new SplitListInput_index_i(),
		}
		this.output = {
			"lista_a": new SplitListOutput_lista_a(),
			"listb_b": new SplitListOutput_listb_b(),
		}
	}

}

class SplitListInput_list_l extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public description: string = "Base list"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitListInput_index_i extends ResthopperParameter {

	public name: string = "Index";
	public nickName: string = "i";
	public description: string = "Splitting index"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitListOutput_lista_a extends ResthopperParameter {

	public name: string = "ListA";
	public nickName: string = "A";
	public description: string = "Items to the left of (i)"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitListOutput_listb_b extends ResthopperParameter {

	public name: string = "ListB";
	public nickName: string = "B";
	public description: string = "Items to the right of and including (i)"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
