import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshPlane extends ResthopperComponent {

	public guid: string = "3b1ae469-0e9b-461d-8c30-fa5a7de8b7a9";
	public name: string = "Mesh | Plane";
	public nickName: string = "Sec";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Solve intersection events for a Mesh and a Plane (otherwise known as section).";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"mesh_m": MeshPlaneInput_mesh_m,
		"plane_p": MeshPlaneInput_plane_p,
	}

	public output:
	{
		"curves_c": MeshPlaneOutput_curves_c,
	}

	constructor() {
		super();
		this.input = {
			"mesh_m": new MeshPlaneInput_mesh_m(),
			"plane_p": new MeshPlaneInput_plane_p(),
		}
		this.output = {
			"curves_c": new MeshPlaneOutput_curves_c(),
		}
	}

}

class MeshPlaneInput_mesh_m extends ResthopperParameter {

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

class MeshPlaneInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public description: string = "Empty Plane parameter"
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshPlaneOutput_curves_c extends ResthopperParameter {

	public name: string = "Curves";
	public nickName: string = "C";
	public description: string = "Empty Curve parameter"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
