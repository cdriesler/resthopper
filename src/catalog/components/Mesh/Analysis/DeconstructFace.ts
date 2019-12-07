import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DeconstructFace extends ResthopperComponent {

	public guid: string = "aab142b1-b870-46de-8e86-654c9a554d90";
	public name: string = "DeconstructFace";
	public nickName: string = "DeFace";
	public category: string = "Mesh";
	public subCategory: string = "Analysis";
	public description: string = "Deconstruct a mesh face into its four corner indices.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"face_f": DeconstructFaceInput_face_f,
	}

	public output:
	{
		"cornera_a": DeconstructFaceOutput_cornera_a,
		"cornerb_b": DeconstructFaceOutput_cornerb_b,
		"cornerc_c": DeconstructFaceOutput_cornerc_c,
		"cornerd_d": DeconstructFaceOutput_cornerd_d,
	}

	constructor() {
		super();
		this.input = {
			"face_f": new DeconstructFaceInput_face_f(),
		}
		this.output = {
			"cornera_a": new DeconstructFaceOutput_cornera_a(),
			"cornerb_b": new DeconstructFaceOutput_cornerb_b(),
			"cornerc_c": new DeconstructFaceOutput_cornerc_c(),
			"cornerd_d": new DeconstructFaceOutput_cornerd_d(),
		}
	}

}

class DeconstructFaceInput_face_f extends ResthopperParameter {

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

class DeconstructFaceOutput_cornera_a extends ResthopperParameter {

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

class DeconstructFaceOutput_cornerb_b extends ResthopperParameter {

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

class DeconstructFaceOutput_cornerc_c extends ResthopperParameter {

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

class DeconstructFaceOutput_cornerd_d extends ResthopperParameter {

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
