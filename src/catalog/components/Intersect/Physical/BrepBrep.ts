import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BrepBrep extends ResthopperComponent {

	public guid: string = "904e4b56-484a-4814-b35f-aa4baf362117";
	public name: string = "BrepBrep";
	public nickName: string = "BBX";
	public category: string = "Intersect";
	public subCategory: string = "Physical";
	public description: string = "Solve intersection events for two Breps.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"brepa_a": BrepBrepInput_brepa_a,
		"brepb_b": BrepBrepInput_brepb_b,
	}

	public output:
	{
		"curves_c": BrepBrepOutput_curves_c,
		"points_p": BrepBrepOutput_points_p,
	}

	constructor() {
		super();
		this.input = {
			"brepa_a": new BrepBrepInput_brepa_a(),
			"brepb_b": new BrepBrepInput_brepb_b(),
		}
		this.output = {
			"curves_c": new BrepBrepOutput_curves_c(),
			"points_p": new BrepBrepOutput_points_p(),
		}
	}

}

class BrepBrepInput_brepa_a extends ResthopperParameter {

	public name: string = "BrepA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepBrepInput_brepb_b extends ResthopperParameter {

	public name: string = "BrepB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepBrepOutput_curves_c extends ResthopperParameter {

	public name: string = "Curves";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepBrepOutput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
