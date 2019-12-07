import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MarkerDimension extends ResthopperComponent {

	public guid: string = "c5208969-16f9-48af-8a86-e500c033fb76";
	public name: string = "MarkerDimension";
	public nickName: string = "MarkDim";
	public category: string = "Display";
	public subCategory: string = "Dimensions";
	public description: string = "Create a text annotation at a point";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"line_l": MarkerDimensionInput_line_l,
		"text_t": MarkerDimensionInput_text_t,
		"size_s": MarkerDimensionInput_size_s,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"line_l": new MarkerDimensionInput_line_l(),
			"text_t": new MarkerDimensionInput_text_t(),
			"size_s": new MarkerDimensionInput_size_s(),
		}
		this.output = {

		}
	}

}

class MarkerDimensionInput_line_l extends ResthopperParameter {

	public name: string = "Line";
	public nickName: string = "L";
	public description: string = "Empty Line parameter"
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MarkerDimensionInput_text_t extends ResthopperParameter {

	public name: string = "Text";
	public nickName: string = "T";
	public description: string = "Empty Text parameter"
	public isOptional: boolean = false;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MarkerDimensionInput_size_s extends ResthopperParameter {

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
