import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class VectorTwoPt extends ResthopperComponent {

	public guid: string = "934ede4a-924a-4973-bb05-0dc4b36fae75";
	public name: string = "Vector2Pt";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Create a vector between two points.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"PointA_A": VectorTwoPtInput_PointA_A,
		"PointB_B": VectorTwoPtInput_PointB_B,
		"Unitize_U": VectorTwoPtInput_Unitize_U,
	}

	public output:
	{
		"Vector_V": VectorTwoPtOutput_Vector_V,
		"Length_L": VectorTwoPtOutput_Length_L,
	}

	constructor() {
		super();
		this.input = {
			"PointA_A": new VectorTwoPtInput_PointA_A(),
			"PointB_B": new VectorTwoPtInput_PointB_B(),
			"Unitize_U": new VectorTwoPtInput_Unitize_U(),
		}
		this.output = {
			"Vector_V": new VectorTwoPtOutput_Vector_V(),
			"Length_L": new VectorTwoPtOutput_Length_L(),
		}
	}

}

class VectorTwoPtInput_PointA_A extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VectorTwoPtInput_PointB_B extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VectorTwoPtInput_Unitize_U extends ResthopperParameter {

	public name: string = "Unitize";
	public nickName: string = "U";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VectorTwoPtOutput_Vector_V extends ResthopperParameter {

	public name: string = "Vector";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VectorTwoPtOutput_Length_L extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
