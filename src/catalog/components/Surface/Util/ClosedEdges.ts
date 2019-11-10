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
		"Brep_B": ClosedEdgesInput_Brep_B,
		"Tangency_T": ClosedEdgesInput_Tangency_T,
	}

	public output:
	{
		"Closed_C": ClosedEdgesOutput_Closed_C,
		"ClosedIndices_Ci": ClosedEdgesOutput_ClosedIndices_Ci,
		"Open_O": ClosedEdgesOutput_Open_O,
		"OpenIndices_Oi": ClosedEdgesOutput_OpenIndices_Oi,
	}

	constructor() {
		super();
		this.input = {
			"Brep_B": new ClosedEdgesInput_Brep_B(),
			"Tangency_T": new ClosedEdgesInput_Tangency_T(),
		}
		this.output = {
			"Closed_C": new ClosedEdgesOutput_Closed_C(),
			"ClosedIndices_Ci": new ClosedEdgesOutput_ClosedIndices_Ci(),
			"Open_O": new ClosedEdgesOutput_Open_O(),
			"OpenIndices_Oi": new ClosedEdgesOutput_OpenIndices_Oi(),
		}
	}

}

class ClosedEdgesInput_Brep_B extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClosedEdgesInput_Tangency_T extends ResthopperParameter {

	public name: string = "Tangency";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClosedEdgesOutput_Closed_C extends ResthopperParameter {

	public name: string = "Closed";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClosedEdgesOutput_ClosedIndices_Ci extends ResthopperParameter {

	public name: string = "ClosedIndices";
	public nickName: string = "Ci";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClosedEdgesOutput_Open_O extends ResthopperParameter {

	public name: string = "Open";
	public nickName: string = "O";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClosedEdgesOutput_OpenIndices_Oi extends ResthopperParameter {

	public name: string = "OpenIndices";
	public nickName: string = "Oi";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
