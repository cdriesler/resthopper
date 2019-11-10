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
		"GroupA_A": MergeGroupInput_GroupA_A,
		"GroupB_B": MergeGroupInput_GroupB_B,
	}

	public output:
	{
		"Group_G": MergeGroupOutput_Group_G,
	}

	constructor() {
		super();
		this.input = {
			"GroupA_A": new MergeGroupInput_GroupA_A(),
			"GroupB_B": new MergeGroupInput_GroupB_B(),
		}
		this.output = {
			"Group_G": new MergeGroupOutput_Group_G(),
		}
	}

}

class MergeGroupInput_GroupA_A extends ResthopperParameter {

	public name: string = "GroupA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Group;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeGroupInput_GroupB_B extends ResthopperParameter {

	public name: string = "GroupB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Group;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeGroupOutput_Group_G extends ResthopperParameter {

	public name: string = "Group";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Group;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
