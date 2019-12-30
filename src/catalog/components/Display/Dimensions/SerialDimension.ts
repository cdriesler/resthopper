import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SerialDimension extends ResthopperComponent {

	public guid: string = "7dd42002-75bb-4f41-857f-472a140b3b28";
	public name: string = "Serial Dimension";
	public nickName: string = "SerialDim";
	public category: string = "Display";
	public subCategory: string = "Dimensions";
	public description: string = "Create a distance annotation between multiple points, projected to a line.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"line_l": SerialDimensionInput_line_l,
		"points_p": SerialDimensionInput_points_p,
		"text_t": SerialDimensionInput_text_t,
		"size_s": SerialDimensionInput_size_s,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"line_l": new SerialDimensionInput_line_l(),
			"points_p": new SerialDimensionInput_points_p(),
			"text_t": new SerialDimensionInput_text_t(),
			"size_s": new SerialDimensionInput_size_s(),
		}
		this.output = {

		}
	}

}

class SerialDimensionInput_line_l extends ResthopperParameter {

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

class SerialDimensionInput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public description: string = "Dimension points, the first one marks the zero point"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SerialDimensionInput_text_t extends ResthopperParameter {

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

class SerialDimensionInput_size_s extends ResthopperParameter {

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
