import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class VectorTwoPt extends ResthopperComponent {

	public guid: string = "934ede4a-924a-4973-bb05-0dc4b36fae75";
	public name: string = "Vector2Pt";
	public nickName: string = "Vec2Pt";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Create a vector between two points.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"pointa_a": VectorTwoPtInput_pointa_a,
		"pointb_b": VectorTwoPtInput_pointb_b,
		"unitize_u": VectorTwoPtInput_unitize_u,
	}

	public output:
	{
		"vector_v": VectorTwoPtOutput_vector_v,
		"length_l": VectorTwoPtOutput_length_l,
	}

	constructor() {
		super();
		this.input = {
			"pointa_a": new VectorTwoPtInput_pointa_a(),
			"pointb_b": new VectorTwoPtInput_pointb_b(),
			"unitize_u": new VectorTwoPtInput_unitize_u(),
		}
		this.output = {
			"vector_v": new VectorTwoPtOutput_vector_v(),
			"length_l": new VectorTwoPtOutput_length_l(),
		}
	}

}

class VectorTwoPtInput_pointa_a extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VectorTwoPtInput_pointb_b extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VectorTwoPtInput_unitize_u extends ResthopperParameter {

	public name: string = "Unitize";
	public nickName: string = "U";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VectorTwoPtOutput_vector_v extends ResthopperParameter {

	public name: string = "Vector";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VectorTwoPtOutput_length_l extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
