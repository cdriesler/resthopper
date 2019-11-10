import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Ungroup extends ResthopperComponent {

	public guid: string = "a45f59c8-11c1-4ea7-9e10-847061b80d75";
	public name: string = "Ungroup";
	public category: string = "Transform";
	public subCategory: string = "Util";
	public description: string = "Ungroup a set of objects";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

	public input:
	{
		"Group_G": UngroupInput_Group_G,
	}

	public output:
	{
		"Objects_O": UngroupOutput_Objects_O,
	}

	constructor() {
		super();
		this.input = {
			"Group_G": new UngroupInput_Group_G(),
		}
		this.output = {
			"Objects_O": new UngroupOutput_Objects_O(),
		}
	}

}

class UngroupInput_Group_G extends ResthopperParameter {

	public name: string = "Group";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Group;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class UngroupOutput_Objects_O extends ResthopperParameter {

	public name: string = "Objects";
	public nickName: string = "O";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
