import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Characters extends ResthopperComponent {

	public guid: string = "86503240-d884-43f9-9323-efe30488a6e1";
	public name: string = "Characters";
	public nickName: string = "Chars";
	public category: string = "Sets";
	public subCategory: string = "Text";
	public description: string = "Break text into individual characters";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"text_t": CharactersInput_text_t,
	}

	public output:
	{
		"result_c": CharactersOutput_result_c,
		"unicode_u": CharactersOutput_unicode_u,
	}

	constructor() {
		super();
		this.input = {
			"text_t": new CharactersInput_text_t(),
		}
		this.output = {
			"result_c": new CharactersOutput_result_c(),
			"unicode_u": new CharactersOutput_unicode_u(),
		}
	}

}

class CharactersInput_text_t extends ResthopperParameter {

	public name: string = "Text";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CharactersOutput_result_c extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CharactersOutput_unicode_u extends ResthopperParameter {

	public name: string = "Unicode";
	public nickName: string = "U";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
