import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TrimwithBreps extends ResthopperComponent {

	public guid: string = "916e7ebc-524c-47ce-8936-e50a09a7b43c";
	public name: string = "TrimwithBreps";
	public category: string = "Intersect";
	public subCategory: string = "Region";
	public description: string = "Trim a curve with multiple Breps.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curve_c": TrimwithBrepsInput_curve_c,
		"brep_b": TrimwithBrepsInput_brep_b,
	}

	public output:
	{
		"inside_ci": TrimwithBrepsOutput_inside_ci,
		"outside_co": TrimwithBrepsOutput_outside_co,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new TrimwithBrepsInput_curve_c(),
			"brep_b": new TrimwithBrepsInput_brep_b(),
		}
		this.output = {
			"inside_ci": new TrimwithBrepsOutput_inside_ci(),
			"outside_co": new TrimwithBrepsOutput_outside_co(),
		}
	}

}

class TrimwithBrepsInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TrimwithBrepsInput_brep_b extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TrimwithBrepsOutput_inside_ci extends ResthopperParameter {

	public name: string = "Inside";
	public nickName: string = "Ci";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TrimwithBrepsOutput_outside_co extends ResthopperParameter {

	public name: string = "Outside";
	public nickName: string = "Co";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
