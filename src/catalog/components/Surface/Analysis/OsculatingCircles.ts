import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class OsculatingCircles extends ResthopperComponent {

	public guid: string = "b799b7c0-76df-4bdb-b3cc-401b1d021aa5";
	public name: string = "OsculatingCircles";
	public nickName: string = "Osc";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Calculate the principal osculating circles of a surface at a {uv} coordinate.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"surface_s": OsculatingCirclesInput_surface_s,
		"point_uv": OsculatingCirclesInput_point_uv,
	}

	public output:
	{
		"point_p": OsculatingCirclesOutput_point_p,
		"firstcircle_c1": OsculatingCirclesOutput_firstcircle_c1,
		"secondcircle_c2": OsculatingCirclesOutput_secondcircle_c2,
	}

	constructor() {
		super();
		this.input = {
			"surface_s": new OsculatingCirclesInput_surface_s(),
			"point_uv": new OsculatingCirclesInput_point_uv(),
		}
		this.output = {
			"point_p": new OsculatingCirclesOutput_point_p(),
			"firstcircle_c1": new OsculatingCirclesOutput_firstcircle_c1(),
			"secondcircle_c2": new OsculatingCirclesOutput_secondcircle_c2(),
		}
	}

}

class OsculatingCirclesInput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public description: string = "Empty Surface parameter"
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OsculatingCirclesInput_point_uv extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "uv";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OsculatingCirclesOutput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OsculatingCirclesOutput_firstcircle_c1 extends ResthopperParameter {

	public name: string = "Firstcircle";
	public nickName: string = "C1";
	public description: string = "Empty Curve parameter"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OsculatingCirclesOutput_secondcircle_c2 extends ResthopperParameter {

	public name: string = "Secondcircle";
	public nickName: string = "C2";
	public description: string = "Empty Curve parameter"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
