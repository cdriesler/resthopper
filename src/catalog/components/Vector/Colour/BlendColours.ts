import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BlendColours extends ResthopperComponent {

	public guid: string = "8b4da37d-1124-436a-9de2-952e4224a220";
	public name: string = "BlendColours";
	public category: string = "Vector";
	public subCategory: string = "Colour";
	public description: string = "Interpolate (blend) between two colours.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"coloura_a": BlendColoursInput_coloura_a,
		"colourb_b": BlendColoursInput_colourb_b,
		"factor_f": BlendColoursInput_factor_f,
	}

	public output:
	{
		"colour_c": BlendColoursOutput_colour_c,
	}

	constructor() {
		super();
		this.input = {
			"coloura_a": new BlendColoursInput_coloura_a(),
			"colourb_b": new BlendColoursInput_colourb_b(),
			"factor_f": new BlendColoursInput_factor_f(),
		}
		this.output = {
			"colour_c": new BlendColoursOutput_colour_c(),
		}
	}

}

class BlendColoursInput_coloura_a extends ResthopperParameter {

	public name: string = "ColourA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Colour"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlendColoursInput_colourb_b extends ResthopperParameter {

	public name: string = "ColourB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Colour"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlendColoursInput_factor_f extends ResthopperParameter {

	public name: string = "Factor";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlendColoursOutput_colour_c extends ResthopperParameter {

	public name: string = "Colour";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Colour"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
