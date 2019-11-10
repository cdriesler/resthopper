import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ColourLCH extends ResthopperComponent {

	public guid: string = "75a07554-8a2c-4d87-81b9-d854f498509d";
	public name: string = "ColourLCH";
	public category: string = "Display";
	public subCategory: string = "Colour";
	public description: string = "Create a colour from floating point {CIE LCH} channels.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Alpha_A": ColourLCHInput_Alpha_A,
		"Luminance_L": ColourLCHInput_Luminance_L,
		"Chroma_C": ColourLCHInput_Chroma_C,
		"Hue_H": ColourLCHInput_Hue_H,
	}

	public output:
	{
		"Colour_C": ColourLCHOutput_Colour_C,
	}

	constructor() {
		super();
		this.input = {
			"Alpha_A": new ColourLCHInput_Alpha_A(),
			"Luminance_L": new ColourLCHInput_Luminance_L(),
			"Chroma_C": new ColourLCHInput_Chroma_C(),
			"Hue_H": new ColourLCHInput_Hue_H(),
		}
		this.output = {
			"Colour_C": new ColourLCHOutput_Colour_C(),
		}
	}

}

class ColourLCHInput_Alpha_A extends ResthopperParameter {

	public name: string = "Alpha";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourLCHInput_Luminance_L extends ResthopperParameter {

	public name: string = "Luminance";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourLCHInput_Chroma_C extends ResthopperParameter {

	public name: string = "Chroma";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourLCHInput_Hue_H extends ResthopperParameter {

	public name: string = "Hue";
	public nickName: string = "H";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourLCHOutput_Colour_C extends ResthopperParameter {

	public name: string = "Colour";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Colour;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
