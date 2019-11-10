import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshEdges extends ResthopperComponent {

	public guid: string = "2b9bf01d-5fe5-464c-b0b3-b469eb5f2efb";
	public name: string = "MeshEdges";
	public category: string = "Mesh";
	public subCategory: string = "Analysis";
	public description: string = "Get all the edges of a mesh";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Mesh_M": MeshEdgesInput_Mesh_M,
	}

	public output:
	{
		"NakedEdges_E1": MeshEdgesOutput_NakedEdges_E1,
		"InteriorEdges_E2": MeshEdgesOutput_InteriorEdges_E2,
		"NonManifoldEdges_E3": MeshEdgesOutput_NonManifoldEdges_E3,
	}

	constructor() {
		super();
		this.input = {
			"Mesh_M": new MeshEdgesInput_Mesh_M(),
		}
		this.output = {
			"NakedEdges_E1": new MeshEdgesOutput_NakedEdges_E1(),
			"InteriorEdges_E2": new MeshEdgesOutput_InteriorEdges_E2(),
			"NonManifoldEdges_E3": new MeshEdgesOutput_NonManifoldEdges_E3(),
		}
	}

}

class MeshEdgesInput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshEdgesOutput_NakedEdges_E1 extends ResthopperParameter {

	public name: string = "NakedEdges";
	public nickName: string = "E1";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshEdgesOutput_InteriorEdges_E2 extends ResthopperParameter {

	public name: string = "InteriorEdges";
	public nickName: string = "E2";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshEdgesOutput_NonManifoldEdges_E3 extends ResthopperParameter {

	public name: string = "NonManifoldEdges";
	public nickName: string = "E3";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
