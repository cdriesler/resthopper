import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PolyArc extends ResthopperComponent {

	public guid: string = "7159ef59-e4ef-44b8-8cb2-91231e278292";
	public name: string = "PolyArc";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Create a polycurve consisting of arc and line segments.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"vertices_v": PolyArcInput_vertices_v,
		"tangent_t": PolyArcInput_tangent_t,
		"closed_c": PolyArcInput_closed_c,
	}

	public output:
	{
		"polyarc_crv": PolyArcOutput_polyarc_crv,
	}

	constructor() {
		super();
		this.input = {
			"vertices_v": new PolyArcInput_vertices_v(),
			"tangent_t": new PolyArcInput_tangent_t(),
			"closed_c": new PolyArcInput_closed_c(),
		}
		this.output = {
			"polyarc_crv": new PolyArcOutput_polyarc_crv(),
		}
	}

}

class PolyArcInput_vertices_v extends ResthopperParameter {

	public name: string = "Vertices";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolyArcInput_tangent_t extends ResthopperParameter {

	public name: string = "Tangent";
	public nickName: string = "T";
	public isOptional: boolean = true;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolyArcInput_closed_c extends ResthopperParameter {

	public name: string = "Closed";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolyArcOutput_polyarc_crv extends ResthopperParameter {

	public name: string = "PolyArc";
	public nickName: string = "Crv";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
