import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MakeTwoDParallelView extends ResthopperComponent {

	public guid: string = "3fc08088-d75d-43bc-83cc-7a654f156cb7";
	public name: string = "Make2DParallelView";
	public category: string = "Display";
	public subCategory: string = "Dimensions";
	public description: string = "Define a parallel view for a Make2D solution";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"projection_p": MakeTwoDParallelViewInput_projection_p,
	}

	public output:
	{
		"view_v": MakeTwoDParallelViewOutput_view_v,
	}

	constructor() {
		super();
		this.input = {
			"projection_p": new MakeTwoDParallelViewInput_projection_p(),
		}
		this.output = {
			"view_v": new MakeTwoDParallelViewOutput_view_v(),
		}
	}

}

class MakeTwoDParallelViewInput_projection_p extends ResthopperParameter {

	public name: string = "Projection";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Rectangle"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MakeTwoDParallelViewOutput_view_v extends ResthopperParameter {

	public name: string = "View";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Projection"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
