import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Includes extends ResthopperComponent {

	public guid: string = "f217f873-92f1-47ae-ad71-ca3c5a45c3f8";
	public name: string = "Includes";
	public nickName: string = "Inc";
	public category: string = "Maths";
	public subCategory: string = "Domain";
	public description: string = "Test a numeric value to see if it is included in the domain";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"value_v": IncludesInput_value_v,
		"domain_d": IncludesInput_domain_d,
	}

	public output:
	{
		"includes_i": IncludesOutput_includes_i,
		"deviation_d": IncludesOutput_deviation_d,
	}

	constructor() {
		super();
		this.input = {
			"value_v": new IncludesInput_value_v(),
			"domain_d": new IncludesInput_domain_d(),
		}
		this.output = {
			"includes_i": new IncludesOutput_includes_i(),
			"deviation_d": new IncludesOutput_deviation_d(),
		}
	}

}

class IncludesInput_value_v extends ResthopperParameter {

	public name: string = "Value";
	public nickName: string = "V";
	public description: string = "Value to test for inclusion"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IncludesInput_domain_d extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "D";
	public description: string = "Domain to test with"
	public isOptional: boolean = false;
	public typeName: string = "Domain"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IncludesOutput_includes_i extends ResthopperParameter {

	public name: string = "Includes";
	public nickName: string = "I";
	public description: string = "True if the value is included in the domain"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IncludesOutput_deviation_d extends ResthopperParameter {

	public name: string = "Deviation";
	public nickName: string = "D";
	public description: string = "Distance between the value and the nearest value inside the domain"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
