import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CharSequence extends ResthopperComponent {

	public guid: string = "01640871-69ea-40ac-9380-4660d6d28bd2";
	public name: string = "CharSequence";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Create a sequence of textual characters.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Count_C": CharSequenceInput_Count_C,
		"CharPool_P": CharSequenceInput_CharPool_P,
		"Format_F": CharSequenceInput_Format_F,
	}

	public output:
	{
		"Sequence_S": CharSequenceOutput_Sequence_S,
	}

	constructor() {
		super();
		this.input = {
			"Count_C": new CharSequenceInput_Count_C(),
			"CharPool_P": new CharSequenceInput_CharPool_P(),
			"Format_F": new CharSequenceInput_Format_F(),
		}
		this.output = {
			"Sequence_S": new CharSequenceOutput_Sequence_S(),
		}
	}

}

class CharSequenceInput_Count_C extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CharSequenceInput_CharPool_P extends ResthopperParameter {

	public name: string = "CharPool";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CharSequenceInput_Format_F extends ResthopperParameter {

	public name: string = "Format";
	public nickName: string = "F";
	public isOptional: boolean = true;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CharSequenceOutput_Sequence_S extends ResthopperParameter {

	public name: string = "Sequence";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
