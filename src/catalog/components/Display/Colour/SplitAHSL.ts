import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SplitAHSL extends ResthopperComponent {

	public guid: string = "0a1331c8-c58d-4b3f-a886-47051532e35e";
	public name: string = "SplitAHSL";
	public category: string = "Display";
	public subCategory: string = "Colour";
	public description: string = "Split a colour into floating point {AHSL} channels";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Colour_C": SplitAHSLInput_Colour_C,
	}

	public output:
	{
		"Alpha_A": SplitAHSLOutput_Alpha_A,
		"Hue_H": SplitAHSLOutput_Hue_H,
		"Saturation_S": SplitAHSLOutput_Saturation_S,
		"Luminance_L": SplitAHSLOutput_Luminance_L,
	}

	constructor() {
		super();
		this.input = {
			"Colour_C": new SplitAHSLInput_Colour_C(),
		}
		this.output = {
			"Alpha_A": new SplitAHSLOutput_Alpha_A(),
			"Hue_H": new SplitAHSLOutput_Hue_H(),
			"Saturation_S": new SplitAHSLOutput_Saturation_S(),
			"Luminance_L": new SplitAHSLOutput_Luminance_L(),
		}
	}

}

class SplitAHSLInput_Colour_C extends ResthopperParameter {

	public name: string = "Colour";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Colour;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitAHSLOutput_Alpha_A extends ResthopperParameter {

	public name: string = "Alpha";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitAHSLOutput_Hue_H extends ResthopperParameter {

	public name: string = "Hue";
	public nickName: string = "H";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitAHSLOutput_Saturation_S extends ResthopperParameter {

	public name: string = "Saturation";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitAHSLOutput_Luminance_L extends ResthopperParameter {

	public name: string = "Luminance";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
