import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ColourHSL extends ResthopperComponent {

	public guid: string = "a45d68b3-c299-4b17-bdae-7975f216cec6";
	public name: string = "ColourHSL";
	public category: string = "Display";
	public subCategory: string = "Colour";
	public description: string = "Create a colour from floating point {HSL} channels.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Alpha_A": ColourHSLInput_Alpha_A,
		"Hue_H": ColourHSLInput_Hue_H,
		"Saturation_S": ColourHSLInput_Saturation_S,
		"Luminance_L": ColourHSLInput_Luminance_L,
	}

	public output:
	{
		"Colour_C": ColourHSLOutput_Colour_C,
	}

	constructor() {
		super();
		this.input = {
			"Alpha_A": new ColourHSLInput_Alpha_A(),
			"Hue_H": new ColourHSLInput_Hue_H(),
			"Saturation_S": new ColourHSLInput_Saturation_S(),
			"Luminance_L": new ColourHSLInput_Luminance_L(),
		}
		this.output = {
			"Colour_C": new ColourHSLOutput_Colour_C(),
		}
	}

}

class ColourHSLInput_Alpha_A extends ResthopperParameter {

	public name: string = "Alpha";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourHSLInput_Hue_H extends ResthopperParameter {

	public name: string = "Hue";
	public nickName: string = "H";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourHSLInput_Saturation_S extends ResthopperParameter {

	public name: string = "Saturation";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourHSLInput_Luminance_L extends ResthopperParameter {

	public name: string = "Luminance";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourHSLOutput_Colour_C extends ResthopperParameter {

	public name: string = "Colour";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Colour;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
