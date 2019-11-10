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
		"Colour_C": SplitARGBInput_Colour_C,
	}

	public output:
	{
		"Alpha_A": SplitARGBOutput_Alpha_A,
		"Red_R": SplitARGBOutput_Red_R,
		"Green_G": SplitARGBOutput_Green_G,
		"Blue_B": SplitARGBOutput_Blue_B,
	}

	constructor() {
		super();
		this.input = {
			"Colour_C": new SplitARGBInput_Colour_C(),
		}
		this.output = {
			"Alpha_A": new SplitARGBOutput_Alpha_A(),
			"Red_R": new SplitARGBOutput_Red_R(),
			"Green_G": new SplitARGBOutput_Green_G(),
			"Blue_B": new SplitARGBOutput_Blue_B(),
		}
	}

}

class SplitARGBInput_Colour_C extends ResthopperParameter {

	public name: string = "Colour";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Colour;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitARGBOutput_Alpha_A extends ResthopperParameter {

	public name: string = "Alpha";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitARGBOutput_Red_R extends ResthopperParameter {

	public name: string = "Red";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitARGBOutput_Green_G extends ResthopperParameter {

	public name: string = "Green";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitARGBOutput_Blue_B extends ResthopperParameter {

	public name: string = "Blue";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
