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
		"text_t": MatchTextInput_text_t,
		"pattern_p": MatchTextInput_pattern_p,
		"regex_r": MatchTextInput_regex_r,
		"case_c": MatchTextInput_case_c,
	}

	public output:
	{
		"match_m": MatchTextOutput_match_m,
	}

	constructor() {
		super();
		this.input = {
			"text_t": new MatchTextInput_text_t(),
			"pattern_p": new MatchTextInput_pattern_p(),
			"regex_r": new MatchTextInput_regex_r(),
			"case_c": new MatchTextInput_case_c(),
		}
		this.output = {
			"match_m": new MatchTextOutput_match_m(),
		}
	}

}

class MatchTextInput_text_t extends ResthopperParameter {

	public name: string = "Text";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MatchTextInput_pattern_p extends ResthopperParameter {

	public name: string = "Pattern";
	public nickName: string = "P";
	public isOptional: boolean = true;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MatchTextInput_regex_r extends ResthopperParameter {

	public name: string = "RegEx";
	public nickName: string = "R";
	public isOptional: boolean = true;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MatchTextInput_case_c extends ResthopperParameter {

	public name: string = "Case";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MatchTextOutput_match_m extends ResthopperParameter {

	public name: string = "Match";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
