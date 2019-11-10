import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SerialDimension extends ResthopperComponent {

	public guid: string = "7dd42002-75bb-4f41-857f-472a140b3b28";
	public name: string = "SerialDimension";
	public category: string = "Display";
	public subCategory: string = "Dimensions";
	public description: string = "Create a distance annotation between multiple points, projected to a line.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Line_L": SerialDimensionInput_Line_L,
		"Points_P": SerialDimensionInput_Points_P,
		"Text_T": SerialDimensionInput_Text_T,
		"Size_S": SerialDimensionInput_Size_S,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"Line_L": new SerialDimensionInput_Line_L(),
			"Points_P": new SerialDimensionInput_Points_P(),
			"Text_T": new SerialDimensionInput_Text_T(),
			"Size_S": new SerialDimensionInput_Size_S(),
		}
		this.output = {

		}
	}

}

class SerialDimensionInput_Line_L extends ResthopperParameter {

	public name: string = "Line";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SerialDimensionInput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SerialDimensionInput_Text_T extends ResthopperParameter {

	public name: string = "Text";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SerialDimensionInput_Size_S extends ResthopperParameter {

	public name: string = "Size";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
