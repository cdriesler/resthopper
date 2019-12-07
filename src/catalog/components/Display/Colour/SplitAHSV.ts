import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SplitAHSV extends ResthopperComponent {

	public guid: string = "d84d2c2a-2813-4667-afb4-46642581e5f9";
	public name: string = "SplitAHSV";
	public nickName: string = "AHSV";
	public category: string = "Display";
	public subCategory: string = "Colour";
	public description: string = "Split a colour into floating point {AHSV} channels";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"colour_c": SplitAHSVInput_colour_c,
	}

	public output:
	{
		"alpha_a": SplitAHSVOutput_alpha_a,
		"hue_h": SplitAHSVOutput_hue_h,
		"saturation_s": SplitAHSVOutput_saturation_s,
		"value_v": SplitAHSVOutput_value_v,
	}

	constructor() {
		super();
		this.input = {
			"colour_c": new SplitAHSVInput_colour_c(),
		}
		this.output = {
			"alpha_a": new SplitAHSVOutput_alpha_a(),
			"hue_h": new SplitAHSVOutput_hue_h(),
			"saturation_s": new SplitAHSVOutput_saturation_s(),
			"value_v": new SplitAHSVOutput_value_v(),
		}
	}

}

class SplitAHSVInput_colour_c extends ResthopperParameter {

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

class SplitAHSVOutput_alpha_a extends ResthopperParameter {

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

class SplitAHSVOutput_hue_h extends ResthopperParameter {

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

class SplitAHSVOutput_saturation_s extends ResthopperParameter {

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

class SplitAHSVOutput_value_v extends ResthopperParameter {

	public name: string = "Value";
	public nickName: string = "V";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
