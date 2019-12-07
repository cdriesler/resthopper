import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TextSplit extends ResthopperComponent {

	public guid: string = "04887d01-504c-480e-b2a2-01ea19cc5922";
	public name: string = "TextSplit";
	public nickName: string = "Split";
	public category: string = "Sets";
	public subCategory: string = "Text";
	public description: string = "Split some text into fragments using separators";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"text_t": TextSplitInput_text_t,
		"separators_c": TextSplitInput_separators_c,
	}

	public output:
	{
		"result_r": TextSplitOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"text_t": new TextSplitInput_text_t(),
			"separators_c": new TextSplitInput_separators_c(),
		}
		this.output = {
			"result_r": new TextSplitOutput_result_r(),
		}
	}

}

class TextSplitInput_text_t extends ResthopperParameter {

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

class TextSplitInput_separators_c extends ResthopperParameter {

	public name: string = "Separators";
	public nickName: string = "C";
	public description: string = "Empty Text parameter"
	public isOptional: boolean = false;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TextSplitOutput_result_r extends ResthopperParameter {

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
