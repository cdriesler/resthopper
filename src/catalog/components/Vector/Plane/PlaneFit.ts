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
		"Points_P": PlaneFitInput_Points_P,
	}

	public output:
	{
		"Plane_Pl": PlaneFitOutput_Plane_Pl,
		"Deviation_dx": PlaneFitOutput_Deviation_dx,
	}

	constructor() {
		super();
		this.input = {
			"Points_P": new PlaneFitInput_Points_P(),
		}
		this.output = {
			"Plane_Pl": new PlaneFitOutput_Plane_Pl(),
			"Deviation_dx": new PlaneFitOutput_Deviation_dx(),
		}
	}

}

class PlaneFitInput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneFitOutput_Plane_Pl extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "Pl";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneFitOutput_Deviation_dx extends ResthopperParameter {

	public name: string = "Deviation";
	public nickName: string = "dx";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
