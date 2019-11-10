import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SubDControlPolygon extends ResthopperComponent {

	public guid: string = "c1a57c2a-11c5-4f77-851e-0a7dffef848e";
	public name: string = "SubDControlPolygon";
	public category: string = "Surface";
	public subCategory: string = "SubD";
	public description: string = "Extract the control polygon from a Sub-D surface.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"SubD_S": SubDControlPolygonInput_SubD_S,
	}

	public output:
	{
		"Mesh_M": SubDControlPolygonOutput_Mesh_M,
	}

	constructor() {
		super();
		this.input = {
			"SubD_S": new SubDControlPolygonInput_SubD_S(),
		}
		this.output = {
			"Mesh_M": new SubDControlPolygonOutput_Mesh_M(),
		}
	}

}

class SubDControlPolygonInput_SubD_S extends ResthopperParameter {

	public name: string = "SubD";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "SubD;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubDControlPolygonOutput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
