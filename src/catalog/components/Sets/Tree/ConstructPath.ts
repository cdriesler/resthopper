import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ConstructPath extends ResthopperComponent {

	public guid: string = "946cb61e-18d2-45e3-8840-67b0efa26528";
	public name: string = "ConstructPath";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Construct a data tree branch path.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Indices_I": ConstructPathInput_Indices_I,
	}

	public output:
	{
		"Branch_B": ConstructPathOutput_Branch_B,
	}

	constructor() {
		super();
		this.input = {
			"Indices_I": new ConstructPathInput_Indices_I(),
		}
		this.output = {
			"Branch_B": new ConstructPathOutput_Branch_B(),
		}
	}

}

class ConstructPathInput_Indices_I extends ResthopperParameter {

	public name: string = "Indices";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructPathOutput_Branch_B extends ResthopperParameter {

	public name: string = "Branch";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Path;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
