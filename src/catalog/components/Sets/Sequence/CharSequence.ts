import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CharSequence extends ResthopperComponent {

	public guid: string = "01640871-69ea-40ac-9380-4660d6d28bd2";
	public name: string = "CharSequence";
	public nickName: string = "CharSeq";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Create a sequence of textual characters.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"count_c": CharSequenceInput_count_c,
		"charpool_p": CharSequenceInput_charpool_p,
		"format_f": CharSequenceInput_format_f,
	}

	public output:
	{
		"sequence_s": CharSequenceOutput_sequence_s,
	}

	constructor() {
		super();
		this.input = {
			"count_c": new CharSequenceInput_count_c(),
			"charpool_p": new CharSequenceInput_charpool_p(),
			"format_f": new CharSequenceInput_format_f(),
		}
		this.output = {
			"sequence_s": new CharSequenceOutput_sequence_s(),
		}
	}

}

class CharSequenceInput_count_c extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "C";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CharSequenceInput_charpool_p extends ResthopperParameter {

	public name: string = "CharPool";
	public nickName: string = "P";
	public description: string = "Empty Text parameter"
	public isOptional: boolean = false;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CharSequenceInput_format_f extends ResthopperParameter {

	public name: string = "Format";
	public nickName: string = "F";
	public description: string = "Empty Text parameter"
	public isOptional: boolean = true;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CharSequenceOutput_sequence_s extends ResthopperParameter {

	public name: string = "Sequence";
	public nickName: string = "S";
	public description: string = "Empty Text parameter"
	public isOptional: boolean = false;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
