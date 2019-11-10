import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TriangleTrigonometry extends ResthopperComponent {

	public guid: string = "92af1a02-9b87-43a0-8c45-0ce1b81555ec";
	public name: string = "TriangleTrigonometry";
	public category: string = "Maths";
	public subCategory: string = "Trig";
	public description: string = "Generic triangle trigonometry";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Gamma_": TriangleTrigonometryInput_Gamma_,
		"Alength_A": TriangleTrigonometryInput_Alength_A,
		"Blength_B": TriangleTrigonometryInput_Blength_B,
		"Clength_C": TriangleTrigonometryInput_Clength_C,
	}

	public output:
	{
		"Gamma_": TriangleTrigonometryOutput_Gamma_,
		"Alength_A": TriangleTrigonometryOutput_Alength_A,
		"Blength_B": TriangleTrigonometryOutput_Blength_B,
		"Clength_C": TriangleTrigonometryOutput_Clength_C,
	}

	constructor() {
		super();
		this.input = {
			"Gamma_": new TriangleTrigonometryInput_Gamma_(),
			"Alength_A": new TriangleTrigonometryInput_Alength_A(),
			"Blength_B": new TriangleTrigonometryInput_Blength_B(),
			"Clength_C": new TriangleTrigonometryInput_Clength_C(),
		}
		this.output = {
			"Gamma_": new TriangleTrigonometryOutput_Gamma_(),
			"Alength_A": new TriangleTrigonometryOutput_Alength_A(),
			"Blength_B": new TriangleTrigonometryOutput_Blength_B(),
			"Clength_C": new TriangleTrigonometryOutput_Clength_C(),
		}
	}

}

class TriangleTrigonometryInput_Gamma_ extends ResthopperParameter {

	public name: string = "Gamma";
	public nickName: string = "";
	public isOptional: boolean = true;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TriangleTrigonometryInput_Alength_A extends ResthopperParameter {

	public name: string = "Alength";
	public nickName: string = "A";
	public isOptional: boolean = true;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TriangleTrigonometryInput_Blength_B extends ResthopperParameter {

	public name: string = "Blength";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TriangleTrigonometryInput_Clength_C extends ResthopperParameter {

	public name: string = "Clength";
	public nickName: string = "C";
	public isOptional: boolean = true;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TriangleTrigonometryOutput_Gamma_ extends ResthopperParameter {

	public name: string = "Gamma";
	public nickName: string = "";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TriangleTrigonometryOutput_Alength_A extends ResthopperParameter {

	public name: string = "Alength";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TriangleTrigonometryOutput_Blength_B extends ResthopperParameter {

	public name: string = "Blength";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TriangleTrigonometryOutput_Clength_C extends ResthopperParameter {

	public name: string = "Clength";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
