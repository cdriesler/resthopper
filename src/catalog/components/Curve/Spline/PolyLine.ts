import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PolyLine extends ResthopperComponent {

	public guid: string = "71b5b089-500a-4ea6-81c5-2f960441a0e8";
	public name: string = "PolyLine";
	public nickName: string = "PLine";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Create a polyline connecting a number of points.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"vertices_v": PolyLineInput_vertices_v,
		"closed_c": PolyLineInput_closed_c,
	}

	public output:
	{
		"polyline_pl": PolyLineOutput_polyline_pl,
	}

	constructor() {
		super();
		this.input = {
			"vertices_v": new PolyLineInput_vertices_v(),
			"closed_c": new PolyLineInput_closed_c(),
		}
		this.output = {
			"polyline_pl": new PolyLineOutput_polyline_pl(),
		}
	}

}

class PolyLineInput_vertices_v extends ResthopperParameter {

	public name: string = "Vertices";
	public nickName: string = "V";
	public description: string = "Polyline vertex points"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolyLineInput_closed_c extends ResthopperParameter {

	public name: string = "Closed";
	public nickName: string = "C";
	public description: string = "Close polyline"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolyLineOutput_polyline_pl extends ResthopperParameter {

	public name: string = "Polyline";
	public nickName: string = "Pl";
	public description: string = "Resulting polyline"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
