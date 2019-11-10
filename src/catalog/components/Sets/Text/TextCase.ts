import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TextCase extends ResthopperComponent {

	public guid: string = "b1991128-8bf1-4dea-8497-4b7188a64e9d";
	public name: string = "TextCase";
	public category: string = "Sets";
	public subCategory: string = "Text";
	public description: string = "Change the CaSiNg of a piece of text";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Text_T": TextCaseInput_Text_T,
		"Culture_C": TextCaseInput_Culture_C,
	}

	public output:
	{
		"UpperCase_U": TextCaseOutput_UpperCase_U,
		"LowerCase_L": TextCaseOutput_LowerCase_L,
	}

	constructor() {
		super();
		this.input = {
			"Text_T": new TextCaseInput_Text_T(),
			"Culture_C": new TextCaseInput_Culture_C(),
		}
		this.output = {
			"UpperCase_U": new TextCaseOutput_UpperCase_U(),
			"LowerCase_L": new TextCaseOutput_LowerCase_L(),
		}
	}

}

class TextCaseInput_Text_T extends ResthopperParameter {

	public name: string = "Text";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TextCaseInput_Culture_C extends ResthopperParameter {

	public name: string = "Culture";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Culture;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TextCaseOutput_UpperCase_U extends ResthopperParameter {

	public name: string = "UpperCase";
	public nickName: string = "U";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TextCaseOutput_LowerCase_L extends ResthopperParameter {

	public name: string = "LowerCase";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
