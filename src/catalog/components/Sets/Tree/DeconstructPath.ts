import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DeconstructPath extends ResthopperComponent {

	public guid: string = "df6d9197-9a6e-41a2-9c9d-d2221accb49e";
	public name: string = "Deconstruct Path";
	public nickName: string = "DPath";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Deconstruct a data tree path into individual integers.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"branch_b": DeconstructPathInput_branch_b,
	}

	public output:
	{
		"indices_i": DeconstructPathOutput_indices_i,
	}

	constructor() {
		super();
		this.input = {
			"branch_b": new DeconstructPathInput_branch_b(),
		}
		this.output = {
			"indices_i": new DeconstructPathOutput_indices_i(),
		}
	}

}

class DeconstructPathInput_branch_b extends ResthopperParameter {

	public name: string = "Branch";
	public nickName: string = "B";
	public description: string = "Branch path"
	public isOptional: boolean = false;
	public typeName: string = "Path"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructPathOutput_indices_i extends ResthopperParameter {

	public name: string = "Indices";
	public nickName: string = "I";
	public description: string = "Branch path indices"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
