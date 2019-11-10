import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class EdgeSurface extends ResthopperComponent {

	public guid: string = "36132830-e2ef-4476-8ea1-6a43922344f0";
	public name: string = "EdgeSurface";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create a surface from two, three or four edge curves.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"curvea_a": EdgeSurfaceInput_curvea_a,
		"curveb_b": EdgeSurfaceInput_curveb_b,
		"curvec_c": EdgeSurfaceInput_curvec_c,
		"curved_d": EdgeSurfaceInput_curved_d,
	}

	public output:
	{
		"surface_s": EdgeSurfaceOutput_surface_s,
	}

	constructor() {
		super();
		this.input = {
			"curvea_a": new EdgeSurfaceInput_curvea_a(),
			"curveb_b": new EdgeSurfaceInput_curveb_b(),
			"curvec_c": new EdgeSurfaceInput_curvec_c(),
			"curved_d": new EdgeSurfaceInput_curved_d(),
		}
		this.output = {
			"surface_s": new EdgeSurfaceOutput_surface_s(),
		}
	}

}

class EdgeSurfaceInput_curvea_a extends ResthopperParameter {

	public name: string = "CurveA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgeSurfaceInput_curveb_b extends ResthopperParameter {

	public name: string = "CurveB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgeSurfaceInput_curvec_c extends ResthopperParameter {

	public name: string = "CurveC";
	public nickName: string = "C";
	public isOptional: boolean = true;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgeSurfaceInput_curved_d extends ResthopperParameter {

	public name: string = "CurveD";
	public nickName: string = "D";
	public isOptional: boolean = true;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgeSurfaceOutput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
