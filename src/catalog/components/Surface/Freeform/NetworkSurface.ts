import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class NetworkSurface extends ResthopperComponent {

	public guid: string = "71506fa8-9bf0-432d-b897-b2e0c5ac316c";
	public name: string = "Network Surface";
	public nickName: string = "NetSurf";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create a surface from curve networks";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"curvesu_u": NetworkSurfaceInput_curvesu_u,
		"curvesv_v": NetworkSurfaceInput_curvesv_v,
		"continuity_c": NetworkSurfaceInput_continuity_c,
	}

	public output:
	{
		"surface_s": NetworkSurfaceOutput_surface_s,
	}

	constructor() {
		super();
		this.input = {
			"curvesu_u": new NetworkSurfaceInput_curvesu_u(),
			"curvesv_v": new NetworkSurfaceInput_curvesv_v(),
			"continuity_c": new NetworkSurfaceInput_continuity_c(),
		}
		this.output = {
			"surface_s": new NetworkSurfaceOutput_surface_s(),
		}
	}

}

class NetworkSurfaceInput_curvesu_u extends ResthopperParameter {

	public name: string = "CurvesU";
	public nickName: string = "U";
	public description: string = "Curves in U direction"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class NetworkSurfaceInput_curvesv_v extends ResthopperParameter {

	public name: string = "CurvesV";
	public nickName: string = "V";
	public description: string = "Curves in V direction"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class NetworkSurfaceInput_continuity_c extends ResthopperParameter {

	public name: string = "Continuity";
	public nickName: string = "C";
	public description: string = "Surface continuity (0=loose, 1=position, 2=tangency, 3=curvature)"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class NetworkSurfaceOutput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public description: string = "Network surface"
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
