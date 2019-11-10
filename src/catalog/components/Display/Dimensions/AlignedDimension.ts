import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class AlignedDimension extends ResthopperComponent {

	public guid: string = "3de3d3a0-1a1b-488c-b3d9-3fba0fdf07a8";
	public name: string = "AlignedDimension";
	public category: string = "Display";
	public subCategory: string = "Dimensions";
	public description: string = "Create a distance annotation between two points";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Plane_P": AlignedDimensionInput_Plane_P,
		"PointA_A": AlignedDimensionInput_PointA_A,
		"PointB_B": AlignedDimensionInput_PointB_B,
		"Offset_O": AlignedDimensionInput_Offset_O,
		"Text_T": AlignedDimensionInput_Text_T,
		"Size_S": AlignedDimensionInput_Size_S,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"Plane_P": new AlignedDimensionInput_Plane_P(),
			"PointA_A": new AlignedDimensionInput_PointA_A(),
			"PointB_B": new AlignedDimensionInput_PointB_B(),
			"Offset_O": new AlignedDimensionInput_Offset_O(),
			"Text_T": new AlignedDimensionInput_Text_T(),
			"Size_S": new AlignedDimensionInput_Size_S(),
		}
		this.output = {

		}
	}

}

class AlignedDimensionInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AlignedDimensionInput_PointA_A extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AlignedDimensionInput_PointB_B extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AlignedDimensionInput_Offset_O extends ResthopperParameter {

	public name: string = "Offset";
	public nickName: string = "O";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AlignedDimensionInput_Text_T extends ResthopperParameter {

	public name: string = "Text";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AlignedDimensionInput_Size_S extends ResthopperParameter {

	public name: string = "Size";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
