import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CullIndex extends ResthopperComponent {

	public guid: string = "501aecbb-c191-4d13-83d6-7ee32445ac50";
	public name: string = "CullIndex";
	public nickName: string = "Culli";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Cull (remove) indexed elements from a list.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"list_l": CullIndexInput_list_l,
		"indices_i": CullIndexInput_indices_i,
		"wrap_w": CullIndexInput_wrap_w,
	}

	public output:
	{
		"list_l": CullIndexOutput_list_l,
	}

	constructor() {
		super();
		this.input = {
			"list_l": new CullIndexInput_list_l(),
			"indices_i": new CullIndexInput_indices_i(),
			"wrap_w": new CullIndexInput_wrap_w(),
		}
		this.output = {
			"list_l": new CullIndexOutput_list_l(),
		}
	}

}

class CullIndexInput_list_l extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CullIndexInput_indices_i extends ResthopperParameter {

	public name: string = "Indices";
	public nickName: string = "I";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CullIndexInput_wrap_w extends ResthopperParameter {

	public name: string = "Wrap";
	public nickName: string = "W";
	public description: string = "Empty Boolean parameter"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CullIndexOutput_list_l extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
