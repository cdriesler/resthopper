import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BoundsTwoD extends ResthopperComponent {

	public guid: string = "dd53b24c-003a-4a04-b185-a44d91633cbe";
	public name: string = "Bounds2D";
	public category: string = "Maths";
	public subCategory: string = "Domain";
	public description: string = "Create a numeric two-dimensional domain which encompasses a list of coordinates.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Coordinates_C": BoundsTwoDInput_Coordinates_C,
	}

	public output:
	{
		"Domain_I": BoundsTwoDOutput_Domain_I,
	}

	constructor() {
		super();
		this.input = {
			"Coordinates_C": new BoundsTwoDInput_Coordinates_C(),
		}
		this.output = {
			"Domain_I": new BoundsTwoDOutput_Domain_I(),
		}
	}

}

class BoundsTwoDInput_Coordinates_C extends ResthopperParameter {

	public name: string = "Coordinates";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoundsTwoDOutput_Domain_I extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Domain²;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
