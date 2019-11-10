import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Seam extends ResthopperComponent {

	public guid: string = "42ad8dc1-b0c0-40df-91f5-2c46e589e6c2";
	public name: string = "Seam";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Adjust the seam of a closed curve.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Curve_C": SeamInput_Curve_C,
		"Seam_t": SeamInput_Seam_t,
	}

	public output:
	{
		"Curve_C": SeamOutput_Curve_C,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new SeamInput_Curve_C(),
			"Seam_t": new SeamInput_Seam_t(),
		}
		this.output = {
			"Curve_C": new SeamOutput_Curve_C(),
		}
	}

}

class SeamInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SeamInput_Seam_t extends ResthopperParameter {

	public name: string = "Seam";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SeamOutput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
