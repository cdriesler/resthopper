import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SphereFit extends ResthopperComponent {

	public guid: string = "e7ffb3af-2d77-4804-a260-755308bf8285";
	public name: string = "SphereFit";
	public category: string = "Surface";
	public subCategory: string = "Primitive";
	public description: string = "Fit a sphere to a 3D collection of points";
	public isObsolete: boolean = false;

	public library: string = "Triangulation Components";

	public input:
	{
		"Points_P": SphereFitInput_Points_P,
	}

	public output:
	{
		"Center_C": SphereFitOutput_Center_C,
		"Radius_R": SphereFitOutput_Radius_R,
		"Sphere_S": SphereFitOutput_Sphere_S,
	}

	constructor() {
		super();
		this.input = {
			"Points_P": new SphereFitInput_Points_P(),
		}
		this.output = {
			"Center_C": new SphereFitOutput_Center_C(),
			"Radius_R": new SphereFitOutput_Radius_R(),
			"Sphere_S": new SphereFitOutput_Sphere_S(),
		}
	}

}

class SphereFitInput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SphereFitOutput_Center_C extends ResthopperParameter {

	public name: string = "Center";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SphereFitOutput_Radius_R extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SphereFitOutput_Sphere_S extends ResthopperParameter {

	public name: string = "Sphere";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
