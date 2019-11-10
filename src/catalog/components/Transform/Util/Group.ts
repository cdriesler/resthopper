import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Group extends ResthopperComponent {

	public guid: string = "874eebe7-835b-4f4f-9811-97e031c41597";
	public name: string = "Group";
	public category: string = "Transform";
	public subCategory: string = "Util";
	public description: string = "Group a set of objects";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

	public input:
	{
		"objects_o": GroupInput_objects_o,
	}

	public output:
	{
		"group_g": GroupOutput_group_g,
	}

	constructor() {
		super();
		this.input = {
			"objects_o": new GroupInput_objects_o(),
		}
		this.output = {
			"group_g": new GroupOutput_group_g(),
		}
	}

}

class GroupInput_objects_o extends ResthopperParameter {

	public name: string = "Objects";
	public nickName: string = "O";
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GroupOutput_group_g extends ResthopperParameter {

	public name: string = "Group";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Group"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
