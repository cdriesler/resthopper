import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BrepBrep extends ResthopperComponent {

	public guid: string = "904e4b56-484a-4814-b35f-aa4baf362117";
	public name: string = "BrepBrep";
	public category: string = "Intersect";
	public subCategory: string = "Physical";
	public description: string = "Solve intersection events for two Breps.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"BrepA_A": BrepBrepInput_BrepA_A,
		"BrepB_B": BrepBrepInput_BrepB_B,
	}

	public output:
	{
		"Curves_C": BrepBrepOutput_Curves_C,
		"Points_P": BrepBrepOutput_Points_P,
	}

	constructor() {
		super();
		this.input = {
			"BrepA_A": new BrepBrepInput_BrepA_A(),
			"BrepB_B": new BrepBrepInput_BrepB_B(),
		}
		this.output = {
			"Curves_C": new BrepBrepOutput_Curves_C(),
			"Points_P": new BrepBrepOutput_Points_P(),
		}
	}

}

class BrepBrepInput_BrepA_A extends ResthopperParameter {

	public name: string = "BrepA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepBrepInput_BrepB_B extends ResthopperParameter {

	public name: string = "BrepB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepBrepOutput_Curves_C extends ResthopperParameter {

	public name: string = "Curves";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepBrepOutput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
