import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SphereFourPt extends ResthopperComponent {

	public guid: string = "b083c06d-9a71-4f40-b354-1d80bba1e858";
	public name: string = "Sphere4Pt";
	public nickName: string = "Sph4Pt";
	public category: string = "Surface";
	public subCategory: string = "Primitive";
	public description: string = "Create a spherical surface from 4 points.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"point1_p1": SphereFourPtInput_point1_p1,
		"point2_p2": SphereFourPtInput_point2_p2,
		"point3_p3": SphereFourPtInput_point3_p3,
		"point4_p4": SphereFourPtInput_point4_p4,
	}

	public output:
	{
		"center_c": SphereFourPtOutput_center_c,
		"radius_r": SphereFourPtOutput_radius_r,
		"sphere_s": SphereFourPtOutput_sphere_s,
	}

	constructor() {
		super();
		this.input = {
			"point1_p1": new SphereFourPtInput_point1_p1(),
			"point2_p2": new SphereFourPtInput_point2_p2(),
			"point3_p3": new SphereFourPtInput_point3_p3(),
			"point4_p4": new SphereFourPtInput_point4_p4(),
		}
		this.output = {
			"center_c": new SphereFourPtOutput_center_c(),
			"radius_r": new SphereFourPtOutput_radius_r(),
			"sphere_s": new SphereFourPtOutput_sphere_s(),
		}
	}

}

class SphereFourPtInput_point1_p1 extends ResthopperParameter {

	public name: string = "Point1";
	public nickName: string = "P1";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SphereFourPtInput_point2_p2 extends ResthopperParameter {

	public name: string = "Point2";
	public nickName: string = "P2";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SphereFourPtInput_point3_p3 extends ResthopperParameter {

	public name: string = "Point3";
	public nickName: string = "P3";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SphereFourPtInput_point4_p4 extends ResthopperParameter {

	public name: string = "Point4";
	public nickName: string = "P4";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SphereFourPtOutput_center_c extends ResthopperParameter {

	public name: string = "Center";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SphereFourPtOutput_radius_r extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SphereFourPtOutput_sphere_s extends ResthopperParameter {

	public name: string = "Sphere";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
