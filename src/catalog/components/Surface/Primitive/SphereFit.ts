import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SphereFit extends ResthopperComponent {

	public guid: string = "e7ffb3af-2d77-4804-a260-755308bf8285";
	public name: string = "SphereFit";
	public nickName: string = "SFit";
	public category: string = "Surface";
	public subCategory: string = "Primitive";
	public description: string = "Fit a sphere to a 3D collection of points";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Triangulation Components";

	public input:
	{
		"points_p": SphereFitInput_points_p,
	}

	public output:
	{
		"center_c": SphereFitOutput_center_c,
		"radius_r": SphereFitOutput_radius_r,
		"sphere_s": SphereFitOutput_sphere_s,
	}

	constructor() {
		super();
		this.input = {
			"points_p": new SphereFitInput_points_p(),
		}
		this.output = {
			"center_c": new SphereFitOutput_center_c(),
			"radius_r": new SphereFitOutput_radius_r(),
			"sphere_s": new SphereFitOutput_sphere_s(),
		}
	}

}

class SphereFitInput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SphereFitOutput_center_c extends ResthopperParameter {

	public name: string = "Center";
	public nickName: string = "C";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SphereFitOutput_radius_r extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SphereFitOutput_sphere_s extends ResthopperParameter {

	public name: string = "Sphere";
	public nickName: string = "S";
	public description: string = "Empty Surface parameter"
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
