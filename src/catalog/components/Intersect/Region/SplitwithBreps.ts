import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SplitwithBreps extends ResthopperComponent {

	public guid: string = "5b742537-9bcb-4f06-9613-866da5bf845e";
	public name: string = "SplitwithBreps";
	public category: string = "Intersect";
	public subCategory: string = "Region";
	public description: string = "Split a curve with multiple Breps.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Curve_C": SplitwithBrepsInput_Curve_C,
		"Brep_B": SplitwithBrepsInput_Brep_B,
	}

	public output:
	{
		"Curve_C": SplitwithBrepsOutput_Curve_C,
		"Points_P": SplitwithBrepsOutput_Points_P,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new SplitwithBrepsInput_Curve_C(),
			"Brep_B": new SplitwithBrepsInput_Brep_B(),
		}
		this.output = {
			"Curve_C": new SplitwithBrepsOutput_Curve_C(),
			"Points_P": new SplitwithBrepsOutput_Points_P(),
		}
	}

}

class SplitwithBrepsInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitwithBrepsInput_Brep_B extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitwithBrepsOutput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitwithBrepsOutput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
