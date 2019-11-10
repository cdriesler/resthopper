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
		"SubD_S": SubDVerticesInput_SubD_S,
	}

	public output:
	{
		"Point_P": SubDVerticesOutput_Point_P,
		"Id_I": SubDVerticesOutput_Id_I,
	}

	constructor() {
		super();
		this.input = {
			"SubD_S": new SubDVerticesInput_SubD_S(),
		}
		this.output = {
			"Point_P": new SubDVerticesOutput_Point_P(),
			"Id_I": new SubDVerticesOutput_Id_I(),
		}
	}

}

class SubDVerticesInput_SubD_S extends ResthopperParameter {

	public name: string = "SubD";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "SubD;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubDVerticesOutput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubDVerticesOutput_Id_I extends ResthopperParameter {

	public name: string = "Id";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
