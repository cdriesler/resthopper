import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PointPolar extends ResthopperComponent {

	public guid: string = "a435f5c8-28a2-43e8-a52a-0b6e73c2e300";
	public name: string = "Point Polar";
	public nickName: string = "Pt";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Create a point from polar {phi,theta,offset} coordinates.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"baseplane_p": PointPolarInput_baseplane_p,
		"xyangle_xy": PointPolarInput_xyangle_xy,
		"zangle_z": PointPolarInput_zangle_z,
		"offset_d": PointPolarInput_offset_d,
	}

	public output:
	{
		"point_pt": PointPolarOutput_point_pt,
	}

	constructor() {
		super();
		this.input = {
			"baseplane_p": new PointPolarInput_baseplane_p(),
			"xyangle_xy": new PointPolarInput_xyangle_xy(),
			"zangle_z": new PointPolarInput_zangle_z(),
			"offset_d": new PointPolarInput_offset_d(),
		}
		this.output = {
			"point_pt": new PointPolarOutput_point_pt(),
		}
	}

}

class PointPolarInput_baseplane_p extends ResthopperParameter {

	public name: string = "Baseplane";
	public nickName: string = "P";
	public description: string = "Plane defining polar coordinate space"
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointPolarInput_xyangle_xy extends ResthopperParameter {

	public name: string = "XYangle";
	public nickName: string = "xy";
	public description: string = "Angle in radians for P(x,y) rotation"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointPolarInput_zangle_z extends ResthopperParameter {

	public name: string = "Zangle";
	public nickName: string = "z";
	public description: string = "Angle in radians for P(z) rotation"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointPolarInput_offset_d extends ResthopperParameter {

	public name: string = "Offset";
	public nickName: string = "d";
	public description: string = "Offset distance for point"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointPolarOutput_point_pt extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "Pt";
	public description: string = "Polar point coordinate"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
