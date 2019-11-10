import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DateRange extends ResthopperComponent {

	public guid: string = "38a4e722-ad5a-4229-a170-e27ae1345538";
	public name: string = "DateRange";
	public category: string = "Maths";
	public subCategory: string = "Time";
	public description: string = "Create a range of successive dates or times";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"TimeA_A": DateRangeInput_TimeA_A,
		"TimeB_B": DateRangeInput_TimeB_B,
		"Count_N": DateRangeInput_Count_N,
	}

	public output:
	{
		"Range_R": DateRangeOutput_Range_R,
	}

	constructor() {
		super();
		this.input = {
			"TimeA_A": new DateRangeInput_TimeA_A(),
			"TimeB_B": new DateRangeInput_TimeB_B(),
			"Count_N": new DateRangeInput_Count_N(),
		}
		this.output = {
			"Range_R": new DateRangeOutput_Range_R(),
		}
	}

}

class DateRangeInput_TimeA_A extends ResthopperParameter {

	public name: string = "TimeA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Time;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DateRangeInput_TimeB_B extends ResthopperParameter {

	public name: string = "TimeB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Time;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DateRangeInput_Count_N extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DateRangeOutput_Range_R extends ResthopperParameter {

	public name: string = "Range";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Time;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
