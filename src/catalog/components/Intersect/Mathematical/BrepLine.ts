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
		"Brep_B": BrepLineInput_Brep_B,
		"Line_L": BrepLineInput_Line_L,
	}

	public output:
	{
		"Curves_C": BrepLineOutput_Curves_C,
		"Points_P": BrepLineOutput_Points_P,
	}

	constructor() {
		super();
		this.input = {
			"Brep_B": new BrepLineInput_Brep_B(),
			"Line_L": new BrepLineInput_Line_L(),
		}
		this.output = {
			"Curves_C": new BrepLineOutput_Curves_C(),
			"Points_P": new BrepLineOutput_Points_P(),
		}
	}

}

class BrepLineInput_Brep_B extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepLineInput_Line_L extends ResthopperParameter {

	public name: string = "Line";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepLineOutput_Curves_C extends ResthopperParameter {

	public name: string = "Curves";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepLineOutput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
