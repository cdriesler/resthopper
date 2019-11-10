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
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"cornera_a": MeshTriangleInput_cornera_a,
		"cornerb_b": MeshTriangleInput_cornerb_b,
		"cornerc_c": MeshTriangleInput_cornerc_c,
	}

	public output:
	{
		"face_f": MeshTriangleOutput_face_f,
	}

	constructor() {
		super();
		this.input = {
			"cornera_a": new MeshTriangleInput_cornera_a(),
			"cornerb_b": new MeshTriangleInput_cornerb_b(),
			"cornerc_c": new MeshTriangleInput_cornerc_c(),
		}
		this.output = {
			"face_f": new MeshTriangleOutput_face_f(),
		}
	}

}

class MeshTriangleInput_cornera_a extends ResthopperParameter {

	public name: string = "CornerA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshTriangleInput_cornerb_b extends ResthopperParameter {

	public name: string = "CornerB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshTriangleInput_cornerc_c extends ResthopperParameter {

	public name: string = "CornerC";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshTriangleOutput_face_f extends ResthopperParameter {

	public name: string = "Face";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Mesh face"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
