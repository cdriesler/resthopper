import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ColourHSV extends ResthopperComponent {

	public guid: string = "5958a658-20c2-4a2b-86ba-4d1b81bf5348";
	public name: string = "ColourHSV";
	public category: string = "Display";
	public subCategory: string = "Colour";
	public description: string = "Create a colour from floating point {HSV} channels.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Alpha_A": ColourHSVInput_Alpha_A,
		"Hue_H": ColourHSVInput_Hue_H,
		"Saturation_S": ColourHSVInput_Saturation_S,
		"Value_V": ColourHSVInput_Value_V,
	}

	public output:
	{
		"Colour_C": ColourHSVOutput_Colour_C,
	}

	constructor() {
		super();
		this.input = {
			"Alpha_A": new ColourHSVInput_Alpha_A(),
			"Hue_H": new ColourHSVInput_Hue_H(),
			"Saturation_S": new ColourHSVInput_Saturation_S(),
			"Value_V": new ColourHSVInput_Value_V(),
		}
		this.output = {
			"Colour_C": new ColourHSVOutput_Colour_C(),
		}
	}

}

class ColourHSVInput_Alpha_A extends ResthopperParameter {

	public name: string = "Alpha";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourHSVInput_Hue_H extends ResthopperParameter {

	public name: string = "Hue";
	public nickName: string = "H";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourHSVInput_Saturation_S extends ResthopperParameter {

	public name: string = "Saturation";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourHSVInput_Value_V extends ResthopperParameter {

	public name: string = "Value";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourHSVOutput_Colour_C extends ResthopperParameter {

	public name: string = "Colour";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Colour;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
