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

	public library: string = "Math Components";

	public input:
	{
		"Text_T": TextFragmentInput_Text_T,
		"Start_i": TextFragmentInput_Start_i,
		"Count_N": TextFragmentInput_Count_N,
	}

	public output:
	{
		"Fragment_F": TextFragmentOutput_Fragment_F,
	}

	constructor() {
		super();
		this.input = {
			"Text_T": new TextFragmentInput_Text_T(),
			"Start_i": new TextFragmentInput_Start_i(),
			"Count_N": new TextFragmentInput_Count_N(),
		}
		this.output = {
			"Fragment_F": new TextFragmentOutput_Fragment_F(),
		}
	}

}

class TextFragmentInput_Text_T extends ResthopperParameter {

	public name: string = "Text";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TextFragmentInput_Start_i extends ResthopperParameter {

	public name: string = "Start";
	public nickName: string = "i";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TextFragmentInput_Count_N extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = true;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TextFragmentOutput_Fragment_F extends ResthopperParameter {

	public name: string = "Fragment";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
