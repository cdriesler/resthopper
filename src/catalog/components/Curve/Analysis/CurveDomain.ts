import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CurveDomain extends ResthopperComponent {

	public guid: string = "ccfd6ba8-ecb1-44df-a47e-08126a653c51";
	public name: string = "CurveDomain";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Measure and set the curve domain";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curve_c": CurveDomainInput_curve_c,
		"domain_d": CurveDomainInput_domain_d,
	}

	public output:
	{
		"curve_c": CurveDomainOutput_curve_c,
		"domain_d": CurveDomainOutput_domain_d,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new CurveDomainInput_curve_c(),
			"domain_d": new CurveDomainInput_domain_d(),
		}
		this.output = {
			"curve_c": new CurveDomainOutput_curve_c(),
			"domain_d": new CurveDomainOutput_domain_d(),
		}
	}

}

class CurveDomainInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveDomainInput_domain_d extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "D";
	public isOptional: boolean = true;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveDomainOutput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveDomainOutput_domain_d extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
