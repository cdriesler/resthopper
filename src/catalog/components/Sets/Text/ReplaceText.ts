import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ReplaceText extends ResthopperComponent {

	public guid: string = "4df8df00-3635-45bd-95e6-f9206296c110";
	public name: string = "Replace Text";
	public nickName: string = "Rep";
	public category: string = "Sets";
	public subCategory: string = "Text";
	public description: string = "Replace all occurences of a specific text fragment with another";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"text_t": ReplaceTextInput_text_t,
		"find_f": ReplaceTextInput_find_f,
		"replace_r": ReplaceTextInput_replace_r,
	}

	public output:
	{
		"result_r": ReplaceTextOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"text_t": new ReplaceTextInput_text_t(),
			"find_f": new ReplaceTextInput_find_f(),
			"replace_r": new ReplaceTextInput_replace_r(),
		}
		this.output = {
			"result_r": new ReplaceTextOutput_result_r(),
		}
	}

}

class ReplaceTextInput_text_t extends ResthopperParameter {

	public name: string = "Text";
	public nickName: string = "T";
	public description: string = "Empty Text parameter"
	public isOptional: boolean = false;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ReplaceTextInput_find_f extends ResthopperParameter {

	public name: string = "Find";
	public nickName: string = "F";
	public description: string = "Empty Text parameter"
	public isOptional: boolean = true;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ReplaceTextInput_replace_r extends ResthopperParameter {

	public name: string = "Replace";
	public nickName: string = "R";
	public description: string = "Empty Text parameter"
	public isOptional: boolean = true;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ReplaceTextOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public description: string = "Empty Text parameter"
	public isOptional: boolean = false;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
