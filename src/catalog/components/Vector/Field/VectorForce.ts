import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class VectorForce extends ResthopperComponent {

	public guid: string = "d27cc1ea-9ef7-47bf-8ee2-c6662da0e3d9";
	public name: string = "Vector Force";
	public nickName: string = "FVector";
	public category: string = "Vector";
	public subCategory: string = "Field";
	public description: string = "Create a field due to a vector force";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Field Components";

	public input:
	{
		"line_l": VectorForceInput_line_l,
		"bounds_b": VectorForceInput_bounds_b,
	}

	public output:
	{
		"field_f": VectorForceOutput_field_f,
	}

	constructor() {
		super();
		this.input = {
			"line_l": new VectorForceInput_line_l(),
			"bounds_b": new VectorForceInput_bounds_b(),
		}
		this.output = {
			"field_f": new VectorForceOutput_field_f(),
		}
	}

}

class VectorForceInput_line_l extends ResthopperParameter {

	public name: string = "Line";
	public nickName: string = "L";
	public description: string = "Empty Line parameter"
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VectorForceInput_bounds_b extends ResthopperParameter {

	public name: string = "Bounds";
	public nickName: string = "B";
	public description: string = "Empty Box parameter"
	public isOptional: boolean = true;
	public typeName: string = "Box"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VectorForceOutput_field_f extends ResthopperParameter {

	public name: string = "Field";
	public nickName: string = "F";
	public description: string = "Empty Field parameter"
	public isOptional: boolean = false;
	public typeName: string = "Field"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
