import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DotDisplay extends ResthopperComponent {

	public guid: string = "6b1bd8b2-47a4-4aa6-a471-3fd91c62a486";
	public name: string = "DotDisplay";
	public category: string = "Display";
	public subCategory: string = "Preview";
	public description: string = "Draw a collection of coloured dots";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Point_P": DotDisplayInput_Point_P,
		"Colour_C": DotDisplayInput_Colour_C,
		"Size_S": DotDisplayInput_Size_S,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"Point_P": new DotDisplayInput_Point_P(),
			"Colour_C": new DotDisplayInput_Colour_C(),
			"Size_S": new DotDisplayInput_Size_S(),
		}
		this.output = {

		}
	}

}

class DotDisplayInput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DotDisplayInput_Colour_C extends ResthopperParameter {

	public name: string = "Colour";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Colour;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DotDisplayInput_Size_S extends ResthopperParameter {

	public name: string = "Size";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
