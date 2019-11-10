import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class LineDimension extends ResthopperComponent {

	public guid: string = "d78f026a-0109-4bcc-bf91-d08475711466";
	public name: string = "LineDimension";
	public category: string = "Display";
	public subCategory: string = "Dimensions";
	public description: string = "Create a distance annotation along a line.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Line_L": LineDimensionInput_Line_L,
		"Text_T": LineDimensionInput_Text_T,
		"Size_S": LineDimensionInput_Size_S,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"Line_L": new LineDimensionInput_Line_L(),
			"Text_T": new LineDimensionInput_Text_T(),
			"Size_S": new LineDimensionInput_Size_S(),
		}
		this.output = {

		}
	}

}

class LineDimensionInput_Line_L extends ResthopperParameter {

	public name: string = "Line";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineDimensionInput_Text_T extends ResthopperParameter {

	public name: string = "Text";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineDimensionInput_Size_S extends ResthopperParameter {

	public name: string = "Size";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
