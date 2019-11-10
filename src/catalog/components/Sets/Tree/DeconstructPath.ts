import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DeconstructPath extends ResthopperComponent {

	public guid: string = "df6d9197-9a6e-41a2-9c9d-d2221accb49e";
	public name: string = "DeconstructPath";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Deconstruct a data tree path into individual integers.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Branch_B": DeconstructPathInput_Branch_B,
	}

	public output:
	{
		"Indices_I": DeconstructPathOutput_Indices_I,
	}

	constructor() {
		super();
		this.input = {
			"Branch_B": new DeconstructPathInput_Branch_B(),
		}
		this.output = {
			"Indices_I": new DeconstructPathOutput_Indices_I(),
		}
	}

}

class DeconstructPathInput_Branch_B extends ResthopperParameter {

	public name: string = "Branch";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Path;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructPathOutput_Indices_I extends ResthopperParameter {

	public name: string = "Indices";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
