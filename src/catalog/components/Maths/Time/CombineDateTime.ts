import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CombineDateTime extends ResthopperComponent {

	public guid: string = "31534405-6573-4be6-8bf8-262e55847a3a";
	public name: string = "Combine Date & Time";
	public nickName: string = "CDate";
	public category: string = "Maths";
	public subCategory: string = "Time";
	public description: string = "Combine a pure date and a pure time into a single date";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"date_d": CombineDateTimeInput_date_d,
		"time_t": CombineDateTimeInput_time_t,
	}

	public output:
	{
		"result_r": CombineDateTimeOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"date_d": new CombineDateTimeInput_date_d(),
			"time_t": new CombineDateTimeInput_time_t(),
		}
		this.output = {
			"result_r": new CombineDateTimeOutput_result_r(),
		}
	}

}

class CombineDateTimeInput_date_d extends ResthopperParameter {

	public name: string = "Date";
	public nickName: string = "D";
	public description: string = "Date portion"
	public isOptional: boolean = false;
	public typeName: string = "Time"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CombineDateTimeInput_time_t extends ResthopperParameter {

	public name: string = "Time";
	public nickName: string = "T";
	public description: string = "Time portion"
	public isOptional: boolean = false;
	public typeName: string = "Time"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CombineDateTimeOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public description: string = "Resulting combination of date and time."
	public isOptional: boolean = false;
	public typeName: string = "Time"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
