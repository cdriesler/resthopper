import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshMesh extends ResthopperComponent {

	public guid: string = "21b6a605-9568-4bf8-acc1-631565d609d7";
	public name: string = "MeshMesh";
	public nickName: string = "MMX";
	public category: string = "Intersect";
	public subCategory: string = "Physical";
	public description: string = "Mesh Mesh intersection";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"mesha_a": MeshMeshInput_mesha_a,
		"meshb_b": MeshMeshInput_meshb_b,
	}

	public output:
	{
		"intersections_x": MeshMeshOutput_intersections_x,
	}

	constructor() {
		super();
		this.input = {
			"mesha_a": new MeshMeshInput_mesha_a(),
			"meshb_b": new MeshMeshInput_meshb_b(),
		}
		this.output = {
			"intersections_x": new MeshMeshOutput_intersections_x(),
		}
	}

}

class MeshMeshInput_mesha_a extends ResthopperParameter {

	public name: string = "MeshA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshMeshInput_meshb_b extends ResthopperParameter {

	public name: string = "MeshB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshMeshOutput_intersections_x extends ResthopperParameter {

	public name: string = "Intersections";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
