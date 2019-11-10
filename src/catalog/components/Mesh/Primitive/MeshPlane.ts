import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshPlane extends ResthopperComponent {

	public guid: string = "8adbf481-7589-4a40-b490-006531ea001d";
	public name: string = "MeshPlane";
	public category: string = "Mesh";
	public subCategory: string = "Primitive";
	public description: string = "Create a mesh plane.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Boundary_B": MeshPlaneInput_Boundary_B,
		"Widthcount_W": MeshPlaneInput_Widthcount_W,
		"Heightcount_H": MeshPlaneInput_Heightcount_H,
	}

	public output:
	{
		"Mesh_M": MeshPlaneOutput_Mesh_M,
		"Area_A": MeshPlaneOutput_Area_A,
	}

	constructor() {
		super();
		this.input = {
			"Boundary_B": new MeshPlaneInput_Boundary_B(),
			"Widthcount_W": new MeshPlaneInput_Widthcount_W(),
			"Heightcount_H": new MeshPlaneInput_Heightcount_H(),
		}
		this.output = {
			"Mesh_M": new MeshPlaneOutput_Mesh_M(),
			"Area_A": new MeshPlaneOutput_Area_A(),
		}
	}

}

class MeshPlaneInput_Boundary_B extends ResthopperParameter {

	public name: string = "Boundary";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Rectangle;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshPlaneInput_Widthcount_W extends ResthopperParameter {

	public name: string = "Widthcount";
	public nickName: string = "W";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshPlaneInput_Heightcount_H extends ResthopperParameter {

	public name: string = "Heightcount";
	public nickName: string = "H";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshPlaneOutput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshPlaneOutput_Area_A extends ResthopperParameter {

	public name: string = "Area";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
