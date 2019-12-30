import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SeriesAddition extends ResthopperComponent {

	public guid: string = "586706a8-109b-43ec-b581-743e920c951a";
	public name: string = "Series Addition";
	public nickName: string = "SA";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Perform serial addition until a goal has been reached";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"numbers_n": SeriesAdditionInput_numbers_n,
		"goal_g": SeriesAdditionInput_goal_g,
		"start_s": SeriesAdditionInput_start_s,
	}

	public output:
	{
		"series_s": SeriesAdditionOutput_series_s,
		"remainder_r": SeriesAdditionOutput_remainder_r,
	}

	constructor() {
		super();
		this.input = {
			"numbers_n": new SeriesAdditionInput_numbers_n(),
			"goal_g": new SeriesAdditionInput_goal_g(),
			"start_s": new SeriesAdditionInput_start_s(),
		}
		this.output = {
			"series_s": new SeriesAdditionOutput_series_s(),
			"remainder_r": new SeriesAdditionOutput_remainder_r(),
		}
	}

}

class SeriesAdditionInput_numbers_n extends ResthopperParameter {

	public name: string = "Numbers";
	public nickName: string = "N";
	public description: string = "Number pool from which to take summands"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SeriesAdditionInput_goal_g extends ResthopperParameter {

	public name: string = "Goal";
	public nickName: string = "G";
	public description: string = "Goal value of addition series"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SeriesAdditionInput_start_s extends ResthopperParameter {

	public name: string = "Start";
	public nickName: string = "S";
	public description: string = "Starting value of addition series"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SeriesAdditionOutput_series_s extends ResthopperParameter {

	public name: string = "Series";
	public nickName: string = "S";
	public description: string = "Addition series"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SeriesAdditionOutput_remainder_r extends ResthopperParameter {

	public name: string = "Remainder";
	public nickName: string = "R";
	public description: string = "Difference between series summation and goal"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
