import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DeconstructDate extends ResthopperComponent {

	public guid: string = "d5e28df8-495b-4892-bca8-60748743d955";
	public name: string = "DeconstructDate";
	public nickName: string = "DDate";
	public category: string = "Maths";
	public subCategory: string = "Time";
	public description: string = "Deconstruct a date into years, months, days, hours, minutes and seconds";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"date_d": DeconstructDateInput_date_d,
	}

	public output:
	{
		"year_y": DeconstructDateOutput_year_y,
		"month_m": DeconstructDateOutput_month_m,
		"day_d": DeconstructDateOutput_day_d,
		"hour_h": DeconstructDateOutput_hour_h,
		"minute_m": DeconstructDateOutput_minute_m,
		"second_s": DeconstructDateOutput_second_s,
	}

	constructor() {
		super();
		this.input = {
			"date_d": new DeconstructDateInput_date_d(),
		}
		this.output = {
			"year_y": new DeconstructDateOutput_year_y(),
			"month_m": new DeconstructDateOutput_month_m(),
			"day_d": new DeconstructDateOutput_day_d(),
			"hour_h": new DeconstructDateOutput_hour_h(),
			"minute_m": new DeconstructDateOutput_minute_m(),
			"second_s": new DeconstructDateOutput_second_s(),
		}
	}

}

class DeconstructDateInput_date_d extends ResthopperParameter {

	public name: string = "Date";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Time"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructDateOutput_year_y extends ResthopperParameter {

	public name: string = "Year";
	public nickName: string = "Y";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructDateOutput_month_m extends ResthopperParameter {

	public name: string = "Month";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructDateOutput_day_d extends ResthopperParameter {

	public name: string = "Day";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructDateOutput_hour_h extends ResthopperParameter {

	public name: string = "Hour";
	public nickName: string = "h";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructDateOutput_minute_m extends ResthopperParameter {

	public name: string = "Minute";
	public nickName: string = "m";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructDateOutput_second_s extends ResthopperParameter {

	public name: string = "Second";
	public nickName: string = "s";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
