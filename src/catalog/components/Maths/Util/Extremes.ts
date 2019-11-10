import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Extremes extends ResthopperComponent {

	public guid: string = "37084b3f-2b66-4f3a-9737-80d0b0b7f0cb";
	public name: string = "Extremes";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Find the extremes in a list of values";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"A_A": ExtremesInput_A_A,
		"B_B": ExtremesInput_B_B,
	}

	public output:
	{
		"Maximum_V": ExtremesOutput_Maximum_V,
	}

	constructor() {
		super();
		this.input = {
			"A_A": new ExtremesInput_A_A(),
			"B_B": new ExtremesInput_B_B(),
		}
		this.output = {
			"Maximum_V": new ExtremesOutput_Maximum_V(),
		}
	}

}

class ExtremesInput_A_A extends ResthopperParameter {

	public name: string = "A";
	public nickName: string = "A";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtremesInput_B_B extends ResthopperParameter {

	public name: string = "B";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtremesOutput_Maximum_V extends ResthopperParameter {

	public name: string = "Maximum";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
