import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Barycentric extends ResthopperComponent {

	public guid: string = "9adffd61-f5d1-4e9e-9572-e8d9145730dc";
	public name: string = "Barycentric";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Create a point from barycentric {u,v,w} coordinates";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"PointA_A": BarycentricInput_PointA_A,
		"PointB_B": BarycentricInput_PointB_B,
		"PointC_C": BarycentricInput_PointC_C,
		"CoordinateU_U": BarycentricInput_CoordinateU_U,
		"CoordinateV_V": BarycentricInput_CoordinateV_V,
		"CoordinateW_W": BarycentricInput_CoordinateW_W,
	}

	public output:
	{
		"Point_P": BarycentricOutput_Point_P,
	}

	constructor() {
		super();
		this.input = {
			"PointA_A": new BarycentricInput_PointA_A(),
			"PointB_B": new BarycentricInput_PointB_B(),
			"PointC_C": new BarycentricInput_PointC_C(),
			"CoordinateU_U": new BarycentricInput_CoordinateU_U(),
			"CoordinateV_V": new BarycentricInput_CoordinateV_V(),
			"CoordinateW_W": new BarycentricInput_CoordinateW_W(),
		}
		this.output = {
			"Point_P": new BarycentricOutput_Point_P(),
		}
	}

}

class BarycentricInput_PointA_A extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BarycentricInput_PointB_B extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BarycentricInput_PointC_C extends ResthopperParameter {

	public name: string = "PointC";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BarycentricInput_CoordinateU_U extends ResthopperParameter {

	public name: string = "CoordinateU";
	public nickName: string = "U";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BarycentricInput_CoordinateV_V extends ResthopperParameter {

	public name: string = "CoordinateV";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BarycentricInput_CoordinateW_W extends ResthopperParameter {

	public name: string = "CoordinateW";
	public nickName: string = "W";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BarycentricOutput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
