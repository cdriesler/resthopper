import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ConsecutiveDomains extends ResthopperComponent {

	public guid: string = "95992b33-89e1-4d36-bd35-2754a11af21e";
	public name: string = "Consecutive Domains";
	public nickName: string = "Consec";
	public category: string = "Maths";
	public subCategory: string = "Domain";
	public description: string = "Create consecutive domains from a list of numbers";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"numbers_n": ConsecutiveDomainsInput_numbers_n,
		"additive_a": ConsecutiveDomainsInput_additive_a,
	}

	public output:
	{
		"domains_d": ConsecutiveDomainsOutput_domains_d,
	}

	constructor() {
		super();
		this.input = {
			"numbers_n": new ConsecutiveDomainsInput_numbers_n(),
			"additive_a": new ConsecutiveDomainsInput_additive_a(),
		}
		this.output = {
			"domains_d": new ConsecutiveDomainsOutput_domains_d(),
		}
	}

}

class ConsecutiveDomainsInput_numbers_n extends ResthopperParameter {

	public name: string = "Numbers";
	public nickName: string = "N";
	public description: string = "Numbers for consecutive domains"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConsecutiveDomainsInput_additive_a extends ResthopperParameter {

	public name: string = "Additive";
	public nickName: string = "A";
	public description: string = "If True, values are added to a sum-total"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConsecutiveDomainsOutput_domains_d extends ResthopperParameter {

	public name: string = "Domains";
	public nickName: string = "D";
	public description: string = "Domains describing the spaces between the numbers"
	public isOptional: boolean = false;
	public typeName: string = "Domain"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
