import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SplitwithBreps extends ResthopperComponent {

	public guid: string = "5b742537-9bcb-4f06-9613-866da5bf845e";
	public name: string = "SplitwithBreps";
	public nickName: string = "Split";
	public category: string = "Intersect";
	public subCategory: string = "Region";
	public description: string = "Split a curve with multiple Breps.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curve_c": SplitwithBrepsInput_curve_c,
		"brep_b": SplitwithBrepsInput_brep_b,
	}

	public output:
	{
		"curve_c": SplitwithBrepsOutput_curve_c,
		"points_p": SplitwithBrepsOutput_points_p,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new SplitwithBrepsInput_curve_c(),
			"brep_b": new SplitwithBrepsInput_brep_b(),
		}
		this.output = {
			"curve_c": new SplitwithBrepsOutput_curve_c(),
			"points_p": new SplitwithBrepsOutput_points_p(),
		}
	}

}

class SplitwithBrepsInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitwithBrepsInput_brep_b extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitwithBrepsOutput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitwithBrepsOutput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
