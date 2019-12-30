import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class LinearDimension extends ResthopperComponent {

	public guid: string = "5018bf8d-8566-4917-a6e3-5a623bda8079";
	public name: string = "Linear Dimension";
	public nickName: string = "LinearDim";
	public category: string = "Display";
	public subCategory: string = "Dimensions";
	public description: string = "Create a distance annotation between points, projected to a line.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"line_l": LinearDimensionInput_line_l,
		"pointa_a": LinearDimensionInput_pointa_a,
		"pointb_b": LinearDimensionInput_pointb_b,
		"text_t": LinearDimensionInput_text_t,
		"size_s": LinearDimensionInput_size_s,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"line_l": new LinearDimensionInput_line_l(),
			"pointa_a": new LinearDimensionInput_pointa_a(),
			"pointb_b": new LinearDimensionInput_pointb_b(),
			"text_t": new LinearDimensionInput_text_t(),
			"size_s": new LinearDimensionInput_size_s(),
		}
		this.output = {

		}
	}

}

class LinearDimensionInput_line_l extends ResthopperParameter {

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

class LinearDimensionInput_pointa_a extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "A";
	public description: string = "First dimension point"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LinearDimensionInput_pointb_b extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "B";
	public description: string = "Second dimension point"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LinearDimensionInput_text_t extends ResthopperParameter {

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

class LinearDimensionInput_size_s extends ResthopperParameter {

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
