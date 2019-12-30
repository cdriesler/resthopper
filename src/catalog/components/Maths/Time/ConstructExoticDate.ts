import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ConstructExoticDate extends ResthopperComponent {

	public guid: string = "e5ff52c5-40df-4f43-ac3b-d2418d05ae32";
	public name: string = "Construct Exotic Date";
	public nickName: string = "DateEx";
	public category: string = "Maths";
	public subCategory: string = "Time";
	public description: string = "Construct a date using a specific calendar";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"year_y": ConstructExoticDateInput_year_y,
		"month_m": ConstructExoticDateInput_month_m,
		"day_d": ConstructExoticDateInput_day_d,
	}

	public output:
	{
		"time_t": ConstructExoticDateOutput_time_t,
	}

	constructor() {
		super();
		this.input = {
			"year_y": new ConstructExoticDateInput_year_y(),
			"month_m": new ConstructExoticDateInput_month_m(),
			"day_d": new ConstructExoticDateInput_day_d(),
		}
		this.output = {
			"time_t": new ConstructExoticDateOutput_time_t(),
		}
	}

}

class ConstructExoticDateInput_year_y extends ResthopperParameter {

	public name: string = "Year";
	public nickName: string = "Y";
	public description: string = "Year number (must be between 1 and 9999)"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructExoticDateInput_month_m extends ResthopperParameter {

	public name: string = "Month";
	public nickName: string = "M";
	public description: string = "Month number (must be between 1 and 12)"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructExoticDateInput_day_d extends ResthopperParameter {

	public name: string = "Day";
	public nickName: string = "D";
	public description: string = "Day of month (must be between 1 and 31)"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructExoticDateOutput_time_t extends ResthopperParameter {

	public name: string = "Time";
	public nickName: string = "T";
	public description: string = "Gregorian representation of date."
	public isOptional: boolean = false;
	public typeName: string = "Time"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
