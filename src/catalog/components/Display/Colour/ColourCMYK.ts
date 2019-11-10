import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ColourCMYK extends ResthopperComponent {

	public guid: string = "17af01a5-a846-4769-9478-de1df65a0afa";
	public name: string = "ColourCMYK";
	public category: string = "Display";
	public subCategory: string = "Colour";
	public description: string = "Create a colour from floating point {CMYK} channels.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Cyan_C": ColourCMYKInput_Cyan_C,
		"Magenta_M": ColourCMYKInput_Magenta_M,
		"Yellow_Y": ColourCMYKInput_Yellow_Y,
		"Key_K": ColourCMYKInput_Key_K,
	}

	public output:
	{
		"Colour_C": ColourCMYKOutput_Colour_C,
	}

	constructor() {
		super();
		this.input = {
			"Cyan_C": new ColourCMYKInput_Cyan_C(),
			"Magenta_M": new ColourCMYKInput_Magenta_M(),
			"Yellow_Y": new ColourCMYKInput_Yellow_Y(),
			"Key_K": new ColourCMYKInput_Key_K(),
		}
		this.output = {
			"Colour_C": new ColourCMYKOutput_Colour_C(),
		}
	}

}

class ColourCMYKInput_Cyan_C extends ResthopperParameter {

	public name: string = "Cyan";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourCMYKInput_Magenta_M extends ResthopperParameter {

	public name: string = "Magenta";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourCMYKInput_Yellow_Y extends ResthopperParameter {

	public name: string = "Yellow";
	public nickName: string = "Y";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourCMYKInput_Key_K extends ResthopperParameter {

	public name: string = "Key";
	public nickName: string = "K";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourCMYKOutput_Colour_C extends ResthopperParameter {

	public name: string = "Colour";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Colour;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
