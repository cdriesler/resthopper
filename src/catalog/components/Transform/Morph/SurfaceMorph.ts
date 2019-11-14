import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SurfaceMorph extends ResthopperComponent {

	public guid: string = "5889b68f-fd88-4032-860f-869fb69654dd";
	public name: string = "SurfaceMorph";
	public nickName: string = "SrfMorph";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Morph geometry into surface UVW coordinates";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"geometry_g": SurfaceMorphInput_geometry_g,
		"reference_r": SurfaceMorphInput_reference_r,
		"surface_s": SurfaceMorphInput_surface_s,
		"udomain_u": SurfaceMorphInput_udomain_u,
		"vdomain_v": SurfaceMorphInput_vdomain_v,
		"wdomain_w": SurfaceMorphInput_wdomain_w,
	}

	public output:
	{
		"geometry_g": SurfaceMorphOutput_geometry_g,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new SurfaceMorphInput_geometry_g(),
			"reference_r": new SurfaceMorphInput_reference_r(),
			"surface_s": new SurfaceMorphInput_surface_s(),
			"udomain_u": new SurfaceMorphInput_udomain_u(),
			"vdomain_v": new SurfaceMorphInput_vdomain_v(),
			"wdomain_w": new SurfaceMorphInput_wdomain_w(),
		}
		this.output = {
			"geometry_g": new SurfaceMorphOutput_geometry_g(),
		}
	}

}

class SurfaceMorphInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceMorphInput_reference_r extends ResthopperParameter {

	public name: string = "Reference";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Box"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceMorphInput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceMorphInput_udomain_u extends ResthopperParameter {

	public name: string = "UDomain";
	public nickName: string = "U";
	public isOptional: boolean = false;
	public typeName: string = "Domain"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceMorphInput_vdomain_v extends ResthopperParameter {

	public name: string = "VDomain";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Domain"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceMorphInput_wdomain_w extends ResthopperParameter {

	public name: string = "WDomain";
	public nickName: string = "W";
	public isOptional: boolean = false;
	public typeName: string = "Domain"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceMorphOutput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
