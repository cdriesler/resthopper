import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ColourLab extends ResthopperComponent {

	public guid: string = "f922ed44-6e4a-44a0-8b4b-4b4a46bdfe29";
	public name: string = "Colour L*ab";
	public nickName: string = "LAB";
	public category: string = "Display";
	public subCategory: string = "Colour";
	public description: string = "Create a colour from floating point {CIE L*ab} channels.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"a_a": ColourLabInput_a_a,
		"luminance_l": ColourLabInput_luminance_l,
		"b_b": ColourLabInput_b_b,
	}

	public output:
	{
		"colour_c": ColourLabOutput_colour_c,
	}

	constructor() {
		super();
		this.input = {
			"a_a": new ColourLabInput_a_a(),
			"luminance_l": new ColourLabInput_luminance_l(),
			"b_b": new ColourLabInput_b_b(),
		}
		this.output = {
			"colour_c": new ColourLabOutput_colour_c(),
		}
	}

}

class ColourLabInput_a_a extends ResthopperParameter {

	public name: string = "A";
	public nickName: string = "A";
	public description: string = "First colour channel (A is defined in the range {0.0 to 1.0})"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourLabInput_luminance_l extends ResthopperParameter {

	public name: string = "Luminance";
	public nickName: string = "L";
	public description: string = "Luminance channel (luminance is defined in the range {0.0 to 1.0})"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourLabInput_b_b extends ResthopperParameter {

	public name: string = "B";
	public nickName: string = "B";
	public description: string = "Opposing colour channel (B is defined in the range {0.0 to 1.0})"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourLabOutput_colour_c extends ResthopperParameter {

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
