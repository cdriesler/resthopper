import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DeleteConsecutive extends ResthopperComponent {

	public guid: string = "190d042c-2270-4bc1-81c0-4f90c170c9c9";
	public name: string = "DeleteConsecutive";
	public category: string = "Sets";
	public subCategory: string = "Sets";
	public description: string = "Delete consecutive similar members in a set.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"set_s": DeleteConsecutiveInput_set_s,
		"wrap_w": DeleteConsecutiveInput_wrap_w,
	}

	public output:
	{
		"set_s": DeleteConsecutiveOutput_set_s,
		"count_n": DeleteConsecutiveOutput_count_n,
	}

	constructor() {
		super();
		this.input = {
			"set_s": new DeleteConsecutiveInput_set_s(),
			"wrap_w": new DeleteConsecutiveInput_wrap_w(),
		}
		this.output = {
			"set_s": new DeleteConsecutiveOutput_set_s(),
			"count_n": new DeleteConsecutiveOutput_count_n(),
		}
	}

}

class DeleteConsecutiveInput_set_s extends ResthopperParameter {

	public name: string = "Set";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeleteConsecutiveInput_wrap_w extends ResthopperParameter {

	public name: string = "Wrap";
	public nickName: string = "W";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeleteConsecutiveOutput_set_s extends ResthopperParameter {

	public name: string = "Set";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeleteConsecutiveOutput_count_n extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
