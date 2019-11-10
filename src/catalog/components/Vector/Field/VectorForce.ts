import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class VectorForce extends ResthopperComponent {

	public guid: string = "d27cc1ea-9ef7-47bf-8ee2-c6662da0e3d9";
	public name: string = "VectorForce";
	public category: string = "Vector";
	public subCategory: string = "Field";
	public description: string = "Create a field due to a vector force";
	public isObsolete: boolean = false;

	public library: string = "Field Components";

	public input:
	{
		"Line_L": VectorForceInput_Line_L,
		"Bounds_B": VectorForceInput_Bounds_B,
	}

	public output:
	{
		"Field_F": VectorForceOutput_Field_F,
	}

	constructor() {
		super();
		this.input = {
			"Line_L": new VectorForceInput_Line_L(),
			"Bounds_B": new VectorForceInput_Bounds_B(),
		}
		this.output = {
			"Field_F": new VectorForceOutput_Field_F(),
		}
	}

}

class VectorForceInput_Line_L extends ResthopperParameter {

	public name: string = "Line";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VectorForceInput_Bounds_B extends ResthopperParameter {

	public name: string = "Bounds";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Box;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VectorForceOutput_Field_F extends ResthopperParameter {

	public name: string = "Field";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Field;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
