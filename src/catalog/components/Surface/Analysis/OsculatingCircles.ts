import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class OsculatingCircles extends ResthopperComponent {

	public guid: string = "b799b7c0-76df-4bdb-b3cc-401b1d021aa5";
	public name: string = "OsculatingCircles";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Calculate the principal osculating circles of a surface at a {uv} coordinate.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Surface_S": OsculatingCirclesInput_Surface_S,
		"Point_uv": OsculatingCirclesInput_Point_uv,
	}

	public output:
	{
		"Point_P": OsculatingCirclesOutput_Point_P,
		"Firstcircle_C1": OsculatingCirclesOutput_Firstcircle_C1,
		"Secondcircle_C2": OsculatingCirclesOutput_Secondcircle_C2,
	}

	constructor() {
		super();
		this.input = {
			"Surface_S": new OsculatingCirclesInput_Surface_S(),
			"Point_uv": new OsculatingCirclesInput_Point_uv(),
		}
		this.output = {
			"Point_P": new OsculatingCirclesOutput_Point_P(),
			"Firstcircle_C1": new OsculatingCirclesOutput_Firstcircle_C1(),
			"Secondcircle_C2": new OsculatingCirclesOutput_Secondcircle_C2(),
		}
	}

}

class OsculatingCirclesInput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OsculatingCirclesInput_Point_uv extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "uv";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OsculatingCirclesOutput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OsculatingCirclesOutput_Firstcircle_C1 extends ResthopperParameter {

	public name: string = "Firstcircle";
	public nickName: string = "C1";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OsculatingCirclesOutput_Secondcircle_C2 extends ResthopperParameter {

	public name: string = "Secondcircle";
	public nickName: string = "C2";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
