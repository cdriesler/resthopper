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
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"curves_c": LoftInput_curves_c,
		"options_o": LoftInput_options_o,
	}

	public output:
	{
		"loft_l": LoftOutput_loft_l,
	}

	constructor() {
		super();
		this.input = {
			"curves_c": new LoftInput_curves_c(),
			"options_o": new LoftInput_options_o(),
		}
		this.output = {
			"loft_l": new LoftOutput_loft_l(),
		}
	}

}

class LoftInput_curves_c extends ResthopperParameter {

	public name: string = "Curves";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LoftInput_options_o extends ResthopperParameter {

	public name: string = "Options";
	public nickName: string = "O";
	public isOptional: boolean = false;
	public typeName: string = "Loft Options"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LoftOutput_loft_l extends ResthopperParameter {

	public name: string = "Loft";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
