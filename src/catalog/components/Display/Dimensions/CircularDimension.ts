import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CircularDimension extends ResthopperComponent {

	public guid: string = "7e9489e0-122d-401a-aba8-f1dae0217c40";
	public name: string = "CircularDimension";
	public category: string = "Display";
	public subCategory: string = "Dimensions";
	public description: string = "Create an angle annotation projected to a circle.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Circle_C": CircularDimensionInput_Circle_C,
		"PointA_A": CircularDimensionInput_PointA_A,
		"PointB_B": CircularDimensionInput_PointB_B,
		"Text_T": CircularDimensionInput_Text_T,
		"Size_S": CircularDimensionInput_Size_S,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"Circle_C": new CircularDimensionInput_Circle_C(),
			"PointA_A": new CircularDimensionInput_PointA_A(),
			"PointB_B": new CircularDimensionInput_PointB_B(),
			"Text_T": new CircularDimensionInput_Text_T(),
			"Size_S": new CircularDimensionInput_Size_S(),
		}
		this.output = {

		}
	}

}

class CircularDimensionInput_Circle_C extends ResthopperParameter {

	public name: string = "Circle";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Circle;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircularDimensionInput_PointA_A extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircularDimensionInput_PointB_B extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircularDimensionInput_Text_T extends ResthopperParameter {

	public name: string = "Text";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircularDimensionInput_Size_S extends ResthopperParameter {

	public name: string = "Size";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
