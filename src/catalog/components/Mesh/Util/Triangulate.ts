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
		"mesh_m": TriangulateInput_mesh_m,
	}

	public output:
	{
		"mesh_m": TriangulateOutput_mesh_m,
		"count_n": TriangulateOutput_count_n,
	}

	constructor() {
		super();
		this.input = {
			"mesh_m": new TriangulateInput_mesh_m(),
		}
		this.output = {
			"mesh_m": new TriangulateOutput_mesh_m(),
			"count_n": new TriangulateOutput_count_n(),
		}
	}

}

class TriangulateInput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TriangulateOutput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TriangulateOutput_count_n extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
