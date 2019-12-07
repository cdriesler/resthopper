import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ColourLCH extends ResthopperComponent {

	public guid: string = "75a07554-8a2c-4d87-81b9-d854f498509d";
	public name: string = "ColourLCH";
	public nickName: string = "LCH";
	public category: string = "Display";
	public subCategory: string = "Colour";
	public description: string = "Create a colour from floating point {CIE LCH} channels.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"alpha_a": ColourLCHInput_alpha_a,
		"luminance_l": ColourLCHInput_luminance_l,
		"chroma_c": ColourLCHInput_chroma_c,
		"hue_h": ColourLCHInput_hue_h,
	}

	public output:
	{
		"colour_c": ColourLCHOutput_colour_c,
	}

	constructor() {
		super();
		this.input = {
			"alpha_a": new ColourLCHInput_alpha_a(),
			"luminance_l": new ColourLCHInput_luminance_l(),
			"chroma_c": new ColourLCHInput_chroma_c(),
			"hue_h": new ColourLCHInput_hue_h(),
		}
		this.output = {
			"colour_c": new ColourLCHOutput_colour_c(),
		}
	}

}

class ColourLCHInput_alpha_a extends ResthopperParameter {

	public name: string = "Alpha";
	public nickName: string = "A";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourLCHInput_luminance_l extends ResthopperParameter {

	public name: string = "Luminance";
	public nickName: string = "L";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourLCHInput_chroma_c extends ResthopperParameter {

	public name: string = "Chroma";
	public nickName: string = "C";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourLCHInput_hue_h extends ResthopperParameter {

	public name: string = "Hue";
	public nickName: string = "H";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourLCHOutput_colour_c extends ResthopperParameter {

	public name: string = "Colour";
	public nickName: string = "C";
	public description: string = "Empty Colour parameter"
	public isOptional: boolean = false;
	public typeName: string = "Colour"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
