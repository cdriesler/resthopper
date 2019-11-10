import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ColourRGBf extends ResthopperComponent {

	public guid: string = "f35132c0-c298-4b9c-b446-42e960f52677";
	public name: string = "ColourRGBf";
	public category: string = "Display";
	public subCategory: string = "Colour";
	public description: string = "Create a colour from floating point {RGB} channels.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"alpha_a": ColourRGBfInput_alpha_a,
		"red_r": ColourRGBfInput_red_r,
		"green_g": ColourRGBfInput_green_g,
		"blue_b": ColourRGBfInput_blue_b,
	}

	public output:
	{
		"colour_c": ColourRGBfOutput_colour_c,
	}

	constructor() {
		super();
		this.input = {
			"alpha_a": new ColourRGBfInput_alpha_a(),
			"red_r": new ColourRGBfInput_red_r(),
			"green_g": new ColourRGBfInput_green_g(),
			"blue_b": new ColourRGBfInput_blue_b(),
		}
		this.output = {
			"colour_c": new ColourRGBfOutput_colour_c(),
		}
	}

}

class ColourRGBfInput_alpha_a extends ResthopperParameter {

	public name: string = "Alpha";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourRGBfInput_red_r extends ResthopperParameter {

	public name: string = "Red";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourRGBfInput_green_g extends ResthopperParameter {

	public name: string = "Green";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourRGBfInput_blue_b extends ResthopperParameter {

	public name: string = "Blue";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourRGBfOutput_colour_c extends ResthopperParameter {

	public name: string = "Colour";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Colour"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
