import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class LineDimension extends ResthopperComponent {

	public guid: string = "d78f026a-0109-4bcc-bf91-d08475711466";
	public name: string = "Line Dimension";
	public nickName: string = "LineDim";
	public category: string = "Display";
	public subCategory: string = "Dimensions";
	public description: string = "Create a distance annotation along a line.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"line_l": LineDimensionInput_line_l,
		"text_t": LineDimensionInput_text_t,
		"size_s": LineDimensionInput_size_s,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"line_l": new LineDimensionInput_line_l(),
			"text_t": new LineDimensionInput_text_t(),
			"size_s": new LineDimensionInput_size_s(),
		}
		this.output = {

		}
	}

}

class LineDimensionInput_line_l extends ResthopperParameter {

	public name: string = "Line";
	public nickName: string = "L";
	public description: string = "Dimension base line"
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineDimensionInput_text_t extends ResthopperParameter {

	public name: string = "Text";
	public nickName: string = "T";
	public description: string = "Dimension text"
	public isOptional: boolean = false;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LineDimensionInput_size_s extends ResthopperParameter {

	public name: string = "Size";
	public nickName: string = "S";
	public description: string = "Dimension size"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
