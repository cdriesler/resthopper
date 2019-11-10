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
		"Hour_H": ConstructTimeInput_Hour_H,
		"Minute_M": ConstructTimeInput_Minute_M,
		"Second_S": ConstructTimeInput_Second_S,
	}

	public output:
	{
		"Time_T": ConstructTimeOutput_Time_T,
	}

	constructor() {
		super();
		this.input = {
			"Hour_H": new ConstructTimeInput_Hour_H(),
			"Minute_M": new ConstructTimeInput_Minute_M(),
			"Second_S": new ConstructTimeInput_Second_S(),
		}
		this.output = {
			"Time_T": new ConstructTimeOutput_Time_T(),
		}
	}

}

class ConstructTimeInput_Hour_H extends ResthopperParameter {

	public name: string = "Hour";
	public nickName: string = "H";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructTimeInput_Minute_M extends ResthopperParameter {

	public name: string = "Minute";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructTimeInput_Second_S extends ResthopperParameter {

	public name: string = "Second";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructTimeOutput_Time_T extends ResthopperParameter {

	public name: string = "Time";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Time;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
