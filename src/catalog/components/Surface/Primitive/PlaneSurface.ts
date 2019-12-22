import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PlaneSurface extends ResthopperComponent {

	public guid: string = "439a55a5-2f9e-4f66-9de2-32f24fec2ef5";
	public name: string = "Plane Surface";
	public nickName: string = "PlaneSrf";
	public category: string = "Surface";
	public subCategory: string = "Primitive";
	public description: string = "Create a plane surface";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"plane_p": PlaneSurfaceInput_plane_p,
		"xsize_x": PlaneSurfaceInput_xsize_x,
		"ysize_y": PlaneSurfaceInput_ysize_y,
	}

	public output:
	{
		"plane_p": PlaneSurfaceOutput_plane_p,
	}

	constructor() {
		super();
		this.input = {
			"plane_p": new PlaneSurfaceInput_plane_p(),
			"xsize_x": new PlaneSurfaceInput_xsize_x(),
			"ysize_y": new PlaneSurfaceInput_ysize_y(),
		}
		this.output = {
			"plane_p": new PlaneSurfaceOutput_plane_p(),
		}
	}

}

class PlaneSurfaceInput_plane_p extends ResthopperParameter {

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

class PlaneSurfaceInput_xsize_x extends ResthopperParameter {

	public name: string = "XSize";
	public nickName: string = "X";
	public description: string = "Empty Domain parameter"
	public isOptional: boolean = false;
	public typeName: string = "Domain"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneSurfaceInput_ysize_y extends ResthopperParameter {

	public name: string = "YSize";
	public nickName: string = "Y";
	public description: string = "Empty Domain parameter"
	public isOptional: boolean = false;
	public typeName: string = "Domain"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneSurfaceOutput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public description: string = "Empty Surface parameter"
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
