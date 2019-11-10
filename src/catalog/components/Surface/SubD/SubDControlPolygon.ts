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
		"subd_s": SubDControlPolygonInput_subd_s,
	}

	public output:
	{
		"mesh_m": SubDControlPolygonOutput_mesh_m,
	}

	constructor() {
		super();
		this.input = {
			"subd_s": new SubDControlPolygonInput_subd_s(),
		}
		this.output = {
			"mesh_m": new SubDControlPolygonOutput_mesh_m(),
		}
	}

}

class SubDControlPolygonInput_subd_s extends ResthopperParameter {

	public name: string = "SubD";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "SubD"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubDControlPolygonOutput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
