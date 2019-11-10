import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CullIndex extends ResthopperComponent {

	public guid: string = "501aecbb-c191-4d13-83d6-7ee32445ac50";
	public name: string = "CullIndex";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Cull (remove) indexed elements from a list.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"List_L": CullIndexInput_List_L,
		"Indices_I": CullIndexInput_Indices_I,
		"Wrap_W": CullIndexInput_Wrap_W,
	}

	public output:
	{
		"List_L": CullIndexOutput_List_L,
	}

	constructor() {
		super();
		this.input = {
			"List_L": new CullIndexInput_List_L(),
			"Indices_I": new CullIndexInput_Indices_I(),
			"Wrap_W": new CullIndexInput_Wrap_W(),
		}
		this.output = {
			"List_L": new CullIndexOutput_List_L(),
		}
	}

}

class CullIndexInput_List_L extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CullIndexInput_Indices_I extends ResthopperParameter {

	public name: string = "Indices";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CullIndexInput_Wrap_W extends ResthopperParameter {

	public name: string = "Wrap";
	public nickName: string = "W";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CullIndexOutput_List_L extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
