import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SmallerThan extends ResthopperComponent {

	public guid: string = "ae840986-cade-4e5a-96b0-570f007d4fc0";
	public name: string = "SmallerThan";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Smaller than (or equal to)";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"FirstNumber_A": SmallerThanInput_FirstNumber_A,
		"SecondNumber_B": SmallerThanInput_SecondNumber_B,
	}

	public output:
	{
		"orEqualto_": SmallerThanOutput_orEqualto_,
	}

	constructor() {
		super();
		this.input = {
			"FirstNumber_A": new SmallerThanInput_FirstNumber_A(),
			"SecondNumber_B": new SmallerThanInput_SecondNumber_B(),
		}
		this.output = {
			"orEqualto_": new SmallerThanOutput_orEqualto_(),
		}
	}

}

class SmallerThanInput_FirstNumber_A extends ResthopperParameter {

	public name: string = "FirstNumber";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SmallerThanInput_SecondNumber_B extends ResthopperParameter {

	public name: string = "SecondNumber";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SmallerThanOutput_orEqualto_ extends ResthopperParameter {

	public name: string = "orEqualto";
	public nickName: string = "";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
