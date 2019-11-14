import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SplitwithBrep extends ResthopperComponent {

	public guid: string = "4bdc2eb0-24ed-4c90-a27b-a32db069eaef";
	public name: string = "SplitwithBrep";
	public nickName: string = "Split";
	public category: string = "Intersect";
	public subCategory: string = "Region";
	public description: string = "Split a curve with a Brep.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curve_c": SplitwithBrepInput_curve_c,
		"brep_b": SplitwithBrepInput_brep_b,
	}

	public output:
	{
		"curve_c": SplitwithBrepOutput_curve_c,
		"points_p": SplitwithBrepOutput_points_p,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new SplitwithBrepInput_curve_c(),
			"brep_b": new SplitwithBrepInput_brep_b(),
		}
		this.output = {
			"curve_c": new SplitwithBrepOutput_curve_c(),
			"points_p": new SplitwithBrepOutput_points_p(),
		}
	}

}

class SplitwithBrepInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitwithBrepInput_brep_b extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitwithBrepOutput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitwithBrepOutput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
