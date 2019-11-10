import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SurfaceMorph extends ResthopperComponent {

	public guid: string = "5889b68f-fd88-4032-860f-869fb69654dd";
	public name: string = "SurfaceMorph";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Morph geometry into surface UVW coordinates";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Geometry_G": SurfaceMorphInput_Geometry_G,
		"Reference_R": SurfaceMorphInput_Reference_R,
		"Surface_S": SurfaceMorphInput_Surface_S,
		"UDomain_U": SurfaceMorphInput_UDomain_U,
		"VDomain_V": SurfaceMorphInput_VDomain_V,
		"WDomain_W": SurfaceMorphInput_WDomain_W,
	}

	public output:
	{
		"Geometry_G": SurfaceMorphOutput_Geometry_G,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new SurfaceMorphInput_Geometry_G(),
			"Reference_R": new SurfaceMorphInput_Reference_R(),
			"Surface_S": new SurfaceMorphInput_Surface_S(),
			"UDomain_U": new SurfaceMorphInput_UDomain_U(),
			"VDomain_V": new SurfaceMorphInput_VDomain_V(),
			"WDomain_W": new SurfaceMorphInput_WDomain_W(),
		}
		this.output = {
			"Geometry_G": new SurfaceMorphOutput_Geometry_G(),
		}
	}

}

class SurfaceMorphInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceMorphInput_Reference_R extends ResthopperParameter {

	public name: string = "Reference";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Box;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceMorphInput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceMorphInput_UDomain_U extends ResthopperParameter {

	public name: string = "UDomain";
	public nickName: string = "U";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceMorphInput_VDomain_V extends ResthopperParameter {

	public name: string = "VDomain";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceMorphInput_WDomain_W extends ResthopperParameter {

	public name: string = "WDomain";
	public nickName: string = "W";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceMorphOutput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
