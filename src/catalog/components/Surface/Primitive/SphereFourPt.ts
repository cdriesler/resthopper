import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SphereFourPt extends ResthopperComponent {

	public guid: string = "b083c06d-9a71-4f40-b354-1d80bba1e858";
	public name: string = "Sphere4Pt";
	public category: string = "Surface";
	public subCategory: string = "Primitive";
	public description: string = "Create a spherical surface from 4 points.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Point1_P1": SphereFourPtInput_Point1_P1,
		"Point2_P2": SphereFourPtInput_Point2_P2,
		"Point3_P3": SphereFourPtInput_Point3_P3,
		"Point4_P4": SphereFourPtInput_Point4_P4,
	}

	public output:
	{
		"Center_C": SphereFourPtOutput_Center_C,
		"Radius_R": SphereFourPtOutput_Radius_R,
		"Sphere_S": SphereFourPtOutput_Sphere_S,
	}

	constructor() {
		super();
		this.input = {
			"Point1_P1": new SphereFourPtInput_Point1_P1(),
			"Point2_P2": new SphereFourPtInput_Point2_P2(),
			"Point3_P3": new SphereFourPtInput_Point3_P3(),
			"Point4_P4": new SphereFourPtInput_Point4_P4(),
		}
		this.output = {
			"Center_C": new SphereFourPtOutput_Center_C(),
			"Radius_R": new SphereFourPtOutput_Radius_R(),
			"Sphere_S": new SphereFourPtOutput_Sphere_S(),
		}
	}

}

class SphereFourPtInput_Point1_P1 extends ResthopperParameter {

	public name: string = "Point1";
	public nickName: string = "P1";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SphereFourPtInput_Point2_P2 extends ResthopperParameter {

	public name: string = "Point2";
	public nickName: string = "P2";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SphereFourPtInput_Point3_P3 extends ResthopperParameter {

	public name: string = "Point3";
	public nickName: string = "P3";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SphereFourPtInput_Point4_P4 extends ResthopperParameter {

	public name: string = "Point4";
	public nickName: string = "P4";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SphereFourPtOutput_Center_C extends ResthopperParameter {

	public name: string = "Center";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SphereFourPtOutput_Radius_R extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SphereFourPtOutput_Sphere_S extends ResthopperParameter {

	public name: string = "Sphere";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
