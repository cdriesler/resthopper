import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ConstructDate extends ResthopperComponent {

	public guid: string = "0c2f0932-5ddc-4ece-bd84-a3a059d3df7a";
	public name: string = "ConstructDate";
	public category: string = "Maths";
	public subCategory: string = "Time";
	public description: string = "Construct a date and time instance.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"year_y": ConstructDateInput_year_y,
		"month_m": ConstructDateInput_month_m,
		"day_d": ConstructDateInput_day_d,
		"hour_h": ConstructDateInput_hour_h,
		"minute_m": ConstructDateInput_minute_m,
		"second_s": ConstructDateInput_second_s,
	}

	public output:
	{
		"date_d": ConstructDateOutput_date_d,
	}

	constructor() {
		super();
		this.input = {
			"year_y": new ConstructDateInput_year_y(),
			"month_m": new ConstructDateInput_month_m(),
			"day_d": new ConstructDateInput_day_d(),
			"hour_h": new ConstructDateInput_hour_h(),
			"minute_m": new ConstructDateInput_minute_m(),
			"second_s": new ConstructDateInput_second_s(),
		}
		this.output = {
			"date_d": new ConstructDateOutput_date_d(),
		}
	}

}

class ConstructDateInput_year_y extends ResthopperParameter {

	public name: string = "Year";
	public nickName: string = "Y";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructDateInput_month_m extends ResthopperParameter {

	public name: string = "Month";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructDateInput_day_d extends ResthopperParameter {

	public name: string = "Day";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructDateInput_hour_h extends ResthopperParameter {

	public name: string = "Hour";
	public nickName: string = "h";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructDateInput_minute_m extends ResthopperParameter {

	public name: string = "Minute";
	public nickName: string = "m";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructDateInput_second_s extends ResthopperParameter {

	public name: string = "Second";
	public nickName: string = "s";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructDateOutput_date_d extends ResthopperParameter {

	public name: string = "Date";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Time;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
