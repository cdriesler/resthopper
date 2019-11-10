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
		"Domains_D": FindDomainInput_Domains_D,
		"Number_N": FindDomainInput_Number_N,
		"Strict_S": FindDomainInput_Strict_S,
	}

	public output:
	{
		"Index_I": FindDomainOutput_Index_I,
		"Neighbour_N": FindDomainOutput_Neighbour_N,
	}

	constructor() {
		super();
		this.input = {
			"Domains_D": new FindDomainInput_Domains_D(),
			"Number_N": new FindDomainInput_Number_N(),
			"Strict_S": new FindDomainInput_Strict_S(),
		}
		this.output = {
			"Index_I": new FindDomainOutput_Index_I(),
			"Neighbour_N": new FindDomainOutput_Neighbour_N(),
		}
	}

}

class FindDomainInput_Domains_D extends ResthopperParameter {

	public name: string = "Domains";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FindDomainInput_Number_N extends ResthopperParameter {

	public name: string = "Number";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FindDomainInput_Strict_S extends ResthopperParameter {

	public name: string = "Strict";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FindDomainOutput_Index_I extends ResthopperParameter {

	public name: string = "Index";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FindDomainOutput_Neighbour_N extends ResthopperParameter {

	public name: string = "Neighbour";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
