import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshQuad extends ResthopperComponent {

	public guid: string = "1cb59c86-7f6b-4e52-9a0c-6441850e9520";
	public name: string = "MeshQuad";
	public category: string = "Mesh";
	public subCategory: string = "Primitive";
	public description: string = "Create a mesh quad.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"CornerA_A": MeshQuadInput_CornerA_A,
		"CornerB_B": MeshQuadInput_CornerB_B,
		"CornerC_C": MeshQuadInput_CornerC_C,
		"CornerD_D": MeshQuadInput_CornerD_D,
	}

	public output:
	{
		"Face_F": MeshQuadOutput_Face_F,
	}

	constructor() {
		super();
		this.input = {
			"CornerA_A": new MeshQuadInput_CornerA_A(),
			"CornerB_B": new MeshQuadInput_CornerB_B(),
			"CornerC_C": new MeshQuadInput_CornerC_C(),
			"CornerD_D": new MeshQuadInput_CornerD_D(),
		}
		this.output = {
			"Face_F": new MeshQuadOutput_Face_F(),
		}
	}

}

class MeshQuadInput_CornerA_A extends ResthopperParameter {

	public name: string = "CornerA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshQuadInput_CornerB_B extends ResthopperParameter {

	public name: string = "CornerB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshQuadInput_CornerC_C extends ResthopperParameter {

	public name: string = "CornerC";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshQuadInput_CornerD_D extends ResthopperParameter {

	public name: string = "CornerD";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshQuadOutput_Face_F extends ResthopperParameter {

	public name: string = "Face";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Mesh face;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
