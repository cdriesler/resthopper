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
		"location_l": TextTagInput_location_l,
		"text_t": TextTagInput_text_t,
		"colour_c": TextTagInput_colour_c,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"location_l": new TextTagInput_location_l(),
			"text_t": new TextTagInput_text_t(),
			"colour_c": new TextTagInput_colour_c(),
		}
		this.output = {

		}
	}

}

class TextTagInput_location_l extends ResthopperParameter {

	public name: string = "Location";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TextTagInput_text_t extends ResthopperParameter {

	public name: string = "Text";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TextTagInput_colour_c extends ResthopperParameter {

	public name: string = "Colour";
	public nickName: string = "C";
	public isOptional: boolean = true;
	public typeName: string = "Colour"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
