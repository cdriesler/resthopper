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
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"texta_a": TextDistanceInput_texta_a,
		"textb_b": TextDistanceInput_textb_b,
		"case_c": TextDistanceInput_case_c,
	}

	public output:
	{
		"distance_d": TextDistanceOutput_distance_d,
	}

	constructor() {
		super();
		this.input = {
			"texta_a": new TextDistanceInput_texta_a(),
			"textb_b": new TextDistanceInput_textb_b(),
			"case_c": new TextDistanceInput_case_c(),
		}
		this.output = {
			"distance_d": new TextDistanceOutput_distance_d(),
		}
	}

}

class TextDistanceInput_texta_a extends ResthopperParameter {

	public name: string = "TextA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TextDistanceInput_textb_b extends ResthopperParameter {

	public name: string = "TextB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TextDistanceInput_case_c extends ResthopperParameter {

	public name: string = "Case";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TextDistanceOutput_distance_d extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
