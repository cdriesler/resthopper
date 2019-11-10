import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PolygonEdge extends ResthopperComponent {

	public guid: string = "f4568ce6-aade-4511-8f32-f27d8a6bf9e9";
	public name: string = "PolygonEdge";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create a polygon from a single edge.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"edgestart_e0": PolygonEdgeInput_edgestart_e0,
		"edgeend_e1": PolygonEdgeInput_edgeend_e1,
		"planepoint_p": PolygonEdgeInput_planepoint_p,
		"segments_s": PolygonEdgeInput_segments_s,
	}

	public output:
	{
		"polygon_p": PolygonEdgeOutput_polygon_p,
		"centre_c": PolygonEdgeOutput_centre_c,
		"edgeradius_rc": PolygonEdgeOutput_edgeradius_rc,
	}

	constructor() {
		super();
		this.input = {
			"edgestart_e0": new PolygonEdgeInput_edgestart_e0(),
			"edgeend_e1": new PolygonEdgeInput_edgeend_e1(),
			"planepoint_p": new PolygonEdgeInput_planepoint_p(),
			"segments_s": new PolygonEdgeInput_segments_s(),
		}
		this.output = {
			"polygon_p": new PolygonEdgeOutput_polygon_p(),
			"centre_c": new PolygonEdgeOutput_centre_c(),
			"edgeradius_rc": new PolygonEdgeOutput_edgeradius_rc(),
		}
	}

}

class PolygonEdgeInput_edgestart_e0 extends ResthopperParameter {

	public name: string = "EdgeStart";
	public nickName: string = "E0";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolygonEdgeInput_edgeend_e1 extends ResthopperParameter {

	public name: string = "EdgeEnd";
	public nickName: string = "E1";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolygonEdgeInput_planepoint_p extends ResthopperParameter {

	public name: string = "PlanePoint";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolygonEdgeInput_segments_s extends ResthopperParameter {

	public name: string = "Segments";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolygonEdgeOutput_polygon_p extends ResthopperParameter {

	public name: string = "Polygon";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolygonEdgeOutput_centre_c extends ResthopperParameter {

	public name: string = "Centre";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolygonEdgeOutput_edgeradius_rc extends ResthopperParameter {

	public name: string = "EdgeRadius";
	public nickName: string = "Rc";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
