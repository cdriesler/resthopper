import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SplitAHSV extends ResthopperComponent {

	public guid: string = "d84d2c2a-2813-4667-afb4-46642581e5f9";
	public name: string = "SplitAHSV";
	public category: string = "Display";
	public subCategory: string = "Colour";
	public description: string = "Split a colour into floating point {AHSV} channels";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Colour_C": SplitAHSVInput_Colour_C,
	}

	public output:
	{
		"Alpha_A": SplitAHSVOutput_Alpha_A,
		"Hue_H": SplitAHSVOutput_Hue_H,
		"Saturation_S": SplitAHSVOutput_Saturation_S,
		"Value_V": SplitAHSVOutput_Value_V,
	}

	constructor() {
		super();
		this.input = {
			"Colour_C": new SplitAHSVInput_Colour_C(),
		}
		this.output = {
			"Alpha_A": new SplitAHSVOutput_Alpha_A(),
			"Hue_H": new SplitAHSVOutput_Hue_H(),
			"Saturation_S": new SplitAHSVOutput_Saturation_S(),
			"Value_V": new SplitAHSVOutput_Value_V(),
		}
	}

}

class SplitAHSVInput_Colour_C extends ResthopperParameter {

	public name: string = "Colour";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Colour;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitAHSVOutput_Alpha_A extends ResthopperParameter {

	public name: string = "Alpha";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitAHSVOutput_Hue_H extends ResthopperParameter {

	public name: string = "Hue";
	public nickName: string = "H";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitAHSVOutput_Saturation_S extends ResthopperParameter {

	public name: string = "Saturation";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SplitAHSVOutput_Value_V extends ResthopperParameter {

	public name: string = "Value";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
