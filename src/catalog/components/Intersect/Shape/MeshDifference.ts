import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshDifference extends ResthopperComponent {

	public guid: string = "4f3147f4-9fcd-4a7e-be0e-b1841caa5f97";
	public name: string = "Mesh Difference";
	public nickName: string = "MDif";
	public category: string = "Intersect";
	public subCategory: string = "Shape";
	public description: string = "Perform a solid difference on two sets of meshes";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"meshesa_a": MeshDifferenceInput_meshesa_a,
		"meshesb_b": MeshDifferenceInput_meshesb_b,
	}

	public output:
	{
		"result_r": MeshDifferenceOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"meshesa_a": new MeshDifferenceInput_meshesa_a(),
			"meshesb_b": new MeshDifferenceInput_meshesb_b(),
		}
		this.output = {
			"result_r": new MeshDifferenceOutput_result_r(),
		}
	}

}

class MeshDifferenceInput_meshesa_a extends ResthopperParameter {

	public name: string = "MeshesA";
	public nickName: string = "A";
	public description: string = "First mesh set"
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshDifferenceInput_meshesb_b extends ResthopperParameter {

	public name: string = "MeshesB";
	public nickName: string = "B";
	public description: string = "Second mesh set"
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshDifferenceOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public description: string = "Difference result of A-B"
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
