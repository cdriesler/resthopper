import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class FindDomain extends ResthopperComponent {

	public guid: string = "0b5c7fad-0473-41aa-bf52-d7a861dcaa29";
	public name: string = "FindDomain";
	public category: string = "Maths";
	public subCategory: string = "Domain";
	public description: string = "Find the first domain that contains a specific value";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"domains_d": FindDomainInput_domains_d,
		"number_n": FindDomainInput_number_n,
		"strict_s": FindDomainInput_strict_s,
	}

	public output:
	{
		"index_i": FindDomainOutput_index_i,
		"neighbour_n": FindDomainOutput_neighbour_n,
	}

	constructor() {
		super();
		this.input = {
			"domains_d": new FindDomainInput_domains_d(),
			"number_n": new FindDomainInput_number_n(),
			"strict_s": new FindDomainInput_strict_s(),
		}
		this.output = {
			"index_i": new FindDomainOutput_index_i(),
			"neighbour_n": new FindDomainOutput_neighbour_n(),
		}
	}

}

class FindDomainInput_domains_d extends ResthopperParameter {

	public name: string = "Domains";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Domain"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FindDomainInput_number_n extends ResthopperParameter {

	public name: string = "Number";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FindDomainInput_strict_s extends ResthopperParameter {

	public name: string = "Strict";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FindDomainOutput_index_i extends ResthopperParameter {

	public name: string = "Index";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FindDomainOutput_neighbour_n extends ResthopperParameter {

	public name: string = "Neighbour";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
