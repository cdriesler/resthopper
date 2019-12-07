import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BoundsTwoD extends ResthopperComponent {

	public guid: string = "dd53b24c-003a-4a04-b185-a44d91633cbe";
	public name: string = "Bounds2D";
	public nickName: string = "Bnd";
	public category: string = "Maths";
	public subCategory: string = "Domain";
	public description: string = "Create a numeric two-dimensional domain which encompasses a list of coordinates.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"coordinates_c": BoundsTwoDInput_coordinates_c,
	}

	public output:
	{
		"domain_i": BoundsTwoDOutput_domain_i,
	}

	constructor() {
		super();
		this.input = {
			"coordinates_c": new BoundsTwoDInput_coordinates_c(),
		}
		this.output = {
			"domain_i": new BoundsTwoDOutput_domain_i(),
		}
	}

}

class BoundsTwoDInput_coordinates_c extends ResthopperParameter {

	public name: string = "Coordinates";
	public nickName: string = "C";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoundsTwoDOutput_domain_i extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "I";
	public description: string = "Empty Domain² parameter"
	public isOptional: boolean = false;
	public typeName: string = "Domain²"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
