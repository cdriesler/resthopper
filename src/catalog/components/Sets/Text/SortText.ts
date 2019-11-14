import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SortText extends ResthopperComponent {

	public guid: string = "cec16c67-7b8b-41f7-a5a5-f675177e524b";
	public name: string = "SortText";
	public nickName: string = "TSort";
	public category: string = "Sets";
	public subCategory: string = "Text";
	public description: string = "Sort a collection of text fragments";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"keys_k": SortTextInput_keys_k,
		"values_v": SortTextInput_values_v,
		"culture_c": SortTextInput_culture_c,
	}

	public output:
	{
		"keys_k": SortTextOutput_keys_k,
		"values_v": SortTextOutput_values_v,
	}

	constructor() {
		super();
		this.input = {
			"keys_k": new SortTextInput_keys_k(),
			"values_v": new SortTextInput_values_v(),
			"culture_c": new SortTextInput_culture_c(),
		}
		this.output = {
			"keys_k": new SortTextOutput_keys_k(),
			"values_v": new SortTextOutput_values_v(),
		}
	}

}

class SortTextInput_keys_k extends ResthopperParameter {

	public name: string = "Keys";
	public nickName: string = "K";
	public isOptional: boolean = false;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SortTextInput_values_v extends ResthopperParameter {

	public name: string = "Values";
	public nickName: string = "V";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SortTextInput_culture_c extends ResthopperParameter {

	public name: string = "Culture";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Culture"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SortTextOutput_keys_k extends ResthopperParameter {

	public name: string = "Keys";
	public nickName: string = "K";
	public isOptional: boolean = false;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SortTextOutput_values_v extends ResthopperParameter {

	public name: string = "Values";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
