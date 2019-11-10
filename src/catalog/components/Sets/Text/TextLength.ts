import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TextLength extends ResthopperComponent {

	public guid: string = "dca05f6f-e3d9-42e3-b3bb-eb20363fb335";
	public name: string = "TextLength";
	public category: string = "Sets";
	public subCategory: string = "Text";
	public description: string = "Get the length (character count) of some text";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Text_T": TextLengthInput_Text_T,
	}

	public output:
	{
		"Length_L": TextLengthOutput_Length_L,
	}

	constructor() {
		super();
		this.input = {
			"Text_T": new TextLengthInput_Text_T(),
		}
		this.output = {
			"Length_L": new TextLengthOutput_Length_L(),
		}
	}

}

class TextLengthInput_Text_T extends ResthopperParameter {

	public name: string = "Text";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TextLengthOutput_Length_L extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
