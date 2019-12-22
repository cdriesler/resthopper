import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ConstructPath extends ResthopperComponent {

	public guid: string = "946cb61e-18d2-45e3-8840-67b0efa26528";
	public name: string = "Construct Path";
	public nickName: string = "Path";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Construct a data tree branch path.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"indices_i": ConstructPathInput_indices_i,
	}

	public output:
	{
		"branch_b": ConstructPathOutput_branch_b,
	}

	constructor() {
		super();
		this.input = {
			"indices_i": new ConstructPathInput_indices_i(),
		}
		this.output = {
			"branch_b": new ConstructPathOutput_branch_b(),
		}
	}

}

class ConstructPathInput_indices_i extends ResthopperParameter {

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

class ConstructPathOutput_branch_b extends ResthopperParameter {

	public name: string = "Branch";
	public nickName: string = "B";
	public description: string = "Empty Path parameter"
	public isOptional: boolean = false;
	public typeName: string = "Path"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
