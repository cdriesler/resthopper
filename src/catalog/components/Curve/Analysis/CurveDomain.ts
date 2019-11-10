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
		"Curve_C": CurveDomainInput_Curve_C,
		"Domain_D": CurveDomainInput_Domain_D,
	}

	public output:
	{
		"Curve_C": CurveDomainOutput_Curve_C,
		"Domain_D": CurveDomainOutput_Domain_D,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new CurveDomainInput_Curve_C(),
			"Domain_D": new CurveDomainInput_Domain_D(),
		}
		this.output = {
			"Curve_C": new CurveDomainOutput_Curve_C(),
			"Domain_D": new CurveDomainOutput_Domain_D(),
		}
	}

}

class CurveDomainInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveDomainInput_Domain_D extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "D";
	public isOptional: boolean = true;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveDomainOutput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveDomainOutput_Domain_D extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
