import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ColourLab extends ResthopperComponent {

	public guid: string = "f922ed44-6e4a-44a0-8b4b-4b4a46bdfe29";
	public name: string = "ColourLab";
	public category: string = "Display";
	public subCategory: string = "Colour";
	public description: string = "Create a colour from floating point {CIE L*ab} channels.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"A_A": ColourLabInput_A_A,
		"Luminance_L": ColourLabInput_Luminance_L,
		"B_B": ColourLabInput_B_B,
	}

	public output:
	{
		"Colour_C": ColourLabOutput_Colour_C,
	}

	constructor() {
		super();
		this.input = {
			"A_A": new ColourLabInput_A_A(),
			"Luminance_L": new ColourLabInput_Luminance_L(),
			"B_B": new ColourLabInput_B_B(),
		}
		this.output = {
			"Colour_C": new ColourLabOutput_Colour_C(),
		}
	}

}

class ColourLabInput_A_A extends ResthopperParameter {

	public name: string = "A";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourLabInput_Luminance_L extends ResthopperParameter {

	public name: string = "Luminance";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourLabInput_B_B extends ResthopperParameter {

	public name: string = "B";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourLabOutput_Colour_C extends ResthopperParameter {

	public name: string = "Colour";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Colour;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
