import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SubDVertices extends ResthopperComponent {

	public guid: string = "cd9efa8f-0084-4d52-ab13-ad88ff22dc46";
	public name: string = "SubDVertices";
	public category: string = "Surface";
	public subCategory: string = "SubD";
	public description: string = "Extract all vertex data from a Sub-D surface.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"subd_s": SubDVerticesInput_subd_s,
	}

	public output:
	{
		"point_p": SubDVerticesOutput_point_p,
		"id_i": SubDVerticesOutput_id_i,
	}

	constructor() {
		super();
		this.input = {
			"subd_s": new SubDVerticesInput_subd_s(),
		}
		this.output = {
			"point_p": new SubDVerticesOutput_point_p(),
			"id_i": new SubDVerticesOutput_id_i(),
		}
	}

}

class SubDVerticesInput_subd_s extends ResthopperParameter {

	public name: string = "SubD";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "SubD"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubDVerticesOutput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubDVerticesOutput_id_i extends ResthopperParameter {

	public name: string = "Id";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
