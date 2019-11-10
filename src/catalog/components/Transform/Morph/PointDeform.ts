import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PointDeform extends ResthopperComponent {

	public guid: string = "4dbd15c7-ebcb-4af6-b3bd-32e80502520c";
	public name: string = "PointDeform";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Deform a shape by moving control-points individually";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"geometry_g": PointDeformInput_geometry_g,
		"points_p": PointDeformInput_points_p,
		"motion_m": PointDeformInput_motion_m,
	}

	public output:
	{
		"geometry_g": PointDeformOutput_geometry_g,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new PointDeformInput_geometry_g(),
			"points_p": new PointDeformInput_points_p(),
			"motion_m": new PointDeformInput_motion_m(),
		}
		this.output = {
			"geometry_g": new PointDeformOutput_geometry_g(),
		}
	}

}

class PointDeformInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointDeformInput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointDeformInput_motion_m extends ResthopperParameter {

	public name: string = "Motion";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointDeformOutput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
