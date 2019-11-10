import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ColourHSV extends ResthopperComponent {

	public guid: string = "5958a658-20c2-4a2b-86ba-4d1b81bf5348";
	public name: string = "ColourHSV";
	public category: string = "Display";
	public subCategory: string = "Colour";
	public description: string = "Create a colour from floating point {HSV} channels.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"alpha_a": ColourHSVInput_alpha_a,
		"hue_h": ColourHSVInput_hue_h,
		"saturation_s": ColourHSVInput_saturation_s,
		"value_v": ColourHSVInput_value_v,
	}

	public output:
	{
		"colour_c": ColourHSVOutput_colour_c,
	}

	constructor() {
		super();
		this.input = {
			"alpha_a": new ColourHSVInput_alpha_a(),
			"hue_h": new ColourHSVInput_hue_h(),
			"saturation_s": new ColourHSVInput_saturation_s(),
			"value_v": new ColourHSVInput_value_v(),
		}
		this.output = {
			"colour_c": new ColourHSVOutput_colour_c(),
		}
	}

}

class ColourHSVInput_alpha_a extends ResthopperParameter {

	public name: string = "Alpha";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourHSVInput_hue_h extends ResthopperParameter {

	public name: string = "Hue";
	public nickName: string = "H";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourHSVInput_saturation_s extends ResthopperParameter {

	public name: string = "Saturation";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourHSVInput_value_v extends ResthopperParameter {

	public name: string = "Value";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourHSVOutput_colour_c extends ResthopperParameter {

	public name: string = "Colour";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Colour;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
