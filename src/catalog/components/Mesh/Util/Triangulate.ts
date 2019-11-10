import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Triangulate extends ResthopperComponent {

	public guid: string = "3fba11d5-b30a-4146-8d80-d591e7a0a287";
	public name: string = "Triangulate";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Triangulate all quads in a mesh";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Mesh_M": TriangulateInput_Mesh_M,
	}

	public output:
	{
		"Mesh_M": TriangulateOutput_Mesh_M,
		"Count_N": TriangulateOutput_Count_N,
	}

	constructor() {
		super();
		this.input = {
			"Mesh_M": new TriangulateInput_Mesh_M(),
		}
		this.output = {
			"Mesh_M": new TriangulateOutput_Mesh_M(),
			"Count_N": new TriangulateOutput_Count_N(),
		}
	}

}

class TriangulateInput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TriangulateOutput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TriangulateOutput_Count_N extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
