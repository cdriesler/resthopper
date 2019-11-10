import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SmoothPolyline extends ResthopperComponent {

	public guid: string = "5c5fbc42-3e1d-4081-9cf1-148d0b1d9610";
	public name: string = "SmoothPolyline";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Smooth the vertices of a polyline curve.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Polyline_P": SmoothPolylineInput_Polyline_P,
		"Strength_S": SmoothPolylineInput_Strength_S,
		"Times_T": SmoothPolylineInput_Times_T,
	}

	public output:
	{
		"Polyline_P": SmoothPolylineOutput_Polyline_P,
	}

	constructor() {
		super();
		this.input = {
			"Polyline_P": new SmoothPolylineInput_Polyline_P(),
			"Strength_S": new SmoothPolylineInput_Strength_S(),
			"Times_T": new SmoothPolylineInput_Times_T(),
		}
		this.output = {
			"Polyline_P": new SmoothPolylineOutput_Polyline_P(),
		}
	}

}

class SmoothPolylineInput_Polyline_P extends ResthopperParameter {

	public name: string = "Polyline";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SmoothPolylineInput_Strength_S extends ResthopperParameter {

	public name: string = "Strength";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SmoothPolylineInput_Times_T extends ResthopperParameter {

	public name: string = "Times";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SmoothPolylineOutput_Polyline_P extends ResthopperParameter {

	public name: string = "Polyline";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
