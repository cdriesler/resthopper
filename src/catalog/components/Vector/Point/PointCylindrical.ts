import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PointCylindrical extends ResthopperComponent {

	public guid: string = "23603075-be64-4d86-9294-c3c125a12104";
	public name: string = "PointCylindrical";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Create a point from cylindrical {angle,radius,elevation} coordinates.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"baseplane_p": PointCylindricalInput_baseplane_p,
		"angle_a": PointCylindricalInput_angle_a,
		"radius_r": PointCylindricalInput_radius_r,
		"elevation_e": PointCylindricalInput_elevation_e,
	}

	public output:
	{
		"point_pt": PointCylindricalOutput_point_pt,
	}

	constructor() {
		super();
		this.input = {
			"baseplane_p": new PointCylindricalInput_baseplane_p(),
			"angle_a": new PointCylindricalInput_angle_a(),
			"radius_r": new PointCylindricalInput_radius_r(),
			"elevation_e": new PointCylindricalInput_elevation_e(),
		}
		this.output = {
			"point_pt": new PointCylindricalOutput_point_pt(),
		}
	}

}

class PointCylindricalInput_baseplane_p extends ResthopperParameter {

	public name: string = "Baseplane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointCylindricalInput_angle_a extends ResthopperParameter {

	public name: string = "Angle";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointCylindricalInput_radius_r extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointCylindricalInput_elevation_e extends ResthopperParameter {

	public name: string = "Elevation";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointCylindricalOutput_point_pt extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "Pt";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
