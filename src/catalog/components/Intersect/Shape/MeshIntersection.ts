import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshIntersection extends ResthopperComponent {

	public guid: string = "95aef4f6-66fc-477e-b8f8-32395a837831";
	public name: string = "MeshIntersection";
	public category: string = "Intersect";
	public subCategory: string = "Shape";
	public description: string = "Perform a solid intersection on a set of meshes";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"meshesa_a": MeshIntersectionInput_meshesa_a,
		"meshesb_b": MeshIntersectionInput_meshesb_b,
	}

	public output:
	{
		"result_r": MeshIntersectionOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"meshesa_a": new MeshIntersectionInput_meshesa_a(),
			"meshesb_b": new MeshIntersectionInput_meshesb_b(),
		}
		this.output = {
			"result_r": new MeshIntersectionOutput_result_r(),
		}
	}

}

class MeshIntersectionInput_meshesa_a extends ResthopperParameter {

	public name: string = "MeshesA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshIntersectionInput_meshesb_b extends ResthopperParameter {

	public name: string = "MeshesB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshIntersectionOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
