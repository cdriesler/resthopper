import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TextTagThreeD extends ResthopperComponent {

	public guid: string = "5a41528b-12b9-40dc-a3f2-842034d267c4";
	public name: string = "TextTag3D";
	public category: string = "Display";
	public subCategory: string = "Dimensions";
	public description: string = "Represents a list of 3D text tags in a Rhino viewport";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

	public input:
	{
		"Location_L": TextTagThreeDInput_Location_L,
		"Text_T": TextTagThreeDInput_Text_T,
		"Size_S": TextTagThreeDInput_Size_S,
		"Colour_C": TextTagThreeDInput_Colour_C,
		"Justification_J": TextTagThreeDInput_Justification_J,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"Location_L": new TextTagThreeDInput_Location_L(),
			"Text_T": new TextTagThreeDInput_Text_T(),
			"Size_S": new TextTagThreeDInput_Size_S(),
			"Colour_C": new TextTagThreeDInput_Colour_C(),
			"Justification_J": new TextTagThreeDInput_Justification_J(),
		}
		this.output = {

		}
	}

}

class TextTagThreeDInput_Location_L extends ResthopperParameter {

	public name: string = "Location";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TextTagThreeDInput_Text_T extends ResthopperParameter {

	public name: string = "Text";
	public nickName: string = "T";
	public isOptional: boolean = true;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TextTagThreeDInput_Size_S extends ResthopperParameter {

	public name: string = "Size";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TextTagThreeDInput_Colour_C extends ResthopperParameter {

	public name: string = "Colour";
	public nickName: string = "C";
	public isOptional: boolean = true;
	public typeName: string = "Colour;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TextTagThreeDInput_Justification_J extends ResthopperParameter {

	public name: string = "Justification";
	public nickName: string = "J";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
