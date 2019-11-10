import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Jitter extends ResthopperComponent {

	public guid: string = "f02a20f6-bb49-4e3d-b155-8ed5d3c6b000";
	public name: string = "Jitter";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Randomly shuffles a list of values.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"List_L": JitterInput_List_L,
		"Jitter_J": JitterInput_Jitter_J,
		"Seed_S": JitterInput_Seed_S,
	}

	public output:
	{
		"Values_V": JitterOutput_Values_V,
		"Indices_I": JitterOutput_Indices_I,
	}

	constructor() {
		super();
		this.input = {
			"List_L": new JitterInput_List_L(),
			"Jitter_J": new JitterInput_Jitter_J(),
			"Seed_S": new JitterInput_Seed_S(),
		}
		this.output = {
			"Values_V": new JitterOutput_Values_V(),
			"Indices_I": new JitterOutput_Indices_I(),
		}
	}

}

class JitterInput_List_L extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class JitterInput_Jitter_J extends ResthopperParameter {

	public name: string = "Jitter";
	public nickName: string = "J";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class JitterInput_Seed_S extends ResthopperParameter {

	public name: string = "Seed";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class JitterOutput_Values_V extends ResthopperParameter {

	public name: string = "Values";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class JitterOutput_Indices_I extends ResthopperParameter {

	public name: string = "Indices";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
