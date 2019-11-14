import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class IsPlanar extends ResthopperComponent {

	public guid: string = "d4bc9653-c770-4bee-a31d-d120cbb75b39";
	public name: string = "IsPlanar";
	public nickName: string = "Planar";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Test whether a surface is planar";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"surface_s": IsPlanarInput_surface_s,
		"interior_i": IsPlanarInput_interior_i,
	}

	public output:
	{
		"planar_f": IsPlanarOutput_planar_f,
		"plane_p": IsPlanarOutput_plane_p,
	}

	constructor() {
		super();
		this.input = {
			"surface_s": new IsPlanarInput_surface_s(),
			"interior_i": new IsPlanarInput_interior_i(),
		}
		this.output = {
			"planar_f": new IsPlanarOutput_planar_f(),
			"plane_p": new IsPlanarOutput_plane_p(),
		}
	}

}

class IsPlanarInput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IsPlanarInput_interior_i extends ResthopperParameter {

	public name: string = "Interior";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IsPlanarOutput_planar_f extends ResthopperParameter {

	public name: string = "Planar";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IsPlanarOutput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
