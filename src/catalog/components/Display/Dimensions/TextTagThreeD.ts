import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TextTagThreeD extends ResthopperComponent {

	public guid: string = "5a41528b-12b9-40dc-a3f2-842034d267c4";
	public name: string = "TextTag3D";
	public nickName: string = "Tag";
	public category: string = "Display";
	public subCategory: string = "Dimensions";
	public description: string = "Represents a list of 3D text tags in a Rhino viewport";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Grasshopper";

	public input:
	{
		"location_l": TextTagThreeDInput_location_l,
		"text_t": TextTagThreeDInput_text_t,
		"size_s": TextTagThreeDInput_size_s,
		"colour_c": TextTagThreeDInput_colour_c,
		"justification_j": TextTagThreeDInput_justification_j,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"location_l": new TextTagThreeDInput_location_l(),
			"text_t": new TextTagThreeDInput_text_t(),
			"size_s": new TextTagThreeDInput_size_s(),
			"colour_c": new TextTagThreeDInput_colour_c(),
			"justification_j": new TextTagThreeDInput_justification_j(),
		}
		this.output = {

		}
	}

}

class TextTagThreeDInput_location_l extends ResthopperParameter {

	public name: string = "Location";
	public nickName: string = "L";
	public description: string = "Empty Plane parameter"
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TextTagThreeDInput_text_t extends ResthopperParameter {

	public name: string = "Text";
	public nickName: string = "T";
	public description: string = "Empty Text parameter"
	public isOptional: boolean = true;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TextTagThreeDInput_size_s extends ResthopperParameter {

	public name: string = "Size";
	public nickName: string = "S";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TextTagThreeDInput_colour_c extends ResthopperParameter {

	public name: string = "Colour";
	public nickName: string = "C";
	public description: string = "Empty Colour parameter"
	public isOptional: boolean = true;
	public typeName: string = "Colour"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TextTagThreeDInput_justification_j extends ResthopperParameter {

	public name: string = "Justification";
	public nickName: string = "J";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
