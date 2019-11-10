import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class LengthDomain extends ResthopperComponent {

	public guid: string = "188edd02-14a9-4828-a521-34995b0d1e4a";
	public name: string = "LengthDomain";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Measure the length of a curve subdomain.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Curve_C": LengthDomainInput_Curve_C,
		"Domain_D": LengthDomainInput_Domain_D,
	}

	public output:
	{
		"Length_L": LengthDomainOutput_Length_L,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new LengthDomainInput_Curve_C(),
			"Domain_D": new LengthDomainInput_Domain_D(),
		}
		this.output = {
			"Length_L": new LengthDomainOutput_Length_L(),
		}
	}

}

class LengthDomainInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LengthDomainInput_Domain_D extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LengthDomainOutput_Length_L extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
