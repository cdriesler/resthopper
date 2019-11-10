import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ConsecutiveDomains extends ResthopperComponent {

	public guid: string = "95992b33-89e1-4d36-bd35-2754a11af21e";
	public name: string = "ConsecutiveDomains";
	public category: string = "Maths";
	public subCategory: string = "Domain";
	public description: string = "Create consecutive domains from a list of numbers";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Numbers_N": ConsecutiveDomainsInput_Numbers_N,
		"Additive_A": ConsecutiveDomainsInput_Additive_A,
	}

	public output:
	{
		"Domains_D": ConsecutiveDomainsOutput_Domains_D,
	}

	constructor() {
		super();
		this.input = {
			"Numbers_N": new ConsecutiveDomainsInput_Numbers_N(),
			"Additive_A": new ConsecutiveDomainsInput_Additive_A(),
		}
		this.output = {
			"Domains_D": new ConsecutiveDomainsOutput_Domains_D(),
		}
	}

}

class ConsecutiveDomainsInput_Numbers_N extends ResthopperParameter {

	public name: string = "Numbers";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConsecutiveDomainsInput_Additive_A extends ResthopperParameter {

	public name: string = "Additive";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConsecutiveDomainsOutput_Domains_D extends ResthopperParameter {

	public name: string = "Domains";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
