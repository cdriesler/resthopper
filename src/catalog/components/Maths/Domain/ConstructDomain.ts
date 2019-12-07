import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ConstructDomain extends ResthopperComponent {

	public guid: string = "d1a28e95-cf96-4936-bf34-8bf142d731bf";
	public name: string = "ConstructDomain";
	public nickName: string = "Dom";
	public category: string = "Maths";
	public subCategory: string = "Domain";
	public description: string = "Create a numeric domain from two numeric extremes.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"domainstart_a": ConstructDomainInput_domainstart_a,
		"domainend_b": ConstructDomainInput_domainend_b,
	}

	public output:
	{
		"domain_i": ConstructDomainOutput_domain_i,
	}

	constructor() {
		super();
		this.input = {
			"domainstart_a": new ConstructDomainInput_domainstart_a(),
			"domainend_b": new ConstructDomainInput_domainend_b(),
		}
		this.output = {
			"domain_i": new ConstructDomainOutput_domain_i(),
		}
	}

}

class ConstructDomainInput_domainstart_a extends ResthopperParameter {

	public name: string = "Domainstart";
	public nickName: string = "A";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructDomainInput_domainend_b extends ResthopperParameter {

	public name: string = "Domainend";
	public nickName: string = "B";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructDomainOutput_domain_i extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "I";
	public description: string = "Empty Domain parameter"
	public isOptional: boolean = false;
	public typeName: string = "Domain"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
