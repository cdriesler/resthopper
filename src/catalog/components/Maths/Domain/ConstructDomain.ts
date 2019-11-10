import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ConstructDomain extends ResthopperComponent {

	public guid: string = "d1a28e95-cf96-4936-bf34-8bf142d731bf";
	public name: string = "ConstructDomain";
	public category: string = "Maths";
	public subCategory: string = "Domain";
	public description: string = "Create a numeric domain from two numeric extremes.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Domainstart_A": ConstructDomainInput_Domainstart_A,
		"Domainend_B": ConstructDomainInput_Domainend_B,
	}

	public output:
	{
		"Domain_I": ConstructDomainOutput_Domain_I,
	}

	constructor() {
		super();
		this.input = {
			"Domainstart_A": new ConstructDomainInput_Domainstart_A(),
			"Domainend_B": new ConstructDomainInput_Domainend_B(),
		}
		this.output = {
			"Domain_I": new ConstructDomainOutput_Domain_I(),
		}
	}

}

class ConstructDomainInput_Domainstart_A extends ResthopperParameter {

	public name: string = "Domainstart";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructDomainInput_Domainend_B extends ResthopperParameter {

	public name: string = "Domainend";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructDomainOutput_Domain_I extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
