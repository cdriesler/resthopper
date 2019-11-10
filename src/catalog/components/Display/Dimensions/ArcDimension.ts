import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ArcDimension extends ResthopperComponent {

	public guid: string = "1bd97813-4fec-4453-9645-4ac920844f9d";
	public name: string = "ArcDimension";
	public category: string = "Display";
	public subCategory: string = "Dimensions";
	public description: string = "Create an angle annotation based on an arc.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Arc_A": ArcDimensionInput_Arc_A,
		"Offset_O": ArcDimensionInput_Offset_O,
		"Text_T": ArcDimensionInput_Text_T,
		"Size_S": ArcDimensionInput_Size_S,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"Arc_A": new ArcDimensionInput_Arc_A(),
			"Offset_O": new ArcDimensionInput_Offset_O(),
			"Text_T": new ArcDimensionInput_Text_T(),
			"Size_S": new ArcDimensionInput_Size_S(),
		}
		this.output = {

		}
	}

}

class ArcDimensionInput_Arc_A extends ResthopperParameter {

	public name: string = "Arc";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Arc;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ArcDimensionInput_Offset_O extends ResthopperParameter {

	public name: string = "Offset";
	public nickName: string = "O";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ArcDimensionInput_Text_T extends ResthopperParameter {

	public name: string = "Text";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ArcDimensionInput_Size_S extends ResthopperParameter {

	public name: string = "Size";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
