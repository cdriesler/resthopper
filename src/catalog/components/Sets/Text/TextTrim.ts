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
		"Text_T": TextTrimInput_Text_T,
		"Start_S": TextTrimInput_Start_S,
		"End_E": TextTrimInput_End_E,
	}

	public output:
	{
		"Result_R": TextTrimOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"Text_T": new TextTrimInput_Text_T(),
			"Start_S": new TextTrimInput_Start_S(),
			"End_E": new TextTrimInput_End_E(),
		}
		this.output = {
			"Result_R": new TextTrimOutput_Result_R(),
		}
	}

}

class TextTrimInput_Text_T extends ResthopperParameter {

	public name: string = "Text";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TextTrimInput_Start_S extends ResthopperParameter {

	public name: string = "Start";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TextTrimInput_End_E extends ResthopperParameter {

	public name: string = "End";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TextTrimOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
