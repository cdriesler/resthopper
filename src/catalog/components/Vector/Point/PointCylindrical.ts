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
		"Baseplane_P": PointCylindricalInput_Baseplane_P,
		"Angle_A": PointCylindricalInput_Angle_A,
		"Radius_R": PointCylindricalInput_Radius_R,
		"Elevation_E": PointCylindricalInput_Elevation_E,
	}

	public output:
	{
		"Point_Pt": PointCylindricalOutput_Point_Pt,
	}

	constructor() {
		super();
		this.input = {
			"Baseplane_P": new PointCylindricalInput_Baseplane_P(),
			"Angle_A": new PointCylindricalInput_Angle_A(),
			"Radius_R": new PointCylindricalInput_Radius_R(),
			"Elevation_E": new PointCylindricalInput_Elevation_E(),
		}
		this.output = {
			"Point_Pt": new PointCylindricalOutput_Point_Pt(),
		}
	}

}

class PointCylindricalInput_Baseplane_P extends ResthopperParameter {

	public name: string = "Baseplane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointCylindricalInput_Angle_A extends ResthopperParameter {

	public name: string = "Angle";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointCylindricalInput_Radius_R extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointCylindricalInput_Elevation_E extends ResthopperParameter {

	public name: string = "Elevation";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointCylindricalOutput_Point_Pt extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "Pt";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
