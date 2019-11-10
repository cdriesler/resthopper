import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SplitwithBrep extends ResthopperComponent {

	public guid: string = "4bdc2eb0-24ed-4c90-a27b-a32db069eaef";
	public name: string = "SplitwithBrep";
	public category: string = "Intersect";
	public subCategory: string = "Region";
	public description: string = "Split a curve with a Brep.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Curve_C": SplitwithBrepInput_Curve_C,
		"Brep_B": SplitwithBrepInput_Brep_B,
	}

	public output:
	{
		"Curve_C": SplitwithBrepOutput_Curve_C,
		"Points_P": SplitwithBrepOutput_Points_P,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new SplitwithBrepInput_Curve_C(),
			"Brep_B": new SplitwithBrepInput_Brep_B(),
		}
		this.output = {
			"Curve_C": new SplitwithBrepOutput_Curve_C(),
			"Points_P": new SplitwithBrepOutput_Points_P(),
		}
	}

}

class SplitwithBrepInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitwithBrepInput_Brep_B extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitwithBrepOutput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitwithBrepOutput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
