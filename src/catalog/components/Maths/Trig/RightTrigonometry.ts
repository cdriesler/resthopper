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
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"beta_": RightTrigonometryInput_beta_,
		"plength_p": RightTrigonometryInput_plength_p,
		"qlength_q": RightTrigonometryInput_qlength_q,
		"rlength_r": RightTrigonometryInput_rlength_r,
	}

	public output:
	{
		"beta_": RightTrigonometryOutput_beta_,
		"plength_p": RightTrigonometryOutput_plength_p,
		"qlength_q": RightTrigonometryOutput_qlength_q,
		"rlength_r": RightTrigonometryOutput_rlength_r,
	}

	constructor() {
		super();
		this.input = {
			"beta_": new RightTrigonometryInput_beta_(),
			"plength_p": new RightTrigonometryInput_plength_p(),
			"qlength_q": new RightTrigonometryInput_qlength_q(),
			"rlength_r": new RightTrigonometryInput_rlength_r(),
		}
		this.output = {
			"beta_": new RightTrigonometryOutput_beta_(),
			"plength_p": new RightTrigonometryOutput_plength_p(),
			"qlength_q": new RightTrigonometryOutput_qlength_q(),
			"rlength_r": new RightTrigonometryOutput_rlength_r(),
		}
	}

}

class RightTrigonometryInput_beta_ extends ResthopperParameter {

	public name: string = "Beta";
	public nickName: string = "";
	public isOptional: boolean = true;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RightTrigonometryInput_plength_p extends ResthopperParameter {

	public name: string = "Plength";
	public nickName: string = "P";
	public isOptional: boolean = true;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RightTrigonometryInput_qlength_q extends ResthopperParameter {

	public name: string = "Qlength";
	public nickName: string = "Q";
	public isOptional: boolean = true;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RightTrigonometryInput_rlength_r extends ResthopperParameter {

	public name: string = "Rlength";
	public nickName: string = "R";
	public isOptional: boolean = true;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RightTrigonometryOutput_beta_ extends ResthopperParameter {

	public name: string = "Beta";
	public nickName: string = "";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RightTrigonometryOutput_plength_p extends ResthopperParameter {

	public name: string = "Plength";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RightTrigonometryOutput_qlength_q extends ResthopperParameter {

	public name: string = "Qlength";
	public nickName: string = "Q";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RightTrigonometryOutput_rlength_r extends ResthopperParameter {

	public name: string = "Rlength";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
