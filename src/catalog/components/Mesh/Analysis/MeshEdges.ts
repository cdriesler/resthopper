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
		"mesh_m": MeshEdgesInput_mesh_m,
	}

	public output:
	{
		"nakededges_e1": MeshEdgesOutput_nakededges_e1,
		"interioredges_e2": MeshEdgesOutput_interioredges_e2,
		"nonmanifoldedges_e3": MeshEdgesOutput_nonmanifoldedges_e3,
	}

	constructor() {
		super();
		this.input = {
			"mesh_m": new MeshEdgesInput_mesh_m(),
		}
		this.output = {
			"nakededges_e1": new MeshEdgesOutput_nakededges_e1(),
			"interioredges_e2": new MeshEdgesOutput_interioredges_e2(),
			"nonmanifoldedges_e3": new MeshEdgesOutput_nonmanifoldedges_e3(),
		}
	}

}

class MeshEdgesInput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshEdgesOutput_nakededges_e1 extends ResthopperParameter {

	public name: string = "NakedEdges";
	public nickName: string = "E1";
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshEdgesOutput_interioredges_e2 extends ResthopperParameter {

	public name: string = "InteriorEdges";
	public nickName: string = "E2";
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshEdgesOutput_nonmanifoldedges_e3 extends ResthopperParameter {

	public name: string = "NonManifoldEdges";
	public nickName: string = "E3";
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
