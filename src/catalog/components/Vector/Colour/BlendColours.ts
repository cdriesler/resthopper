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
		"ColourA_A": BlendColoursInput_ColourA_A,
		"ColourB_B": BlendColoursInput_ColourB_B,
		"Factor_F": BlendColoursInput_Factor_F,
	}

	public output:
	{
		"Colour_C": BlendColoursOutput_Colour_C,
	}

	constructor() {
		super();
		this.input = {
			"ColourA_A": new BlendColoursInput_ColourA_A(),
			"ColourB_B": new BlendColoursInput_ColourB_B(),
			"Factor_F": new BlendColoursInput_Factor_F(),
		}
		this.output = {
			"Colour_C": new BlendColoursOutput_Colour_C(),
		}
	}

}

class BlendColoursInput_ColourA_A extends ResthopperParameter {

	public name: string = "ColourA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Colour;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlendColoursInput_ColourB_B extends ResthopperParameter {

	public name: string = "ColourB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Colour;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlendColoursInput_Factor_F extends ResthopperParameter {

	public name: string = "Factor";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BlendColoursOutput_Colour_C extends ResthopperParameter {

	public name: string = "Colour";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Colour;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
