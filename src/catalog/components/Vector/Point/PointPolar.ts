import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PointPolar extends ResthopperComponent {

	public guid: string = "a435f5c8-28a2-43e8-a52a-0b6e73c2e300";
	public name: string = "PointPolar";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Create a point from polar {phi,theta,offset} coordinates.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Baseplane_P": PointPolarInput_Baseplane_P,
		"XYangle_xy": PointPolarInput_XYangle_xy,
		"Zangle_z": PointPolarInput_Zangle_z,
		"Offset_d": PointPolarInput_Offset_d,
	}

	public output:
	{
		"Point_Pt": PointPolarOutput_Point_Pt,
	}

	constructor() {
		super();
		this.input = {
			"Baseplane_P": new PointPolarInput_Baseplane_P(),
			"XYangle_xy": new PointPolarInput_XYangle_xy(),
			"Zangle_z": new PointPolarInput_Zangle_z(),
			"Offset_d": new PointPolarInput_Offset_d(),
		}
		this.output = {
			"Point_Pt": new PointPolarOutput_Point_Pt(),
		}
	}

}

class PointPolarInput_Baseplane_P extends ResthopperParameter {

	public name: string = "Baseplane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointPolarInput_XYangle_xy extends ResthopperParameter {

	public name: string = "XYangle";
	public nickName: string = "xy";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointPolarInput_Zangle_z extends ResthopperParameter {

	public name: string = "Zangle";
	public nickName: string = "z";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointPolarInput_Offset_d extends ResthopperParameter {

	public name: string = "Offset";
	public nickName: string = "d";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointPolarOutput_Point_Pt extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "Pt";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
