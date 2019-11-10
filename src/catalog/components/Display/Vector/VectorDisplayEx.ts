import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class VectorDisplayEx extends ResthopperComponent {

	public guid: string = "11e95a7b-1e2c-4b66-bd95-fcad51f8662a";
	public name: string = "VectorDisplayEx";
	public category: string = "Display";
	public subCategory: string = "Vector";
	public description: string = "Preview vectors in the viewport";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"point_p": VectorDisplayExInput_point_p,
		"vector_v": VectorDisplayExInput_vector_v,
		"colour_c": VectorDisplayExInput_colour_c,
		"width_w": VectorDisplayExInput_width_w,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"point_p": new VectorDisplayExInput_point_p(),
			"vector_v": new VectorDisplayExInput_vector_v(),
			"colour_c": new VectorDisplayExInput_colour_c(),
			"width_w": new VectorDisplayExInput_width_w(),
		}
		this.output = {

		}
	}

}

class VectorDisplayExInput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = true;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VectorDisplayExInput_vector_v extends ResthopperParameter {

	public name: string = "Vector";
	public nickName: string = "V";
	public isOptional: boolean = true;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VectorDisplayExInput_colour_c extends ResthopperParameter {

	public name: string = "Colour";
	public nickName: string = "C";
	public isOptional: boolean = true;
	public typeName: string = "Colour;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VectorDisplayExInput_width_w extends ResthopperParameter {

	public name: string = "Width";
	public nickName: string = "W";
	public isOptional: boolean = true;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
