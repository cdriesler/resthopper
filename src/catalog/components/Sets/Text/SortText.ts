import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SortText extends ResthopperComponent {

	public guid: string = "cec16c67-7b8b-41f7-a5a5-f675177e524b";
	public name: string = "SortText";
	public category: string = "Sets";
	public subCategory: string = "Text";
	public description: string = "Sort a collection of text fragments";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Keys_K": SortTextInput_Keys_K,
		"Values_V": SortTextInput_Values_V,
		"Culture_C": SortTextInput_Culture_C,
	}

	public output:
	{
		"Keys_K": SortTextOutput_Keys_K,
		"Values_V": SortTextOutput_Values_V,
	}

	constructor() {
		super();
		this.input = {
			"Keys_K": new SortTextInput_Keys_K(),
			"Values_V": new SortTextInput_Values_V(),
			"Culture_C": new SortTextInput_Culture_C(),
		}
		this.output = {
			"Keys_K": new SortTextOutput_Keys_K(),
			"Values_V": new SortTextOutput_Values_V(),
		}
	}

}

class SortTextInput_Keys_K extends ResthopperParameter {

	public name: string = "Keys";
	public nickName: string = "K";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SortTextInput_Values_V extends ResthopperParameter {

	public name: string = "Values";
	public nickName: string = "V";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SortTextInput_Culture_C extends ResthopperParameter {

	public name: string = "Culture";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Culture;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SortTextOutput_Keys_K extends ResthopperParameter {

	public name: string = "Keys";
	public nickName: string = "K";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SortTextOutput_Values_V extends ResthopperParameter {

	public name: string = "Values";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
