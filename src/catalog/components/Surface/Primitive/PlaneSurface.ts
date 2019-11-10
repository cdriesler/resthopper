import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PlaneSurface extends ResthopperComponent {

	public guid: string = "439a55a5-2f9e-4f66-9de2-32f24fec2ef5";
	public name: string = "PlaneSurface";
	public category: string = "Surface";
	public subCategory: string = "Primitive";
	public description: string = "Create a plane surface";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Plane_P": PlaneSurfaceInput_Plane_P,
		"XSize_X": PlaneSurfaceInput_XSize_X,
		"YSize_Y": PlaneSurfaceInput_YSize_Y,
	}

	public output:
	{
		"Plane_P": PlaneSurfaceOutput_Plane_P,
	}

	constructor() {
		super();
		this.input = {
			"Plane_P": new PlaneSurfaceInput_Plane_P(),
			"XSize_X": new PlaneSurfaceInput_XSize_X(),
			"YSize_Y": new PlaneSurfaceInput_YSize_Y(),
		}
		this.output = {
			"Plane_P": new PlaneSurfaceOutput_Plane_P(),
		}
	}

}

class PlaneSurfaceInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneSurfaceInput_XSize_X extends ResthopperParameter {

	public name: string = "XSize";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneSurfaceInput_YSize_Y extends ResthopperParameter {

	public name: string = "YSize";
	public nickName: string = "Y";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneSurfaceOutput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
