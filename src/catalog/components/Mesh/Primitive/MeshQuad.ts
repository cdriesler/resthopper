import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshQuad extends ResthopperComponent {

	public guid: string = "1cb59c86-7f6b-4e52-9a0c-6441850e9520";
	public name: string = "MeshQuad";
	public nickName: string = "Quad";
	public category: string = "Mesh";
	public subCategory: string = "Primitive";
	public description: string = "Create a mesh quad.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"cornera_a": MeshQuadInput_cornera_a,
		"cornerb_b": MeshQuadInput_cornerb_b,
		"cornerc_c": MeshQuadInput_cornerc_c,
		"cornerd_d": MeshQuadInput_cornerd_d,
	}

	public output:
	{
		"face_f": MeshQuadOutput_face_f,
	}

	constructor() {
		super();
		this.input = {
			"cornera_a": new MeshQuadInput_cornera_a(),
			"cornerb_b": new MeshQuadInput_cornerb_b(),
			"cornerc_c": new MeshQuadInput_cornerc_c(),
			"cornerd_d": new MeshQuadInput_cornerd_d(),
		}
		this.output = {
			"face_f": new MeshQuadOutput_face_f(),
		}
	}

}

class MeshQuadInput_cornera_a extends ResthopperParameter {

	public name: string = "CornerA";
	public nickName: string = "A";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshQuadInput_cornerb_b extends ResthopperParameter {

	public name: string = "CornerB";
	public nickName: string = "B";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshQuadInput_cornerc_c extends ResthopperParameter {

	public name: string = "CornerC";
	public nickName: string = "C";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshQuadInput_cornerd_d extends ResthopperParameter {

	public name: string = "CornerD";
	public nickName: string = "D";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshQuadOutput_face_f extends ResthopperParameter {

	public name: string = "Face";
	public nickName: string = "F";
	public description: string = "Empty Mesh face parameter"
	public isOptional: boolean = false;
	public typeName: string = "Mesh face"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
