import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ConstructExoticDate extends ResthopperComponent {

	public guid: string = "e5ff52c5-40df-4f43-ac3b-d2418d05ae32";
	public name: string = "ConstructExoticDate";
	public category: string = "Maths";
	public subCategory: string = "Time";
	public description: string = "Construct a date using a specific calendar";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Year_Y": ConstructExoticDateInput_Year_Y,
		"Month_M": ConstructExoticDateInput_Month_M,
		"Day_D": ConstructExoticDateInput_Day_D,
	}

	public output:
	{
		"Time_T": ConstructExoticDateOutput_Time_T,
	}

	constructor() {
		super();
		this.input = {
			"Year_Y": new ConstructExoticDateInput_Year_Y(),
			"Month_M": new ConstructExoticDateInput_Month_M(),
			"Day_D": new ConstructExoticDateInput_Day_D(),
		}
		this.output = {
			"Time_T": new ConstructExoticDateOutput_Time_T(),
		}
	}

}

class ConstructExoticDateInput_Year_Y extends ResthopperParameter {

	public name: string = "Year";
	public nickName: string = "Y";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructExoticDateInput_Month_M extends ResthopperParameter {

	public name: string = "Month";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructExoticDateInput_Day_D extends ResthopperParameter {

	public name: string = "Day";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructExoticDateOutput_Time_T extends ResthopperParameter {

	public name: string = "Time";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Time;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
