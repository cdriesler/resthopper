import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RightTrigonometry extends ResthopperComponent {

	public guid: string = "e75d4624-8ee2-4067-ac8d-c56bdc901d83";
	public name: string = "Right Trigonometry";
	public nickName: string = "RTrig";
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
	public description: string = "Optional beta angle"
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
	public description: string = "Optional length of P edge"
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
	public description: string = "Optional length of Q edge"
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
	public description: string = "Optional length of R edge"
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
	public description: string = "Computed beta angle"
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
	public description: string = "Computed length of P edge"
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
	public description: string = "Computed length of Q edge"
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
	public description: string = "Computed length of R edge"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
