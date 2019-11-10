import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshMesh extends ResthopperComponent {

	public guid: string = "21b6a605-9568-4bf8-acc1-631565d609d7";
	public name: string = "MeshMesh";
	public category: string = "Intersect";
	public subCategory: string = "Physical";
	public description: string = "Mesh Mesh intersection";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"MeshA_A": MeshMeshInput_MeshA_A,
		"MeshB_B": MeshMeshInput_MeshB_B,
	}

	public output:
	{
		"Intersections_X": MeshMeshOutput_Intersections_X,
	}

	constructor() {
		super();
		this.input = {
			"MeshA_A": new MeshMeshInput_MeshA_A(),
			"MeshB_B": new MeshMeshInput_MeshB_B(),
		}
		this.output = {
			"Intersections_X": new MeshMeshOutput_Intersections_X(),
		}
	}

}

class MeshMeshInput_MeshA_A extends ResthopperParameter {

	public name: string = "MeshA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshMeshInput_MeshB_B extends ResthopperParameter {

	public name: string = "MeshB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshMeshOutput_Intersections_X extends ResthopperParameter {

	public name: string = "Intersections";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
