import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SplitARGB extends ResthopperComponent {

	public guid: string = "350f7d03-a48f-4121-bcee-328cfe1ed9ef";
	public name: string = "SplitARGB";
	public category: string = "Display";
	public subCategory: string = "Colour";
	public description: string = "Split a colour into floating point {ARGB} channels.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"colour_c": SplitARGBInput_colour_c,
	}

	public output:
	{
		"alpha_a": SplitARGBOutput_alpha_a,
		"red_r": SplitARGBOutput_red_r,
		"green_g": SplitARGBOutput_green_g,
		"blue_b": SplitARGBOutput_blue_b,
	}

	constructor() {
		super();
		this.input = {
			"colour_c": new SplitARGBInput_colour_c(),
		}
		this.output = {
			"alpha_a": new SplitARGBOutput_alpha_a(),
			"red_r": new SplitARGBOutput_red_r(),
			"green_g": new SplitARGBOutput_green_g(),
			"blue_b": new SplitARGBOutput_blue_b(),
		}
	}

}

class SplitARGBInput_colour_c extends ResthopperParameter {

	public name: string = "Colour";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Colour;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitARGBOutput_alpha_a extends ResthopperParameter {

	public name: string = "Alpha";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitARGBOutput_red_r extends ResthopperParameter {

	public name: string = "Red";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitARGBOutput_green_g extends ResthopperParameter {

	public name: string = "Green";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitARGBOutput_blue_b extends ResthopperParameter {

	public name: string = "Blue";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
