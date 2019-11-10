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
		"EdgeStart_E0": PolygonEdgeInput_EdgeStart_E0,
		"EdgeEnd_E1": PolygonEdgeInput_EdgeEnd_E1,
		"PlanePoint_P": PolygonEdgeInput_PlanePoint_P,
		"Segments_S": PolygonEdgeInput_Segments_S,
	}

	public output:
	{
		"Polygon_P": PolygonEdgeOutput_Polygon_P,
		"Centre_C": PolygonEdgeOutput_Centre_C,
		"EdgeRadius_Rc": PolygonEdgeOutput_EdgeRadius_Rc,
	}

	constructor() {
		super();
		this.input = {
			"EdgeStart_E0": new PolygonEdgeInput_EdgeStart_E0(),
			"EdgeEnd_E1": new PolygonEdgeInput_EdgeEnd_E1(),
			"PlanePoint_P": new PolygonEdgeInput_PlanePoint_P(),
			"Segments_S": new PolygonEdgeInput_Segments_S(),
		}
		this.output = {
			"Polygon_P": new PolygonEdgeOutput_Polygon_P(),
			"Centre_C": new PolygonEdgeOutput_Centre_C(),
			"EdgeRadius_Rc": new PolygonEdgeOutput_EdgeRadius_Rc(),
		}
	}

}

class PolygonEdgeInput_EdgeStart_E0 extends ResthopperParameter {

	public name: string = "EdgeStart";
	public nickName: string = "E0";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolygonEdgeInput_EdgeEnd_E1 extends ResthopperParameter {

	public name: string = "EdgeEnd";
	public nickName: string = "E1";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolygonEdgeInput_PlanePoint_P extends ResthopperParameter {

	public name: string = "PlanePoint";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolygonEdgeInput_Segments_S extends ResthopperParameter {

	public name: string = "Segments";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolygonEdgeOutput_Polygon_P extends ResthopperParameter {

	public name: string = "Polygon";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolygonEdgeOutput_Centre_C extends ResthopperParameter {

	public name: string = "Centre";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolygonEdgeOutput_EdgeRadius_Rc extends ResthopperParameter {

	public name: string = "EdgeRadius";
	public nickName: string = "Rc";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
