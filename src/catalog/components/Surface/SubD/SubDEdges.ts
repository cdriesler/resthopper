import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SubDEdges extends ResthopperComponent {

	public guid: string = "2183c4c6-b5b3-45d2-9261-2096c9357f92";
	public name: string = "SubDEdges";
	public category: string = "Surface";
	public subCategory: string = "SubD";
	public description: string = "Extract all edge data from a Sub-D surface.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"SubD_S": SubDEdgesInput_SubD_S,
	}

	public output:
	{
		"Line_L": SubDEdgesOutput_Line_L,
		"Edge_E": SubDEdgesOutput_Edge_E,
		"Tag_T": SubDEdgesOutput_Tag_T,
		"Id_I": SubDEdgesOutput_Id_I,
	}

	constructor() {
		super();
		this.input = {
			"SubD_S": new SubDEdgesInput_SubD_S(),
		}
		this.output = {
			"Line_L": new SubDEdgesOutput_Line_L(),
			"Edge_E": new SubDEdgesOutput_Edge_E(),
			"Tag_T": new SubDEdgesOutput_Tag_T(),
			"Id_I": new SubDEdgesOutput_Id_I(),
		}
	}

}

class SubDEdgesInput_SubD_S extends ResthopperParameter {

	public name: string = "SubD";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "SubD;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubDEdgesOutput_Line_L extends ResthopperParameter {

	public name: string = "Line";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubDEdgesOutput_Edge_E extends ResthopperParameter {

	public name: string = "Edge";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubDEdgesOutput_Tag_T extends ResthopperParameter {

	public name: string = "Tag";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubDEdgesOutput_Id_I extends ResthopperParameter {

	public name: string = "Id";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
