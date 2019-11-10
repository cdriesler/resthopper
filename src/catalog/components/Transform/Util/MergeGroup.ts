import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MergeGroup extends ResthopperComponent {

	public guid: string = "15204c6d-bba8-403d-9e8f-6660ab8e0df5";
	public name: string = "MergeGroup";
	public category: string = "Transform";
	public subCategory: string = "Util";
	public description: string = "Merge two groups";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

	public input:
	{
		"groupa_a": MergeGroupInput_groupa_a,
		"groupb_b": MergeGroupInput_groupb_b,
	}

	public output:
	{
		"group_g": MergeGroupOutput_group_g,
	}

	constructor() {
		super();
		this.input = {
			"groupa_a": new MergeGroupInput_groupa_a(),
			"groupb_b": new MergeGroupInput_groupb_b(),
		}
		this.output = {
			"group_g": new MergeGroupOutput_group_g(),
		}
	}

}

class MergeGroupInput_groupa_a extends ResthopperParameter {

	public name: string = "GroupA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Group;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeGroupInput_groupb_b extends ResthopperParameter {

	public name: string = "GroupB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Group;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeGroupOutput_group_g extends ResthopperParameter {

	public name: string = "Group";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Group;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
