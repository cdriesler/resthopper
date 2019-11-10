import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class LargerThan extends ResthopperComponent {

	public guid: string = "30d58600-1aab-42db-80a3-f1ea6c4269a0";
	public name: string = "LargerThan";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Larger than (or equal to)";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"FirstNumber_A": LargerThanInput_FirstNumber_A,
		"SecondNumber_B": LargerThanInput_SecondNumber_B,
	}

	public output:
	{
		"orEqualto_": LargerThanOutput_orEqualto_,
	}

	constructor() {
		super();
		this.input = {
			"FirstNumber_A": new LargerThanInput_FirstNumber_A(),
			"SecondNumber_B": new LargerThanInput_SecondNumber_B(),
		}
		this.output = {
			"orEqualto_": new LargerThanOutput_orEqualto_(),
		}
	}

}

class LargerThanInput_FirstNumber_A extends ResthopperParameter {

	public name: string = "FirstNumber";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LargerThanInput_SecondNumber_B extends ResthopperParameter {

	public name: string = "SecondNumber";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LargerThanOutput_orEqualto_ extends ResthopperParameter {

	public name: string = "orEqualto";
	public nickName: string = "";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
