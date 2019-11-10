import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Characters extends ResthopperComponent {

	public guid: string = "86503240-d884-43f9-9323-efe30488a6e1";
	public name: string = "Characters";
	public category: string = "Sets";
	public subCategory: string = "Text";
	public description: string = "Break text into individual characters";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Text_T": CharactersInput_Text_T,
	}

	public output:
	{
		"Result_C": CharactersOutput_Result_C,
		"Unicode_U": CharactersOutput_Unicode_U,
	}

	constructor() {
		super();
		this.input = {
			"Text_T": new CharactersInput_Text_T(),
		}
		this.output = {
			"Result_C": new CharactersOutput_Result_C(),
			"Unicode_U": new CharactersOutput_Unicode_U(),
		}
	}

}

class CharactersInput_Text_T extends ResthopperParameter {

	public name: string = "Text";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CharactersOutput_Result_C extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CharactersOutput_Unicode_U extends ResthopperParameter {

	public name: string = "Unicode";
	public nickName: string = "U";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
