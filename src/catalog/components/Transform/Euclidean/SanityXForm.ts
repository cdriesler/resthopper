import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SanityXForm extends ResthopperComponent {

	public guid: string = "03b3db66-d7e8-4d2d-bc0c-122913317254";
	public name: string = "SanityXForm";
	public category: string = "Transform";
	public subCategory: string = "Euclidean";
	public description: string = "Apply a sanity transformation to f a r - a w a y, tiny or HUGE geometry";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Geometry_G": SanityXFormInput_Geometry_G,
	}

	public output:
	{
		"Geometry_G": SanityXFormOutput_Geometry_G,
		"Wackometry_W": SanityXFormOutput_Wackometry_W,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new SanityXFormInput_Geometry_G(),
		}
		this.output = {
			"Geometry_G": new SanityXFormOutput_Geometry_G(),
			"Wackometry_W": new SanityXFormOutput_Wackometry_W(),
		}
	}

}

class SanityXFormInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SanityXFormOutput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SanityXFormOutput_Wackometry_W extends ResthopperParameter {

	public name: string = "Wackometry";
	public nickName: string = "W";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
