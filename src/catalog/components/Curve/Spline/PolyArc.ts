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

	public library: string = "Curve Components";

	public input:
	{
		"Vertices_V": PolyArcInput_Vertices_V,
		"Tangent_T": PolyArcInput_Tangent_T,
		"Closed_C": PolyArcInput_Closed_C,
	}

	public output:
	{
		"PolyArc_Crv": PolyArcOutput_PolyArc_Crv,
	}

	constructor() {
		super();
		this.input = {
			"Vertices_V": new PolyArcInput_Vertices_V(),
			"Tangent_T": new PolyArcInput_Tangent_T(),
			"Closed_C": new PolyArcInput_Closed_C(),
		}
		this.output = {
			"PolyArc_Crv": new PolyArcOutput_PolyArc_Crv(),
		}
	}

}

class PolyArcInput_Vertices_V extends ResthopperParameter {

	public name: string = "Vertices";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolyArcInput_Tangent_T extends ResthopperParameter {

	public name: string = "Tangent";
	public nickName: string = "T";
	public isOptional: boolean = true;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolyArcInput_Closed_C extends ResthopperParameter {

	public name: string = "Closed";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolyArcOutput_PolyArc_Crv extends ResthopperParameter {

	public name: string = "PolyArc";
	public nickName: string = "Crv";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
