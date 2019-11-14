import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TriangleTrigonometry extends ResthopperComponent {

	public guid: string = "92af1a02-9b87-43a0-8c45-0ce1b81555ec";
	public name: string = "TriangleTrigonometry";
	public nickName: string = "Trig";
	public category: string = "Maths";
	public subCategory: string = "Trig";
	public description: string = "Generic triangle trigonometry";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"gamma_": TriangleTrigonometryInput_gamma_,
		"alength_a": TriangleTrigonometryInput_alength_a,
		"blength_b": TriangleTrigonometryInput_blength_b,
		"clength_c": TriangleTrigonometryInput_clength_c,
	}

	public output:
	{
		"gamma_": TriangleTrigonometryOutput_gamma_,
		"alength_a": TriangleTrigonometryOutput_alength_a,
		"blength_b": TriangleTrigonometryOutput_blength_b,
		"clength_c": TriangleTrigonometryOutput_clength_c,
	}

	constructor() {
		super();
		this.input = {
			"gamma_": new TriangleTrigonometryInput_gamma_(),
			"alength_a": new TriangleTrigonometryInput_alength_a(),
			"blength_b": new TriangleTrigonometryInput_blength_b(),
			"clength_c": new TriangleTrigonometryInput_clength_c(),
		}
		this.output = {
			"gamma_": new TriangleTrigonometryOutput_gamma_(),
			"alength_a": new TriangleTrigonometryOutput_alength_a(),
			"blength_b": new TriangleTrigonometryOutput_blength_b(),
			"clength_c": new TriangleTrigonometryOutput_clength_c(),
		}
	}

}

class TriangleTrigonometryInput_gamma_ extends ResthopperParameter {

	public name: string = "Gamma";
	public nickName: string = "";
	public isOptional: boolean = true;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TriangleTrigonometryInput_alength_a extends ResthopperParameter {

	public name: string = "Alength";
	public nickName: string = "A";
	public isOptional: boolean = true;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TriangleTrigonometryInput_blength_b extends ResthopperParameter {

	public name: string = "Blength";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TriangleTrigonometryInput_clength_c extends ResthopperParameter {

	public name: string = "Clength";
	public nickName: string = "C";
	public isOptional: boolean = true;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TriangleTrigonometryOutput_gamma_ extends ResthopperParameter {

	public name: string = "Gamma";
	public nickName: string = "";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TriangleTrigonometryOutput_alength_a extends ResthopperParameter {

	public name: string = "Alength";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TriangleTrigonometryOutput_blength_b extends ResthopperParameter {

	public name: string = "Blength";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TriangleTrigonometryOutput_clength_c extends ResthopperParameter {

	public name: string = "Clength";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
