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

	public library: string = "Math Components";

	public input:
	{
		"Alpha_A": ColourRGBInput_Alpha_A,
		"Red_R": ColourRGBInput_Red_R,
		"Green_G": ColourRGBInput_Green_G,
		"Blue_B": ColourRGBInput_Blue_B,
	}

	public output:
	{
		"Colour_C": ColourRGBOutput_Colour_C,
	}

	constructor() {
		super();
		this.input = {
			"Alpha_A": new ColourRGBInput_Alpha_A(),
			"Red_R": new ColourRGBInput_Red_R(),
			"Green_G": new ColourRGBInput_Green_G(),
			"Blue_B": new ColourRGBInput_Blue_B(),
		}
		this.output = {
			"Colour_C": new ColourRGBOutput_Colour_C(),
		}
	}

}

class ColourRGBInput_Alpha_A extends ResthopperParameter {

	public name: string = "Alpha";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourRGBInput_Red_R extends ResthopperParameter {

	public name: string = "Red";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourRGBInput_Green_G extends ResthopperParameter {

	public name: string = "Green";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourRGBInput_Blue_B extends ResthopperParameter {

	public name: string = "Blue";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourRGBOutput_Colour_C extends ResthopperParameter {

	public name: string = "Colour";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Colour;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
