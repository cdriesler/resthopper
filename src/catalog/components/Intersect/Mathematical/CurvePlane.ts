import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CurvePlane extends ResthopperComponent {

	public guid: string = "b7c12ed1-b09a-4e15-996f-3fa9f3f16b1c";
	public name: string = "CurvePlane";
	public nickName: string = "PCX";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Solve intersection events for a curve and a plane.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curve_c": CurvePlaneInput_curve_c,
		"plane_p": CurvePlaneInput_plane_p,
	}

	public output:
	{
		"points_p": CurvePlaneOutput_points_p,
		"paramsc_t": CurvePlaneOutput_paramsc_t,
		"paramsp_uv": CurvePlaneOutput_paramsp_uv,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new CurvePlaneInput_curve_c(),
			"plane_p": new CurvePlaneInput_plane_p(),
		}
		this.output = {
			"points_p": new CurvePlaneOutput_points_p(),
			"paramsc_t": new CurvePlaneOutput_paramsc_t(),
			"paramsp_uv": new CurvePlaneOutput_paramsp_uv(),
		}
	}

}

class CurvePlaneInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public description: string = "Empty Curve parameter"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurvePlaneInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public description: string = "Empty Plane parameter"
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurvePlaneOutput_points_p extends ResthopperParameter {

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

class CurvePlaneOutput_paramsc_t extends ResthopperParameter {

	public name: string = "ParamsC";
	public nickName: string = "t";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurvePlaneOutput_paramsp_uv extends ResthopperParameter {

	public name: string = "ParamsP";
	public nickName: string = "uv";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
