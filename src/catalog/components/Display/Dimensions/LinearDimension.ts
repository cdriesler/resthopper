import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class LinearDimension extends ResthopperComponent {

	public guid: string = "5018bf8d-8566-4917-a6e3-5a623bda8079";
	public name: string = "LinearDimension";
	public category: string = "Display";
	public subCategory: string = "Dimensions";
	public description: string = "Create a distance annotation between points, projected to a line.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Line_L": LinearDimensionInput_Line_L,
		"PointA_A": LinearDimensionInput_PointA_A,
		"PointB_B": LinearDimensionInput_PointB_B,
		"Text_T": LinearDimensionInput_Text_T,
		"Size_S": LinearDimensionInput_Size_S,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"Line_L": new LinearDimensionInput_Line_L(),
			"PointA_A": new LinearDimensionInput_PointA_A(),
			"PointB_B": new LinearDimensionInput_PointB_B(),
			"Text_T": new LinearDimensionInput_Text_T(),
			"Size_S": new LinearDimensionInput_Size_S(),
		}
		this.output = {

		}
	}

}

class LinearDimensionInput_Line_L extends ResthopperParameter {

	public name: string = "Line";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LinearDimensionInput_PointA_A extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LinearDimensionInput_PointB_B extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LinearDimensionInput_Text_T extends ResthopperParameter {

	public name: string = "Text";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LinearDimensionInput_Size_S extends ResthopperParameter {

	public name: string = "Size";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
