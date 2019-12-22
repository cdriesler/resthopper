import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TextLength extends ResthopperComponent {

	public guid: string = "dca05f6f-e3d9-42e3-b3bb-eb20363fb335";
	public name: string = "Text Length";
	public nickName: string = "Len";
	public category: string = "Sets";
	public subCategory: string = "Text";
	public description: string = "Get the length (character count) of some text";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"text_t": TextLengthInput_text_t,
	}

	public output:
	{
		"length_l": TextLengthOutput_length_l,
	}

	constructor() {
		super();
		this.input = {
			"text_t": new TextLengthInput_text_t(),
		}
		this.output = {
			"length_l": new TextLengthOutput_length_l(),
		}
	}

}

class TextLengthInput_text_t extends ResthopperParameter {

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

class TextLengthOutput_length_l extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
