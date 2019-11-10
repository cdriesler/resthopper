import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TextDistance extends ResthopperComponent {

	public guid: string = "f7608c4d-836c-4adf-9d1f-3b04e6a2647d";
	public name: string = "TextDistance";
	public category: string = "Sets";
	public subCategory: string = "Text";
	public description: string = "Compute the Levenshtein distance between two fragments of text.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"TextA_A": TextDistanceInput_TextA_A,
		"TextB_B": TextDistanceInput_TextB_B,
		"Case_C": TextDistanceInput_Case_C,
	}

	public output:
	{
		"Distance_D": TextDistanceOutput_Distance_D,
	}

	constructor() {
		super();
		this.input = {
			"TextA_A": new TextDistanceInput_TextA_A(),
			"TextB_B": new TextDistanceInput_TextB_B(),
			"Case_C": new TextDistanceInput_Case_C(),
		}
		this.output = {
			"Distance_D": new TextDistanceOutput_Distance_D(),
		}
	}

}

class TextDistanceInput_TextA_A extends ResthopperParameter {

	public name: string = "TextA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TextDistanceInput_TextB_B extends ResthopperParameter {

	public name: string = "TextB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TextDistanceInput_Case_C extends ResthopperParameter {

	public name: string = "Case";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TextDistanceOutput_Distance_D extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
