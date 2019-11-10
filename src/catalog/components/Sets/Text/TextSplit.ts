import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TextSplit extends ResthopperComponent {

	public guid: string = "04887d01-504c-480e-b2a2-01ea19cc5922";
	public name: string = "TextSplit";
	public category: string = "Sets";
	public subCategory: string = "Text";
	public description: string = "Split some text into fragments using separators";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Text_T": TextSplitInput_Text_T,
		"Separators_C": TextSplitInput_Separators_C,
	}

	public output:
	{
		"Result_R": TextSplitOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"Text_T": new TextSplitInput_Text_T(),
			"Separators_C": new TextSplitInput_Separators_C(),
		}
		this.output = {
			"Result_R": new TextSplitOutput_Result_R(),
		}
	}

}

class TextSplitInput_Text_T extends ResthopperParameter {

	public name: string = "Text";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TextSplitInput_Separators_C extends ResthopperParameter {

	public name: string = "Separators";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TextSplitOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
