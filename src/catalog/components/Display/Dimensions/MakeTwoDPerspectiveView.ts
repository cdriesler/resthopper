import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MakeTwoDPerspectiveView extends ResthopperComponent {

	public guid: string = "33359c6d-984e-42f3-a869-0c3364ab33b6";
	public name: string = "Make2DPerspectiveView";
	public category: string = "Display";
	public subCategory: string = "Dimensions";
	public description: string = "Define a perspective view for a Make2D solution";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Camera_C": MakeTwoDPerspectiveViewInput_Camera_C,
		"Frame_F": MakeTwoDPerspectiveViewInput_Frame_F,
	}

	public output:
	{
		"View_V": MakeTwoDPerspectiveViewOutput_View_V,
	}

	constructor() {
		super();
		this.input = {
			"Camera_C": new MakeTwoDPerspectiveViewInput_Camera_C(),
			"Frame_F": new MakeTwoDPerspectiveViewInput_Frame_F(),
		}
		this.output = {
			"View_V": new MakeTwoDPerspectiveViewOutput_View_V(),
		}
	}

}

class MakeTwoDPerspectiveViewInput_Camera_C extends ResthopperParameter {

	public name: string = "Camera";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MakeTwoDPerspectiveViewInput_Frame_F extends ResthopperParameter {

	public name: string = "Frame";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Rectangle;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MakeTwoDPerspectiveViewOutput_View_V extends ResthopperParameter {

	public name: string = "View";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Projection;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
