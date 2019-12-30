import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ControlPolygon extends ResthopperComponent {

	public guid: string = "66d2a68e-2f1d-43d2-a53b-c6a4d17e627b";
	public name: string = "Control Polygon";
	public nickName: string = "CPoly";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Extract the nurbs control polygon of a curve.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curve_c": ControlPolygonInput_curve_c,
	}

	public output:
	{
		"polygon_c": ControlPolygonOutput_polygon_c,
		"points_p": ControlPolygonOutput_points_p,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new ControlPolygonInput_curve_c(),
		}
		this.output = {
			"polygon_c": new ControlPolygonOutput_polygon_c(),
			"points_p": new ControlPolygonOutput_points_p(),
		}
	}

}

class ControlPolygonInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public description: string = "Curve to evaluate"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ControlPolygonOutput_polygon_c extends ResthopperParameter {

	public name: string = "Polygon";
	public nickName: string = "C";
	public description: string = "Control polygon curve for input curve adjusted for periodicity."
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ControlPolygonOutput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public description: string = "Control polygon points."
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
