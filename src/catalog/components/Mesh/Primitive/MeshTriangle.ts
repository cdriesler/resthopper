import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshTriangle extends ResthopperComponent {

	public guid: string = "5a4ddedd-5af9-49e5-bace-12910a8b9366";
	public name: string = "MeshTriangle";
	public category: string = "Mesh";
	public subCategory: string = "Primitive";
	public description: string = "Create a mesh triangle.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"CornerA_A": MeshTriangleInput_CornerA_A,
		"CornerB_B": MeshTriangleInput_CornerB_B,
		"CornerC_C": MeshTriangleInput_CornerC_C,
	}

	public output:
	{
		"Face_F": MeshTriangleOutput_Face_F,
	}

	constructor() {
		super();
		this.input = {
			"CornerA_A": new MeshTriangleInput_CornerA_A(),
			"CornerB_B": new MeshTriangleInput_CornerB_B(),
			"CornerC_C": new MeshTriangleInput_CornerC_C(),
		}
		this.output = {
			"Face_F": new MeshTriangleOutput_Face_F(),
		}
	}

}

class MeshTriangleInput_CornerA_A extends ResthopperParameter {

	public name: string = "CornerA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshTriangleInput_CornerB_B extends ResthopperParameter {

	public name: string = "CornerB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshTriangleInput_CornerC_C extends ResthopperParameter {

	public name: string = "CornerC";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshTriangleOutput_Face_F extends ResthopperParameter {

	public name: string = "Face";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Mesh face;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
