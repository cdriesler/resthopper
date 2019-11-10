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

	public library: string = "Math Components";

	public input:
	{
		"Alpha_A": ColourRGBfInput_Alpha_A,
		"Red_R": ColourRGBfInput_Red_R,
		"Green_G": ColourRGBfInput_Green_G,
		"Blue_B": ColourRGBfInput_Blue_B,
	}

	public output:
	{
		"Colour_C": ColourRGBfOutput_Colour_C,
	}

	constructor() {
		super();
		this.input = {
			"Alpha_A": new ColourRGBfInput_Alpha_A(),
			"Red_R": new ColourRGBfInput_Red_R(),
			"Green_G": new ColourRGBfInput_Green_G(),
			"Blue_B": new ColourRGBfInput_Blue_B(),
		}
		this.output = {
			"Colour_C": new ColourRGBfOutput_Colour_C(),
		}
	}

}

class ColourRGBfInput_Alpha_A extends ResthopperParameter {

	public name: string = "Alpha";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourRGBfInput_Red_R extends ResthopperParameter {

	public name: string = "Red";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourRGBfInput_Green_G extends ResthopperParameter {

	public name: string = "Green";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourRGBfInput_Blue_B extends ResthopperParameter {

	public name: string = "Blue";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourRGBfOutput_Colour_C extends ResthopperParameter {

	public name: string = "Colour";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Colour;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
