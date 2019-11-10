import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshSplit extends ResthopperComponent {

	public guid: string = "afbf2fe0-4965-48d2-8470-9e991540093b";
	public name: string = "MeshSplit";
	public category: string = "Intersect";
	public subCategory: string = "Shape";
	public description: string = "Mesh Mesh split";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Mesh_M": MeshSplitInput_Mesh_M,
		"Splitters_S": MeshSplitInput_Splitters_S,
	}

	public output:
	{
		"Result_R": MeshSplitOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"Mesh_M": new MeshSplitInput_Mesh_M(),
			"Splitters_S": new MeshSplitInput_Splitters_S(),
		}
		this.output = {
			"Result_R": new MeshSplitOutput_Result_R(),
		}
	}

}

class MeshSplitInput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshSplitInput_Splitters_S extends ResthopperParameter {

	public name: string = "Splitters";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshSplitOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
