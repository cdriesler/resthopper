import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BrepLine extends ResthopperComponent {

	public guid: string = "ed0742f9-6647-4d95-9dfd-9ad17080ae9c";
	public name: string = "BrepLine";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Solve intersection events for a Brep and a line.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"brep_b": BrepLineInput_brep_b,
		"line_l": BrepLineInput_line_l,
	}

	public output:
	{
		"curves_c": BrepLineOutput_curves_c,
		"points_p": BrepLineOutput_points_p,
	}

	constructor() {
		super();
		this.input = {
			"brep_b": new BrepLineInput_brep_b(),
			"line_l": new BrepLineInput_line_l(),
		}
		this.output = {
			"curves_c": new BrepLineOutput_curves_c(),
			"points_p": new BrepLineOutput_points_p(),
		}
	}

}

class BrepLineInput_brep_b extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepLineInput_line_l extends ResthopperParameter {

	public name: string = "Line";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepLineOutput_curves_c extends ResthopperParameter {

	public name: string = "Curves";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepLineOutput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
