import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Includes extends ResthopperComponent {

	public guid: string = "f217f873-92f1-47ae-ad71-ca3c5a45c3f8";
	public name: string = "Includes";
	public category: string = "Maths";
	public subCategory: string = "Domain";
	public description: string = "Test a numeric value to see if it is included in the domain";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Value_V": IncludesInput_Value_V,
		"Domain_D": IncludesInput_Domain_D,
	}

	public output:
	{
		"Includes_I": IncludesOutput_Includes_I,
		"Deviation_D": IncludesOutput_Deviation_D,
	}

	constructor() {
		super();
		this.input = {
			"Value_V": new IncludesInput_Value_V(),
			"Domain_D": new IncludesInput_Domain_D(),
		}
		this.output = {
			"Includes_I": new IncludesOutput_Includes_I(),
			"Deviation_D": new IncludesOutput_Deviation_D(),
		}
	}

}

class IncludesInput_Value_V extends ResthopperParameter {

	public name: string = "Value";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IncludesInput_Domain_D extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IncludesOutput_Includes_I extends ResthopperParameter {

	public name: string = "Includes";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IncludesOutput_Deviation_D extends ResthopperParameter {

	public name: string = "Deviation";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
