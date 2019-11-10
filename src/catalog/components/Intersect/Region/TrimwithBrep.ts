import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TrimwithBrep extends ResthopperComponent {

	public guid: string = "3eba04bc-00e8-416d-b58f-a3dc8b3e22e2";
	public name: string = "TrimwithBrep";
	public category: string = "Intersect";
	public subCategory: string = "Region";
	public description: string = "Trim a curve with a Brep.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curve_c": TrimwithBrepInput_curve_c,
		"brep_b": TrimwithBrepInput_brep_b,
	}

	public output:
	{
		"inside_ci": TrimwithBrepOutput_inside_ci,
		"outside_co": TrimwithBrepOutput_outside_co,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new TrimwithBrepInput_curve_c(),
			"brep_b": new TrimwithBrepInput_brep_b(),
		}
		this.output = {
			"inside_ci": new TrimwithBrepOutput_inside_ci(),
			"outside_co": new TrimwithBrepOutput_outside_co(),
		}
	}

}

class TrimwithBrepInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TrimwithBrepInput_brep_b extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TrimwithBrepOutput_inside_ci extends ResthopperParameter {

	public name: string = "Inside";
	public nickName: string = "Ci";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TrimwithBrepOutput_outside_co extends ResthopperParameter {

	public name: string = "Outside";
	public nickName: string = "Co";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
