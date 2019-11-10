import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshDifference extends ResthopperComponent {

	public guid: string = "4f3147f4-9fcd-4a7e-be0e-b1841caa5f97";
	public name: string = "MeshDifference";
	public category: string = "Intersect";
	public subCategory: string = "Shape";
	public description: string = "Perform a solid difference on two sets of meshes";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"MeshesA_A": MeshDifferenceInput_MeshesA_A,
		"MeshesB_B": MeshDifferenceInput_MeshesB_B,
	}

	public output:
	{
		"Result_R": MeshDifferenceOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"MeshesA_A": new MeshDifferenceInput_MeshesA_A(),
			"MeshesB_B": new MeshDifferenceInput_MeshesB_B(),
		}
		this.output = {
			"Result_R": new MeshDifferenceOutput_Result_R(),
		}
	}

}

class MeshDifferenceInput_MeshesA_A extends ResthopperParameter {

	public name: string = "MeshesA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshDifferenceInput_MeshesB_B extends ResthopperParameter {

	public name: string = "MeshesB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshDifferenceOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
