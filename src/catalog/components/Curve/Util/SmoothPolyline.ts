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
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"polyline_p": SmoothPolylineInput_polyline_p,
		"strength_s": SmoothPolylineInput_strength_s,
		"times_t": SmoothPolylineInput_times_t,
	}

	public output:
	{
		"polyline_p": SmoothPolylineOutput_polyline_p,
	}

	constructor() {
		super();
		this.input = {
			"polyline_p": new SmoothPolylineInput_polyline_p(),
			"strength_s": new SmoothPolylineInput_strength_s(),
			"times_t": new SmoothPolylineInput_times_t(),
		}
		this.output = {
			"polyline_p": new SmoothPolylineOutput_polyline_p(),
		}
	}

}

class SmoothPolylineInput_polyline_p extends ResthopperParameter {

	public name: string = "Polyline";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SmoothPolylineInput_strength_s extends ResthopperParameter {

	public name: string = "Strength";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SmoothPolylineInput_times_t extends ResthopperParameter {

	public name: string = "Times";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SmoothPolylineOutput_polyline_p extends ResthopperParameter {

	public name: string = "Polyline";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
