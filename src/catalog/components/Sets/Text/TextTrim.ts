import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TextTrim extends ResthopperComponent {

	public guid: string = "e4cb7168-5e32-4c54-b425-5a31c6fd685a";
	public name: string = "TextTrim";
	public category: string = "Sets";
	public subCategory: string = "Text";
	public description: string = "Remove whitespace characters from the start and end of some text.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"text_t": TextTrimInput_text_t,
		"start_s": TextTrimInput_start_s,
		"end_e": TextTrimInput_end_e,
	}

	public output:
	{
		"result_r": TextTrimOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"text_t": new TextTrimInput_text_t(),
			"start_s": new TextTrimInput_start_s(),
			"end_e": new TextTrimInput_end_e(),
		}
		this.output = {
			"result_r": new TextTrimOutput_result_r(),
		}
	}

}

class TextTrimInput_text_t extends ResthopperParameter {

	public name: string = "Text";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TextTrimInput_start_s extends ResthopperParameter {

	public name: string = "Start";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TextTrimInput_end_e extends ResthopperParameter {

	public name: string = "End";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TextTrimOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
