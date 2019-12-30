import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TextCase extends ResthopperComponent {

	public guid: string = "b1991128-8bf1-4dea-8497-4b7188a64e9d";
	public name: string = "Text Case";
	public nickName: string = "Case";
	public category: string = "Sets";
	public subCategory: string = "Text";
	public description: string = "Change the CaSiNg of a piece of text";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"text_t": TextCaseInput_text_t,
		"culture_c": TextCaseInput_culture_c,
	}

	public output:
	{
		"uppercase_u": TextCaseOutput_uppercase_u,
		"lowercase_l": TextCaseOutput_lowercase_l,
	}

	constructor() {
		super();
		this.input = {
			"text_t": new TextCaseInput_text_t(),
			"culture_c": new TextCaseInput_culture_c(),
		}
		this.output = {
			"uppercase_u": new TextCaseOutput_uppercase_u(),
			"lowercase_l": new TextCaseOutput_lowercase_l(),
		}
	}

}

class TextCaseInput_text_t extends ResthopperParameter {

	public name: string = "Text";
	public nickName: string = "T";
	public description: string = "Text to modify"
	public isOptional: boolean = false;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TextCaseInput_culture_c extends ResthopperParameter {

	public name: string = "Culture";
	public nickName: string = "C";
	public description: string = "Cultural rules for text casing"
	public isOptional: boolean = false;
	public typeName: string = "Culture"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TextCaseOutput_uppercase_u extends ResthopperParameter {

	public name: string = "UpperCase";
	public nickName: string = "U";
	public description: string = "Upper case representation of T"
	public isOptional: boolean = false;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TextCaseOutput_lowercase_l extends ResthopperParameter {

	public name: string = "LowerCase";
	public nickName: string = "L";
	public description: string = "Lower case representation of T"
	public isOptional: boolean = false;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
