import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TextTag extends ResthopperComponent {

	public guid: string = "3b220754-4114-4170-b6c3-b286b86ed524";
	public name: string = "TextTag";
	public category: string = "Display";
	public subCategory: string = "Dimensions";
	public description: string = "Represents a list of text tags in a Rhino viewport";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

	public input:
	{
		"Location_L": TextTagInput_Location_L,
		"Text_T": TextTagInput_Text_T,
		"Colour_C": TextTagInput_Colour_C,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"Location_L": new TextTagInput_Location_L(),
			"Text_T": new TextTagInput_Text_T(),
			"Colour_C": new TextTagInput_Colour_C(),
		}
		this.output = {

		}
	}

}

class TextTagInput_Location_L extends ResthopperParameter {

	public name: string = "Location";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TextTagInput_Text_T extends ResthopperParameter {

	public name: string = "Text";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TextTagInput_Colour_C extends ResthopperParameter {

	public name: string = "Colour";
	public nickName: string = "C";
	public isOptional: boolean = true;
	public typeName: string = "Colour;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
