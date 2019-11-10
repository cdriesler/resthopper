import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PlaneFit extends ResthopperComponent {

	public guid: string = "33bfc73c-19b2-480b-81e6-f3523a012ea6";
	public name: string = "PlaneFit";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "Fit a plane through a set of points.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"points_p": PlaneFitInput_points_p,
	}

	public output:
	{
		"plane_pl": PlaneFitOutput_plane_pl,
		"deviation_dx": PlaneFitOutput_deviation_dx,
	}

	constructor() {
		super();
		this.input = {
			"points_p": new PlaneFitInput_points_p(),
		}
		this.output = {
			"plane_pl": new PlaneFitOutput_plane_pl(),
			"deviation_dx": new PlaneFitOutput_deviation_dx(),
		}
	}

}

class PlaneFitInput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneFitOutput_plane_pl extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "Pl";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneFitOutput_deviation_dx extends ResthopperParameter {

	public name: string = "Deviation";
	public nickName: string = "dx";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
