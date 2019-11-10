import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class IsPlanar extends ResthopperComponent {

	public guid: string = "d4bc9653-c770-4bee-a31d-d120cbb75b39";
	public name: string = "IsPlanar";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Test whether a surface is planar";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Surface_S": IsPlanarInput_Surface_S,
		"Interior_I": IsPlanarInput_Interior_I,
	}

	public output:
	{
		"Planar_F": IsPlanarOutput_Planar_F,
		"Plane_P": IsPlanarOutput_Plane_P,
	}

	constructor() {
		super();
		this.input = {
			"Surface_S": new IsPlanarInput_Surface_S(),
			"Interior_I": new IsPlanarInput_Interior_I(),
		}
		this.output = {
			"Planar_F": new IsPlanarOutput_Planar_F(),
			"Plane_P": new IsPlanarOutput_Plane_P(),
		}
	}

}

class IsPlanarInput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IsPlanarInput_Interior_I extends ResthopperParameter {

	public name: string = "Interior";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IsPlanarOutput_Planar_F extends ResthopperParameter {

	public name: string = "Planar";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IsPlanarOutput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
