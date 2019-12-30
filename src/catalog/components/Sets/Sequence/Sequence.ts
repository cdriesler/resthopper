import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Sequence extends ResthopperComponent {

	public guid: string = "e9b2d2a6-0377-4c1c-a89e-b3f219a95b4d";
	public name: string = "Sequence";
	public nickName: string = "Seq";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Generate a sequence of numbers";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"notation_n": SequenceInput_notation_n,
		"length_l": SequenceInput_length_l,
		"initial_i": SequenceInput_initial_i,
	}

	public output:
	{
		"sequence_s": SequenceOutput_sequence_s,
	}

	constructor() {
		super();
		this.input = {
			"notation_n": new SequenceInput_notation_n(),
			"length_l": new SequenceInput_length_l(),
			"initial_i": new SequenceInput_initial_i(),
		}
		this.output = {
			"sequence_s": new SequenceOutput_sequence_s(),
		}
	}

}

class SequenceInput_notation_n extends ResthopperParameter {

	public name: string = "Notation";
	public nickName: string = "N";
	public description: string = "Sequence notation"
	public isOptional: boolean = false;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SequenceInput_length_l extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public description: string = "Final length of sequence"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SequenceInput_initial_i extends ResthopperParameter {

	public name: string = "Initial";
	public nickName: string = "I";
	public description: string = "Initial values in sequence"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SequenceOutput_sequence_s extends ResthopperParameter {

	public name: string = "Sequence";
	public nickName: string = "S";
	public description: string = "Sequence"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
