import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ConstructSmoothTime extends ResthopperComponent {

	public guid: string = "f151b0b9-cef8-4809-96fc-9b14f1c3a7b9";
	public name: string = "Construct Smooth Time";
	public nickName: string = "SmTime";
	public category: string = "Maths";
	public subCategory: string = "Time";
	public description: string = "Construct a time instance from smooth components";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"days_d": ConstructSmoothTimeInput_days_d,
		"hours_h": ConstructSmoothTimeInput_hours_h,
		"minutes_m": ConstructSmoothTimeInput_minutes_m,
		"seconds_s": ConstructSmoothTimeInput_seconds_s,
	}

	public output:
	{
		"time_t": ConstructSmoothTimeOutput_time_t,
	}

	constructor() {
		super();
		this.input = {
			"days_d": new ConstructSmoothTimeInput_days_d(),
			"hours_h": new ConstructSmoothTimeInput_hours_h(),
			"minutes_m": new ConstructSmoothTimeInput_minutes_m(),
			"seconds_s": new ConstructSmoothTimeInput_seconds_s(),
		}
		this.output = {
			"time_t": new ConstructSmoothTimeOutput_time_t(),
		}
	}

}

class ConstructSmoothTimeInput_days_d extends ResthopperParameter {

	public name: string = "Days";
	public nickName: string = "D";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructSmoothTimeInput_hours_h extends ResthopperParameter {

	public name: string = "Hours";
	public nickName: string = "H";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructSmoothTimeInput_minutes_m extends ResthopperParameter {

	public name: string = "Minutes";
	public nickName: string = "M";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructSmoothTimeInput_seconds_s extends ResthopperParameter {

	public name: string = "Seconds";
	public nickName: string = "S";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructSmoothTimeOutput_time_t extends ResthopperParameter {

	public name: string = "Time";
	public nickName: string = "T";
	public description: string = "Empty Time parameter"
	public isOptional: boolean = false;
	public typeName: string = "Time"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
