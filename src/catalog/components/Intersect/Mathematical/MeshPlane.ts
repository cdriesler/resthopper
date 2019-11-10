import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshPlane extends ResthopperComponent {

	public guid: string = "3b1ae469-0e9b-461d-8c30-fa5a7de8b7a9";
	public name: string = "MeshPlane";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Solve intersection events for a Mesh and a Plane (otherwise known as section).";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Mesh_M": MeshPlaneInput_Mesh_M,
		"Plane_P": MeshPlaneInput_Plane_P,
	}

	public output:
	{
		"Curves_C": MeshPlaneOutput_Curves_C,
	}

	constructor() {
		super();
		this.input = {
			"Mesh_M": new MeshPlaneInput_Mesh_M(),
			"Plane_P": new MeshPlaneInput_Plane_P(),
		}
		this.output = {
			"Curves_C": new MeshPlaneOutput_Curves_C(),
		}
	}

}

class MeshPlaneInput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshPlaneInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshPlaneOutput_Curves_C extends ResthopperParameter {

	public name: string = "Curves";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
