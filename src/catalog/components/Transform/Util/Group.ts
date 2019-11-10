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
		"Objects_O": GroupInput_Objects_O,
	}

	public output:
	{
		"Group_G": GroupOutput_Group_G,
	}

	constructor() {
		super();
		this.input = {
			"Objects_O": new GroupInput_Objects_O(),
		}
		this.output = {
			"Group_G": new GroupOutput_Group_G(),
		}
	}

}

class GroupInput_Objects_O extends ResthopperParameter {

	public name: string = "Objects";
	public nickName: string = "O";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class GroupOutput_Group_G extends ResthopperParameter {

	public name: string = "Group";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Group;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
