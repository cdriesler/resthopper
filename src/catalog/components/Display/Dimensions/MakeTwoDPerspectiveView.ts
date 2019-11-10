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
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"camera_c": MakeTwoDPerspectiveViewInput_camera_c,
		"frame_f": MakeTwoDPerspectiveViewInput_frame_f,
	}

	public output:
	{
		"view_v": MakeTwoDPerspectiveViewOutput_view_v,
	}

	constructor() {
		super();
		this.input = {
			"camera_c": new MakeTwoDPerspectiveViewInput_camera_c(),
			"frame_f": new MakeTwoDPerspectiveViewInput_frame_f(),
		}
		this.output = {
			"view_v": new MakeTwoDPerspectiveViewOutput_view_v(),
		}
	}

}

class MakeTwoDPerspectiveViewInput_camera_c extends ResthopperParameter {

	public name: string = "Camera";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MakeTwoDPerspectiveViewInput_frame_f extends ResthopperParameter {

	public name: string = "Frame";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Rectangle"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MakeTwoDPerspectiveViewOutput_view_v extends ResthopperParameter {

	public name: string = "View";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Projection"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
