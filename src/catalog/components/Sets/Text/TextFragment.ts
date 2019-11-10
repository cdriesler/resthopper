import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TextFragment extends ResthopperComponent {

	public guid: string = "07e0811f-034a-4504-bca0-2d03b2c46217";
	public name: string = "TextFragment";
	public category: string = "Sets";
	public subCategory: string = "Text";
	public description: string = "Extract a fragment (subset) of some text";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"text_t": TextFragmentInput_text_t,
		"start_i": TextFragmentInput_start_i,
		"count_n": TextFragmentInput_count_n,
	}

	public output:
	{
		"fragment_f": TextFragmentOutput_fragment_f,
	}

	constructor() {
		super();
		this.input = {
			"text_t": new TextFragmentInput_text_t(),
			"start_i": new TextFragmentInput_start_i(),
			"count_n": new TextFragmentInput_count_n(),
		}
		this.output = {
			"fragment_f": new TextFragmentOutput_fragment_f(),
		}
	}

}

class TextFragmentInput_text_t extends ResthopperParameter {

	public name: string = "Text";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TextFragmentInput_start_i extends ResthopperParameter {

	public name: string = "Start";
	public nickName: string = "i";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TextFragmentInput_count_n extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = true;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TextFragmentOutput_fragment_f extends ResthopperParameter {

	public name: string = "Fragment";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
