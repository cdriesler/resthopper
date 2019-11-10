import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DeconstructFace extends ResthopperComponent {

	public guid: string = "aab142b1-b870-46de-8e86-654c9a554d90";
	public name: string = "DeconstructFace";
	public category: string = "Mesh";
	public subCategory: string = "Analysis";
	public description: string = "Deconstruct a mesh face into its four corner indices.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Face_F": DeconstructFaceInput_Face_F,
	}

	public output:
	{
		"CornerA_A": DeconstructFaceOutput_CornerA_A,
		"CornerB_B": DeconstructFaceOutput_CornerB_B,
		"CornerC_C": DeconstructFaceOutput_CornerC_C,
		"CornerD_D": DeconstructFaceOutput_CornerD_D,
	}

	constructor() {
		super();
		this.input = {
			"Face_F": new DeconstructFaceInput_Face_F(),
		}
		this.output = {
			"CornerA_A": new DeconstructFaceOutput_CornerA_A(),
			"CornerB_B": new DeconstructFaceOutput_CornerB_B(),
			"CornerC_C": new DeconstructFaceOutput_CornerC_C(),
			"CornerD_D": new DeconstructFaceOutput_CornerD_D(),
		}
	}

}

class DeconstructFaceInput_Face_F extends ResthopperParameter {

	public name: string = "Face";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Mesh face;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructFaceOutput_CornerA_A extends ResthopperParameter {

	public name: string = "CornerA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructFaceOutput_CornerB_B extends ResthopperParameter {

	public name: string = "CornerB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructFaceOutput_CornerC_C extends ResthopperParameter {

	public name: string = "CornerC";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructFaceOutput_CornerD_D extends ResthopperParameter {

	public name: string = "CornerD";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
