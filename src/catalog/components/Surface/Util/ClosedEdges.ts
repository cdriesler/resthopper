import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ClosedEdges extends ResthopperComponent {

	public guid: string = "70905be1-e22f-4fa8-b9ae-e119d417904f";
	public name: string = "ClosedEdges";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Select closed edges.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"brep_b": ClosedEdgesInput_brep_b,
		"tangency_t": ClosedEdgesInput_tangency_t,
	}

	public output:
	{
		"closed_c": ClosedEdgesOutput_closed_c,
		"closedindices_ci": ClosedEdgesOutput_closedindices_ci,
		"open_o": ClosedEdgesOutput_open_o,
		"openindices_oi": ClosedEdgesOutput_openindices_oi,
	}

	constructor() {
		super();
		this.input = {
			"brep_b": new ClosedEdgesInput_brep_b(),
			"tangency_t": new ClosedEdgesInput_tangency_t(),
		}
		this.output = {
			"closed_c": new ClosedEdgesOutput_closed_c(),
			"closedindices_ci": new ClosedEdgesOutput_closedindices_ci(),
			"open_o": new ClosedEdgesOutput_open_o(),
			"openindices_oi": new ClosedEdgesOutput_openindices_oi(),
		}
	}

}

class ClosedEdgesInput_brep_b extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClosedEdgesInput_tangency_t extends ResthopperParameter {

	public name: string = "Tangency";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClosedEdgesOutput_closed_c extends ResthopperParameter {

	public name: string = "Closed";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClosedEdgesOutput_closedindices_ci extends ResthopperParameter {

	public name: string = "ClosedIndices";
	public nickName: string = "Ci";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClosedEdgesOutput_open_o extends ResthopperParameter {

	public name: string = "Open";
	public nickName: string = "O";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClosedEdgesOutput_openindices_oi extends ResthopperParameter {

	public name: string = "OpenIndices";
	public nickName: string = "Oi";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
