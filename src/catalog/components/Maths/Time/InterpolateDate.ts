import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class InterpolateDate extends ResthopperComponent {

	public guid: string = "4083802b-3dd9-4b13-9756-bf5441213e70";
	public name: string = "InterpolateDate";
	public category: string = "Maths";
	public subCategory: string = "Time";
	public description: string = "Interpolate between two dates or times.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"DateA_A": InterpolateDateInput_DateA_A,
		"DateB_B": InterpolateDateInput_DateB_B,
		"Interpolation_t": InterpolateDateInput_Interpolation_t,
	}

	public output:
	{
		"Date_D": InterpolateDateOutput_Date_D,
	}

	constructor() {
		super();
		this.input = {
			"DateA_A": new InterpolateDateInput_DateA_A(),
			"DateB_B": new InterpolateDateInput_DateB_B(),
			"Interpolation_t": new InterpolateDateInput_Interpolation_t(),
		}
		this.output = {
			"Date_D": new InterpolateDateOutput_Date_D(),
		}
	}

}

class InterpolateDateInput_DateA_A extends ResthopperParameter {

	public name: string = "DateA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Time;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InterpolateDateInput_DateB_B extends ResthopperParameter {

	public name: string = "DateB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Time;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InterpolateDateInput_Interpolation_t extends ResthopperParameter {

	public name: string = "Interpolation";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InterpolateDateOutput_Date_D extends ResthopperParameter {

	public name: string = "Date";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Time;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
