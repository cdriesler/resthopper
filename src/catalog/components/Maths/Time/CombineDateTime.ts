import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CombineDateTime extends ResthopperComponent {

	public guid: string = "31534405-6573-4be6-8bf8-262e55847a3a";
	public name: string = "CombineDateTime";
	public category: string = "Maths";
	public subCategory: string = "Time";
	public description: string = "Combine a pure date and a pure time into a single date";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Date_D": CombineDateTimeInput_Date_D,
		"Time_T": CombineDateTimeInput_Time_T,
	}

	public output:
	{
		"Result_R": CombineDateTimeOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"Date_D": new CombineDateTimeInput_Date_D(),
			"Time_T": new CombineDateTimeInput_Time_T(),
		}
		this.output = {
			"Result_R": new CombineDateTimeOutput_Result_R(),
		}
	}

}

class CombineDateTimeInput_Date_D extends ResthopperParameter {

	public name: string = "Date";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Time;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CombineDateTimeInput_Time_T extends ResthopperParameter {

	public name: string = "Time";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Time;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CombineDateTimeOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Time;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
