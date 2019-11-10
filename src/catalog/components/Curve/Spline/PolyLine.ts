import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PolyLine extends ResthopperComponent {

	public guid: string = "71b5b089-500a-4ea6-81c5-2f960441a0e8";
	public name: string = "PolyLine";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Create a polyline connecting a number of points.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Vertices_V": PolyLineInput_Vertices_V,
		"Closed_C": PolyLineInput_Closed_C,
	}

	public output:
	{
		"Polyline_Pl": PolyLineOutput_Polyline_Pl,
	}

	constructor() {
		super();
		this.input = {
			"Vertices_V": new PolyLineInput_Vertices_V(),
			"Closed_C": new PolyLineInput_Closed_C(),
		}
		this.output = {
			"Polyline_Pl": new PolyLineOutput_Polyline_Pl(),
		}
	}

}

class PolyLineInput_Vertices_V extends ResthopperParameter {

	public name: string = "Vertices";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolyLineInput_Closed_C extends ResthopperParameter {

	public name: string = "Closed";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolyLineOutput_Polyline_Pl extends ResthopperParameter {

	public name: string = "Polyline";
	public nickName: string = "Pl";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
