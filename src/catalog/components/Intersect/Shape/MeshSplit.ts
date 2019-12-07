import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshSplit extends ResthopperComponent {

	public guid: string = "afbf2fe0-4965-48d2-8470-9e991540093b";
	public name: string = "MeshSplit";
	public nickName: string = "MSplit";
	public category: string = "Intersect";
	public subCategory: string = "Shape";
	public description: string = "Mesh Mesh split";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"mesh_m": MeshSplitInput_mesh_m,
		"splitters_s": MeshSplitInput_splitters_s,
	}

	public output:
	{
		"result_r": MeshSplitOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"mesh_m": new MeshSplitInput_mesh_m(),
			"splitters_s": new MeshSplitInput_splitters_s(),
		}
		this.output = {
			"result_r": new MeshSplitOutput_result_r(),
		}
	}

}

class MeshSplitInput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public description: string = "Empty Mesh parameter"
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshSplitInput_splitters_s extends ResthopperParameter {

	public name: string = "Splitters";
	public nickName: string = "S";
	public description: string = "Empty Mesh parameter"
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshSplitOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public description: string = "Empty Mesh parameter"
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
