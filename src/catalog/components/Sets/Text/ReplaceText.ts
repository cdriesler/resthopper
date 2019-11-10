import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ReplaceText extends ResthopperComponent {

	public guid: string = "4df8df00-3635-45bd-95e6-f9206296c110";
	public name: string = "ReplaceText";
	public category: string = "Sets";
	public subCategory: string = "Text";
	public description: string = "Replace all occurences of a specific text fragment with another";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Text_T": ReplaceTextInput_Text_T,
		"Find_F": ReplaceTextInput_Find_F,
		"Replace_R": ReplaceTextInput_Replace_R,
	}

	public output:
	{
		"Result_R": ReplaceTextOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"Text_T": new ReplaceTextInput_Text_T(),
			"Find_F": new ReplaceTextInput_Find_F(),
			"Replace_R": new ReplaceTextInput_Replace_R(),
		}
		this.output = {
			"Result_R": new ReplaceTextOutput_Result_R(),
		}
	}

}

class ReplaceTextInput_Text_T extends ResthopperParameter {

	public name: string = "Text";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ReplaceTextInput_Find_F extends ResthopperParameter {

	public name: string = "Find";
	public nickName: string = "F";
	public isOptional: boolean = true;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ReplaceTextInput_Replace_R extends ResthopperParameter {

	public name: string = "Replace";
	public nickName: string = "R";
	public isOptional: boolean = true;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ReplaceTextOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
