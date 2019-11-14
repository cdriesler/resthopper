import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Seam extends ResthopperComponent {

	public guid: string = "42ad8dc1-b0c0-40df-91f5-2c46e589e6c2";
	public name: string = "Seam";
	public nickName: string = "Seam";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Adjust the seam of a closed curve.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curve_c": SeamInput_curve_c,
		"seam_t": SeamInput_seam_t,
	}

	public output:
	{
		"curve_c": SeamOutput_curve_c,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new SeamInput_curve_c(),
			"seam_t": new SeamInput_seam_t(),
		}
		this.output = {
			"curve_c": new SeamOutput_curve_c(),
		}
	}

}

class SeamInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SeamInput_seam_t extends ResthopperParameter {

	public name: string = "Seam";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SeamOutput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
