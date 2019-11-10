import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Loft extends ResthopperComponent {

	public guid: string = "a7a41d0a-2188-4f7a-82cc-1a2c4e4ec850";
	public name: string = "Loft";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create a lofted surface through a set of section curves.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Curves_C": LoftInput_Curves_C,
		"Options_O": LoftInput_Options_O,
	}

	public output:
	{
		"Loft_L": LoftOutput_Loft_L,
	}

	constructor() {
		super();
		this.input = {
			"Curves_C": new LoftInput_Curves_C(),
			"Options_O": new LoftInput_Options_O(),
		}
		this.output = {
			"Loft_L": new LoftOutput_Loft_L(),
		}
	}

}

class LoftInput_Curves_C extends ResthopperParameter {

	public name: string = "Curves";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LoftInput_Options_O extends ResthopperParameter {

	public name: string = "Options";
	public nickName: string = "O";
	public isOptional: boolean = false;
	public typeName: string = "Loft Options;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LoftOutput_Loft_L extends ResthopperParameter {

	public name: string = "Loft";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
