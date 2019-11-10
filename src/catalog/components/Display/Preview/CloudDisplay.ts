import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CloudDisplay extends ResthopperComponent {

	public guid: string = "059b72b0-9bb3-4542-a805-2dcd27493164";
	public name: string = "CloudDisplay";
	public category: string = "Display";
	public subCategory: string = "Preview";
	public description: string = "Draw a collection of points as a fuzzy cloud";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Points_P": CloudDisplayInput_Points_P,
		"Colours_C": CloudDisplayInput_Colours_C,
		"Size_S": CloudDisplayInput_Size_S,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"Points_P": new CloudDisplayInput_Points_P(),
			"Colours_C": new CloudDisplayInput_Colours_C(),
			"Size_S": new CloudDisplayInput_Size_S(),
		}
		this.output = {

		}
	}

}

class CloudDisplayInput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = true;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CloudDisplayInput_Colours_C extends ResthopperParameter {

	public name: string = "Colours";
	public nickName: string = "C";
	public isOptional: boolean = true;
	public typeName: string = "Colour;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CloudDisplayInput_Size_S extends ResthopperParameter {

	public name: string = "Size";
	public nickName: string = "S";
	public isOptional: boolean = true;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
