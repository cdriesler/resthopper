import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ColourCMYK extends ResthopperComponent {

	public guid: string = "17af01a5-a846-4769-9478-de1df65a0afa";
	public name: string = "Colour CMYK";
	public nickName: string = "CMYK";
	public category: string = "Display";
	public subCategory: string = "Colour";
	public description: string = "Create a colour from floating point {CMYK} channels.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"cyan_c": ColourCMYKInput_cyan_c,
		"magenta_m": ColourCMYKInput_magenta_m,
		"yellow_y": ColourCMYKInput_yellow_y,
		"key_k": ColourCMYKInput_key_k,
	}

	public output:
	{
		"colour_c": ColourCMYKOutput_colour_c,
	}

	constructor() {
		super();
		this.input = {
			"cyan_c": new ColourCMYKInput_cyan_c(),
			"magenta_m": new ColourCMYKInput_magenta_m(),
			"yellow_y": new ColourCMYKInput_yellow_y(),
			"key_k": new ColourCMYKInput_key_k(),
		}
		this.output = {
			"colour_c": new ColourCMYKOutput_colour_c(),
		}
	}

}

class ColourCMYKInput_cyan_c extends ResthopperParameter {

	public name: string = "Cyan";
	public nickName: string = "C";
	public description: string = "Cyan channel (cyan is defined in the range {0.0 to 1.0})"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourCMYKInput_magenta_m extends ResthopperParameter {

	public name: string = "Magenta";
	public nickName: string = "M";
	public description: string = "Magenta channel (magenta is defined in the range {0.0 to 1.0})"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourCMYKInput_yellow_y extends ResthopperParameter {

	public name: string = "Yellow";
	public nickName: string = "Y";
	public description: string = "Yellow channel (yellow is defined in the range {0.0 to 1.0})"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourCMYKInput_key_k extends ResthopperParameter {

	public name: string = "Key";
	public nickName: string = "K";
	public description: string = "Key channel (key is defined in the range {0.0 to 1.0})"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourCMYKOutput_colour_c extends ResthopperParameter {

	public name: string = "Colour";
	public nickName: string = "C";
	public description: string = "Resulting colour"
	public isOptional: boolean = false;
	public typeName: string = "Colour"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
