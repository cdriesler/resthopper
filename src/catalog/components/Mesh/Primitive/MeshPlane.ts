import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshPlane extends ResthopperComponent {

	public guid: string = "8adbf481-7589-4a40-b490-006531ea001d";
	public name: string = "Mesh Plane";
	public nickName: string = "MPlane";
	public category: string = "Mesh";
	public subCategory: string = "Primitive";
	public description: string = "Create a mesh plane.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"boundary_b": MeshPlaneInput_boundary_b,
		"widthcount_w": MeshPlaneInput_widthcount_w,
		"heightcount_h": MeshPlaneInput_heightcount_h,
	}

	public output:
	{
		"mesh_m": MeshPlaneOutput_mesh_m,
		"area_a": MeshPlaneOutput_area_a,
	}

	constructor() {
		super();
		this.input = {
			"boundary_b": new MeshPlaneInput_boundary_b(),
			"widthcount_w": new MeshPlaneInput_widthcount_w(),
			"heightcount_h": new MeshPlaneInput_heightcount_h(),
		}
		this.output = {
			"mesh_m": new MeshPlaneOutput_mesh_m(),
			"area_a": new MeshPlaneOutput_area_a(),
		}
	}

}

class MeshPlaneInput_boundary_b extends ResthopperParameter {

	public name: string = "Boundary";
	public nickName: string = "B";
	public description: string = "Rectangle describing boundary of plane"
	public isOptional: boolean = false;
	public typeName: string = "Rectangle"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshPlaneInput_widthcount_w extends ResthopperParameter {

	public name: string = "Widthcount";
	public nickName: string = "W";
	public description: string = "Number of faces along {x} direction"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshPlaneInput_heightcount_h extends ResthopperParameter {

	public name: string = "Heightcount";
	public nickName: string = "H";
	public description: string = "Number of faces along {y} direction"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshPlaneOutput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public description: string = "Mesh plane"
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshPlaneOutput_area_a extends ResthopperParameter {

	public name: string = "Area";
	public nickName: string = "A";
	public description: string = "Area of mesh plane"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
