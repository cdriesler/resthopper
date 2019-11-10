import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ColourXYZ extends ResthopperComponent {

	public guid: string = "77185dc2-2f18-469d-9686-00f5b6049195";
	public name: string = "ColourXYZ";
	public category: string = "Display";
	public subCategory: string = "Colour";
	public description: string = "Create a colour from floating point {XYZ} channels (CIE 1931 spec).";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Alpha_A": ColourXYZInput_Alpha_A,
		"X_X": ColourXYZInput_X_X,
		"Y_Y": ColourXYZInput_Y_Y,
		"Z_Z": ColourXYZInput_Z_Z,
	}

	public output:
	{
		"Colour_C": ColourXYZOutput_Colour_C,
	}

	constructor() {
		super();
		this.input = {
			"Alpha_A": new ColourXYZInput_Alpha_A(),
			"X_X": new ColourXYZInput_X_X(),
			"Y_Y": new ColourXYZInput_Y_Y(),
			"Z_Z": new ColourXYZInput_Z_Z(),
		}
		this.output = {
			"Colour_C": new ColourXYZOutput_Colour_C(),
		}
	}

}

class ColourXYZInput_Alpha_A extends ResthopperParameter {

	public name: string = "Alpha";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourXYZInput_X_X extends ResthopperParameter {

	public name: string = "X";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourXYZInput_Y_Y extends ResthopperParameter {

	public name: string = "Y";
	public nickName: string = "Y";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourXYZInput_Z_Z extends ResthopperParameter {

	public name: string = "Z";
	public nickName: string = "Z";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourXYZOutput_Colour_C extends ResthopperParameter {

	public name: string = "Colour";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Colour;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
