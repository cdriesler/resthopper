import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SplitAHSL extends ResthopperComponent {

	public guid: string = "0a1331c8-c58d-4b3f-a886-47051532e35e";
	public name: string = "Split AHSL";
	public nickName: string = "AHSL";
	public category: string = "Display";
	public subCategory: string = "Colour";
	public description: string = "Split a colour into floating point {AHSL} channels";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"colour_c": SplitAHSLInput_colour_c,
	}

	public output:
	{
		"alpha_a": SplitAHSLOutput_alpha_a,
		"hue_h": SplitAHSLOutput_hue_h,
		"saturation_s": SplitAHSLOutput_saturation_s,
		"luminance_l": SplitAHSLOutput_luminance_l,
	}

	constructor() {
		super();
		this.input = {
			"colour_c": new SplitAHSLInput_colour_c(),
		}
		this.output = {
			"alpha_a": new SplitAHSLOutput_alpha_a(),
			"hue_h": new SplitAHSLOutput_hue_h(),
			"saturation_s": new SplitAHSLOutput_saturation_s(),
			"luminance_l": new SplitAHSLOutput_luminance_l(),
		}
	}

}

class SplitAHSLInput_colour_c extends ResthopperParameter {

	public name: string = "Colour";
	public nickName: string = "C";
	public description: string = "Input colour"
	public isOptional: boolean = false;
	public typeName: string = "Colour"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitAHSLOutput_alpha_a extends ResthopperParameter {

	public name: string = "Alpha";
	public nickName: string = "A";
	public description: string = "Alpha channel"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitAHSLOutput_hue_h extends ResthopperParameter {

	public name: string = "Hue";
	public nickName: string = "H";
	public description: string = "Hue"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitAHSLOutput_saturation_s extends ResthopperParameter {

	public name: string = "Saturation";
	public nickName: string = "S";
	public description: string = "Saturation"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitAHSLOutput_luminance_l extends ResthopperParameter {

	public name: string = "Luminance";
	public nickName: string = "L";
	public description: string = "Luminance"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
