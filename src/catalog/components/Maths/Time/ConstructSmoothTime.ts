import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ConstructSmoothTime extends ResthopperComponent {

	public guid: string = "f151b0b9-cef8-4809-96fc-9b14f1c3a7b9";
	public name: string = "ConstructSmoothTime";
	public category: string = "Maths";
	public subCategory: string = "Time";
	public description: string = "Construct a time instance from smooth components";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Days_D": ConstructSmoothTimeInput_Days_D,
		"Hours_H": ConstructSmoothTimeInput_Hours_H,
		"Minutes_M": ConstructSmoothTimeInput_Minutes_M,
		"Seconds_S": ConstructSmoothTimeInput_Seconds_S,
	}

	public output:
	{
		"Time_T": ConstructSmoothTimeOutput_Time_T,
	}

	constructor() {
		super();
		this.input = {
			"Days_D": new ConstructSmoothTimeInput_Days_D(),
			"Hours_H": new ConstructSmoothTimeInput_Hours_H(),
			"Minutes_M": new ConstructSmoothTimeInput_Minutes_M(),
			"Seconds_S": new ConstructSmoothTimeInput_Seconds_S(),
		}
		this.output = {
			"Time_T": new ConstructSmoothTimeOutput_Time_T(),
		}
	}

}

class ConstructSmoothTimeInput_Days_D extends ResthopperParameter {

	public name: string = "Days";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructSmoothTimeInput_Hours_H extends ResthopperParameter {

	public name: string = "Hours";
	public nickName: string = "H";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructSmoothTimeInput_Minutes_M extends ResthopperParameter {

	public name: string = "Minutes";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructSmoothTimeInput_Seconds_S extends ResthopperParameter {

	public name: string = "Seconds";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructSmoothTimeOutput_Time_T extends ResthopperParameter {

	public name: string = "Time";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Time;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
