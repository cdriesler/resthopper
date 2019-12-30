import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CircularDimension extends ResthopperComponent {

	public guid: string = "7e9489e0-122d-401a-aba8-f1dae0217c40";
	public name: string = "Circular Dimension";
	public nickName: string = "CircleDim";
	public category: string = "Display";
	public subCategory: string = "Dimensions";
	public description: string = "Create an angle annotation projected to a circle.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"circle_c": CircularDimensionInput_circle_c,
		"pointa_a": CircularDimensionInput_pointa_a,
		"pointb_b": CircularDimensionInput_pointb_b,
		"text_t": CircularDimensionInput_text_t,
		"size_s": CircularDimensionInput_size_s,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"circle_c": new CircularDimensionInput_circle_c(),
			"pointa_a": new CircularDimensionInput_pointa_a(),
			"pointb_b": new CircularDimensionInput_pointb_b(),
			"text_t": new CircularDimensionInput_text_t(),
			"size_s": new CircularDimensionInput_size_s(),
		}
		this.output = {

		}
	}

}

class CircularDimensionInput_circle_c extends ResthopperParameter {

	public name: string = "Circle";
	public nickName: string = "C";
	public description: string = "Dimension guide circle"
	public isOptional: boolean = false;
	public typeName: string = "Circle"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircularDimensionInput_pointa_a extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "A";
	public description: string = "First angle point"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircularDimensionInput_pointb_b extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "B";
	public description: string = "Second angle point"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircularDimensionInput_text_t extends ResthopperParameter {

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

class CircularDimensionInput_size_s extends ResthopperParameter {

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
