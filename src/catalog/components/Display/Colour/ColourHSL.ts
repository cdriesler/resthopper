import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ColourHSL extends ResthopperComponent {

	public guid: string = "a45d68b3-c299-4b17-bdae-7975f216cec6";
	public name: string = "ColourHSL";
	public nickName: string = "HSL";
	public category: string = "Display";
	public subCategory: string = "Colour";
	public description: string = "Create a colour from floating point {HSL} channels.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"alpha_a": ColourHSLInput_alpha_a,
		"hue_h": ColourHSLInput_hue_h,
		"saturation_s": ColourHSLInput_saturation_s,
		"luminance_l": ColourHSLInput_luminance_l,
	}

	public output:
	{
		"colour_c": ColourHSLOutput_colour_c,
	}

	constructor() {
		super();
		this.input = {
			"alpha_a": new ColourHSLInput_alpha_a(),
			"hue_h": new ColourHSLInput_hue_h(),
			"saturation_s": new ColourHSLInput_saturation_s(),
			"luminance_l": new ColourHSLInput_luminance_l(),
		}
		this.output = {
			"colour_c": new ColourHSLOutput_colour_c(),
		}
	}

}

class ColourHSLInput_alpha_a extends ResthopperParameter {

	public name: string = "Alpha";
	public nickName: string = "A";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourHSLInput_hue_h extends ResthopperParameter {

	public name: string = "Hue";
	public nickName: string = "H";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourHSLInput_saturation_s extends ResthopperParameter {

	public name: string = "Saturation";
	public nickName: string = "S";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourHSLInput_luminance_l extends ResthopperParameter {

	public name: string = "Luminance";
	public nickName: string = "L";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourHSLOutput_colour_c extends ResthopperParameter {

	public name: string = "Colour";
	public nickName: string = "C";
	public description: string = "Empty Colour parameter"
	public isOptional: boolean = false;
	public typeName: string = "Colour"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
