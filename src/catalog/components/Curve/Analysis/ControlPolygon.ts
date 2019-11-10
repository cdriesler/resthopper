import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ControlPolygon extends ResthopperComponent {

	public guid: string = "66d2a68e-2f1d-43d2-a53b-c6a4d17e627b";
	public name: string = "ControlPolygon";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Extract the nurbs control polygon of a curve.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Curve_C": ControlPolygonInput_Curve_C,
	}

	public output:
	{
		"Polygon_C": ControlPolygonOutput_Polygon_C,
		"Points_P": ControlPolygonOutput_Points_P,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new ControlPolygonInput_Curve_C(),
		}
		this.output = {
			"Polygon_C": new ControlPolygonOutput_Polygon_C(),
			"Points_P": new ControlPolygonOutput_Points_P(),
		}
	}

}

class ControlPolygonInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ControlPolygonOutput_Polygon_C extends ResthopperParameter {

	public name: string = "Polygon";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ControlPolygonOutput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
