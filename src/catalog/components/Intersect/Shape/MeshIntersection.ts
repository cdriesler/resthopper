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

	public library: string = "Surface Components";

	public input:
	{
		"MeshesA_A": MeshIntersectionInput_MeshesA_A,
		"MeshesB_B": MeshIntersectionInput_MeshesB_B,
	}

	public output:
	{
		"Result_R": MeshIntersectionOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"MeshesA_A": new MeshIntersectionInput_MeshesA_A(),
			"MeshesB_B": new MeshIntersectionInput_MeshesB_B(),
		}
		this.output = {
			"Result_R": new MeshIntersectionOutput_Result_R(),
		}
	}

}

class MeshIntersectionInput_MeshesA_A extends ResthopperParameter {

	public name: string = "MeshesA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshIntersectionInput_MeshesB_B extends ResthopperParameter {

	public name: string = "MeshesB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshIntersectionOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
