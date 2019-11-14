import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Ungroup extends ResthopperComponent {

	public guid: string = "a45f59c8-11c1-4ea7-9e10-847061b80d75";
	public name: string = "Ungroup";
	public nickName: string = "Ungroup";
	public category: string = "Transform";
	public subCategory: string = "Util";
	public description: string = "Ungroup a set of objects";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Grasshopper";

	public input:
	{
		"group_g": UngroupInput_group_g,
	}

	public output:
	{
		"objects_o": UngroupOutput_objects_o,
	}

	constructor() {
		super();
		this.input = {
			"group_g": new UngroupInput_group_g(),
		}
		this.output = {
			"objects_o": new UngroupOutput_objects_o(),
		}
	}

}

class UngroupInput_group_g extends ResthopperParameter {

	public name: string = "Group";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Group"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class UngroupOutput_objects_o extends ResthopperParameter {

	public name: string = "Objects";
	public nickName: string = "O";
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
