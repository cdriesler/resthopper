import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ConstructTime extends ResthopperComponent {

	public guid: string = "595aded2-8916-402d-87a3-a825244bbe3d";
	public name: string = "ConstructTime";
	public category: string = "Maths";
	public subCategory: string = "Time";
	public description: string = "Construct a time instance";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"hour_h": ConstructTimeInput_hour_h,
		"minute_m": ConstructTimeInput_minute_m,
		"second_s": ConstructTimeInput_second_s,
	}

	public output:
	{
		"time_t": ConstructTimeOutput_time_t,
	}

	constructor() {
		super();
		this.input = {
			"hour_h": new ConstructTimeInput_hour_h(),
			"minute_m": new ConstructTimeInput_minute_m(),
			"second_s": new ConstructTimeInput_second_s(),
		}
		this.output = {
			"time_t": new ConstructTimeOutput_time_t(),
		}
	}

}

class ConstructTimeInput_hour_h extends ResthopperParameter {

	public name: string = "Hour";
	public nickName: string = "H";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructTimeInput_minute_m extends ResthopperParameter {

	public name: string = "Minute";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructTimeInput_second_s extends ResthopperParameter {

	public name: string = "Second";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructTimeOutput_time_t extends ResthopperParameter {

	public name: string = "Time";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Time;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
