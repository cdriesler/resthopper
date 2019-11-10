import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Sequence extends ResthopperComponent {

	public guid: string = "e9b2d2a6-0377-4c1c-a89e-b3f219a95b4d";
	public name: string = "Sequence";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Generate a sequence of numbers";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Notation_N": SequenceInput_Notation_N,
		"Length_L": SequenceInput_Length_L,
		"Initial_I": SequenceInput_Initial_I,
	}

	public output:
	{
		"Sequence_S": SequenceOutput_Sequence_S,
	}

	constructor() {
		super();
		this.input = {
			"Notation_N": new SequenceInput_Notation_N(),
			"Length_L": new SequenceInput_Length_L(),
			"Initial_I": new SequenceInput_Initial_I(),
		}
		this.output = {
			"Sequence_S": new SequenceOutput_Sequence_S(),
		}
	}

}

class SequenceInput_Notation_N extends ResthopperParameter {

	public name: string = "Notation";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SequenceInput_Length_L extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SequenceInput_Initial_I extends ResthopperParameter {

	public name: string = "Initial";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SequenceOutput_Sequence_S extends ResthopperParameter {

	public name: string = "Sequence";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
