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
		"geometry_g": SanityXFormInput_geometry_g,
	}

	public output:
	{
		"geometry_g": SanityXFormOutput_geometry_g,
		"wackometry_w": SanityXFormOutput_wackometry_w,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new SanityXFormInput_geometry_g(),
		}
		this.output = {
			"geometry_g": new SanityXFormOutput_geometry_g(),
			"wackometry_w": new SanityXFormOutput_wackometry_w(),
		}
	}

}

class SanityXFormInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SanityXFormOutput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SanityXFormOutput_wackometry_w extends ResthopperParameter {

	public name: string = "Wackometry";
	public nickName: string = "W";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
