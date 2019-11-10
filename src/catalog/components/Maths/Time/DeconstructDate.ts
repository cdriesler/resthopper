import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DeconstructDate extends ResthopperComponent {

	public guid: string = "d5e28df8-495b-4892-bca8-60748743d955";
	public name: string = "DeconstructDate";
	public category: string = "Maths";
	public subCategory: string = "Time";
	public description: string = "Deconstruct a date into years, months, days, hours, minutes and seconds";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Date_D": DeconstructDateInput_Date_D,
	}

	public output:
	{
		"Year_Y": DeconstructDateOutput_Year_Y,
		"Month_M": DeconstructDateOutput_Month_M,
		"Day_D": DeconstructDateOutput_Day_D,
		"Hour_h": DeconstructDateOutput_Hour_h,
		"Minute_m": DeconstructDateOutput_Minute_m,
		"Second_s": DeconstructDateOutput_Second_s,
	}

	constructor() {
		super();
		this.input = {
			"Date_D": new DeconstructDateInput_Date_D(),
		}
		this.output = {
			"Year_Y": new DeconstructDateOutput_Year_Y(),
			"Month_M": new DeconstructDateOutput_Month_M(),
			"Day_D": new DeconstructDateOutput_Day_D(),
			"Hour_h": new DeconstructDateOutput_Hour_h(),
			"Minute_m": new DeconstructDateOutput_Minute_m(),
			"Second_s": new DeconstructDateOutput_Second_s(),
		}
	}

}

class DeconstructDateInput_Date_D extends ResthopperParameter {

	public name: string = "Date";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Time;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructDateOutput_Year_Y extends ResthopperParameter {

	public name: string = "Year";
	public nickName: string = "Y";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructDateOutput_Month_M extends ResthopperParameter {

	public name: string = "Month";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructDateOutput_Day_D extends ResthopperParameter {

	public name: string = "Day";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructDateOutput_Hour_h extends ResthopperParameter {

	public name: string = "Hour";
	public nickName: string = "h";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructDateOutput_Minute_m extends ResthopperParameter {

	public name: string = "Minute";
	public nickName: string = "m";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructDateOutput_Second_s extends ResthopperParameter {

	public name: string = "Second";
	public nickName: string = "s";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
