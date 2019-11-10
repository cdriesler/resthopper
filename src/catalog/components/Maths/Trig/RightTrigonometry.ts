import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RightTrigonometry extends ResthopperComponent {

	public guid: string = "e75d4624-8ee2-4067-ac8d-c56bdc901d83";
	public name: string = "RightTrigonometry";
	public category: string = "Maths";
	public subCategory: string = "Trig";
	public description: string = "Right triangle trigonometry";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Beta_": RightTrigonometryInput_Beta_,
		"Plength_P": RightTrigonometryInput_Plength_P,
		"Qlength_Q": RightTrigonometryInput_Qlength_Q,
		"Rlength_R": RightTrigonometryInput_Rlength_R,
	}

	public output:
	{
		"Beta_": RightTrigonometryOutput_Beta_,
		"Plength_P": RightTrigonometryOutput_Plength_P,
		"Qlength_Q": RightTrigonometryOutput_Qlength_Q,
		"Rlength_R": RightTrigonometryOutput_Rlength_R,
	}

	constructor() {
		super();
		this.input = {
			"Beta_": new RightTrigonometryInput_Beta_(),
			"Plength_P": new RightTrigonometryInput_Plength_P(),
			"Qlength_Q": new RightTrigonometryInput_Qlength_Q(),
			"Rlength_R": new RightTrigonometryInput_Rlength_R(),
		}
		this.output = {
			"Beta_": new RightTrigonometryOutput_Beta_(),
			"Plength_P": new RightTrigonometryOutput_Plength_P(),
			"Qlength_Q": new RightTrigonometryOutput_Qlength_Q(),
			"Rlength_R": new RightTrigonometryOutput_Rlength_R(),
		}
	}

}

class RightTrigonometryInput_Beta_ extends ResthopperParameter {

	public name: string = "Beta";
	public nickName: string = "";
	public isOptional: boolean = true;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RightTrigonometryInput_Plength_P extends ResthopperParameter {

	public name: string = "Plength";
	public nickName: string = "P";
	public isOptional: boolean = true;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RightTrigonometryInput_Qlength_Q extends ResthopperParameter {

	public name: string = "Qlength";
	public nickName: string = "Q";
	public isOptional: boolean = true;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RightTrigonometryInput_Rlength_R extends ResthopperParameter {

	public name: string = "Rlength";
	public nickName: string = "R";
	public isOptional: boolean = true;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RightTrigonometryOutput_Beta_ extends ResthopperParameter {

	public name: string = "Beta";
	public nickName: string = "";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RightTrigonometryOutput_Plength_P extends ResthopperParameter {

	public name: string = "Plength";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RightTrigonometryOutput_Qlength_Q extends ResthopperParameter {

	public name: string = "Qlength";
	public nickName: string = "Q";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RightTrigonometryOutput_Rlength_R extends ResthopperParameter {

	public name: string = "Rlength";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
