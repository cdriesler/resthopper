import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class LengthDomain extends ResthopperComponent {

	public guid: string = "188edd02-14a9-4828-a521-34995b0d1e4a";
	public name: string = "Length Domain";
	public nickName: string = "LenD";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Measure the length of a curve subdomain.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curve_c": LengthDomainInput_curve_c,
		"domain_d": LengthDomainInput_domain_d,
	}

	public output:
	{
		"length_l": LengthDomainOutput_length_l,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new LengthDomainInput_curve_c(),
			"domain_d": new LengthDomainInput_domain_d(),
		}
		this.output = {
			"length_l": new LengthDomainOutput_length_l(),
		}
	}

}

class LengthDomainInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public description: string = "Curve to measure"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LengthDomainInput_domain_d extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "D";
	public description: string = "Subdomain of curve to measure"
	public isOptional: boolean = false;
	public typeName: string = "Domain"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LengthDomainOutput_length_l extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public description: string = "Curve length on sub domain"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
