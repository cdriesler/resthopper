import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ColourRGB extends ResthopperComponent {

	public guid: string = "49d2e200-b34e-4e1c-82a3-07feb4cb9378";
	public name: string = "ColourRGB";
	public category: string = "Display";
	public subCategory: string = "Colour";
	public description: string = "Create a colour from {RGB} channels.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"alpha_a": ColourRGBInput_alpha_a,
		"red_r": ColourRGBInput_red_r,
		"green_g": ColourRGBInput_green_g,
		"blue_b": ColourRGBInput_blue_b,
	}

	public output:
	{
		"colour_c": ColourRGBOutput_colour_c,
	}

	constructor() {
		super();
		this.input = {
			"alpha_a": new ColourRGBInput_alpha_a(),
			"red_r": new ColourRGBInput_red_r(),
			"green_g": new ColourRGBInput_green_g(),
			"blue_b": new ColourRGBInput_blue_b(),
		}
		this.output = {
			"colour_c": new ColourRGBOutput_colour_c(),
		}
	}

}

class ColourRGBInput_alpha_a extends ResthopperParameter {

	public name: string = "Alpha";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourRGBInput_red_r extends ResthopperParameter {

	public name: string = "Red";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourRGBInput_green_g extends ResthopperParameter {

	public name: string = "Green";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourRGBInput_blue_b extends ResthopperParameter {

	public name: string = "Blue";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourRGBOutput_colour_c extends ResthopperParameter {

	public name: string = "Colour";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Colour"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
