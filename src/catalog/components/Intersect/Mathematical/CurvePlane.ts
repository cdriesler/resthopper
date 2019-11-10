import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CurvePlane extends ResthopperComponent {

	public guid: string = "b7c12ed1-b09a-4e15-996f-3fa9f3f16b1c";
	public name: string = "CurvePlane";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Solve intersection events for a curve and a plane.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Curve_C": CurvePlaneInput_Curve_C,
		"Plane_P": CurvePlaneInput_Plane_P,
	}

	public output:
	{
		"Points_P": CurvePlaneOutput_Points_P,
		"ParamsC_t": CurvePlaneOutput_ParamsC_t,
		"ParamsP_uv": CurvePlaneOutput_ParamsP_uv,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new CurvePlaneInput_Curve_C(),
			"Plane_P": new CurvePlaneInput_Plane_P(),
		}
		this.output = {
			"Points_P": new CurvePlaneOutput_Points_P(),
			"ParamsC_t": new CurvePlaneOutput_ParamsC_t(),
			"ParamsP_uv": new CurvePlaneOutput_ParamsP_uv(),
		}
	}

}

class CurvePlaneInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurvePlaneInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurvePlaneOutput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurvePlaneOutput_ParamsC_t extends ResthopperParameter {

	public name: string = "ParamsC";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurvePlaneOutput_ParamsP_uv extends ResthopperParameter {

	public name: string = "ParamsP";
	public nickName: string = "uv";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
