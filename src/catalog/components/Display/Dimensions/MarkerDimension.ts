import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MarkerDimension extends ResthopperComponent {

	public guid: string = "c5208969-16f9-48af-8a86-e500c033fb76";
	public name: string = "MarkerDimension";
	public category: string = "Display";
	public subCategory: string = "Dimensions";
	public description: string = "Create a text annotation at a point";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Line_L": MarkerDimensionInput_Line_L,
		"Text_T": MarkerDimensionInput_Text_T,
		"Size_S": MarkerDimensionInput_Size_S,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"Line_L": new MarkerDimensionInput_Line_L(),
			"Text_T": new MarkerDimensionInput_Text_T(),
			"Size_S": new MarkerDimensionInput_Size_S(),
		}
		this.output = {

		}
	}

}

class MarkerDimensionInput_Line_L extends ResthopperParameter {

	public name: string = "Line";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MarkerDimensionInput_Text_T extends ResthopperParameter {

	public name: string = "Text";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MarkerDimensionInput_Size_S extends ResthopperParameter {

	public name: string = "Size";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
