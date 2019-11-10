import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MatchText extends ResthopperComponent {

	public guid: string = "3756c55f-95c3-442c-a027-6b3ab0455a94";
	public name: string = "MatchText";
	public category: string = "Sets";
	public subCategory: string = "Text";
	public description: string = "Match a text against a pattern";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Text_T": MatchTextInput_Text_T,
		"Pattern_P": MatchTextInput_Pattern_P,
		"RegEx_R": MatchTextInput_RegEx_R,
		"Case_C": MatchTextInput_Case_C,
	}

	public output:
	{
		"Match_M": MatchTextOutput_Match_M,
	}

	constructor() {
		super();
		this.input = {
			"Text_T": new MatchTextInput_Text_T(),
			"Pattern_P": new MatchTextInput_Pattern_P(),
			"RegEx_R": new MatchTextInput_RegEx_R(),
			"Case_C": new MatchTextInput_Case_C(),
		}
		this.output = {
			"Match_M": new MatchTextOutput_Match_M(),
		}
	}

}

class MatchTextInput_Text_T extends ResthopperParameter {

	public name: string = "Text";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MatchTextInput_Pattern_P extends ResthopperParameter {

	public name: string = "Pattern";
	public nickName: string = "P";
	public isOptional: boolean = true;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MatchTextInput_RegEx_R extends ResthopperParameter {

	public name: string = "RegEx";
	public nickName: string = "R";
	public isOptional: boolean = true;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MatchTextInput_Case_C extends ResthopperParameter {

	public name: string = "Case";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MatchTextOutput_Match_M extends ResthopperParameter {

	public name: string = "Match";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
