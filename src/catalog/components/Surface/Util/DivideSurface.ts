import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DivideSurface extends ResthopperComponent {

	public guid: string = "5106bafc-d5d4-4983-83e7-7be3ed07f502";
	public name: string = "DivideSurface";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Generate a grid of {uv} points on a surface.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Surface_S": DivideSurfaceInput_Surface_S,
		"UCount_U": DivideSurfaceInput_UCount_U,
		"VCount_V": DivideSurfaceInput_VCount_V,
	}

	public output:
	{
		"Points_P": DivideSurfaceOutput_Points_P,
		"Normals_N": DivideSurfaceOutput_Normals_N,
		"Parameters_uv": DivideSurfaceOutput_Parameters_uv,
	}

	constructor() {
		super();
		this.input = {
			"Surface_S": new DivideSurfaceInput_Surface_S(),
			"UCount_U": new DivideSurfaceInput_UCount_U(),
			"VCount_V": new DivideSurfaceInput_VCount_V(),
		}
		this.output = {
			"Points_P": new DivideSurfaceOutput_Points_P(),
			"Normals_N": new DivideSurfaceOutput_Normals_N(),
			"Parameters_uv": new DivideSurfaceOutput_Parameters_uv(),
		}
	}

}

class DivideSurfaceInput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideSurfaceInput_UCount_U extends ResthopperParameter {

	public name: string = "UCount";
	public nickName: string = "U";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideSurfaceInput_VCount_V extends ResthopperParameter {

	public name: string = "VCount";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideSurfaceOutput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideSurfaceOutput_Normals_N extends ResthopperParameter {

	public name: string = "Normals";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideSurfaceOutput_Parameters_uv extends ResthopperParameter {

	public name: string = "Parameters";
	public nickName: string = "uv";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
