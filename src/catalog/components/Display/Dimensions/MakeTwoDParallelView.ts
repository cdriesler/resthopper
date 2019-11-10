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
		"Projection_P": MakeTwoDParallelViewInput_Projection_P,
	}

	public output:
	{
		"View_V": MakeTwoDParallelViewOutput_View_V,
	}

	constructor() {
		super();
		this.input = {
			"Projection_P": new MakeTwoDParallelViewInput_Projection_P(),
		}
		this.output = {
			"View_V": new MakeTwoDParallelViewOutput_View_V(),
		}
	}

}

class MakeTwoDParallelViewInput_Projection_P extends ResthopperParameter {

	public name: string = "Projection";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Rectangle;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MakeTwoDParallelViewOutput_View_V extends ResthopperParameter {

	public name: string = "View";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Projection;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
