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
		"Point_P": VectorDisplayExInput_Point_P,
		"Vector_V": VectorDisplayExInput_Vector_V,
		"Colour_C": VectorDisplayExInput_Colour_C,
		"Width_W": VectorDisplayExInput_Width_W,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"Point_P": new VectorDisplayExInput_Point_P(),
			"Vector_V": new VectorDisplayExInput_Vector_V(),
			"Colour_C": new VectorDisplayExInput_Colour_C(),
			"Width_W": new VectorDisplayExInput_Width_W(),
		}
		this.output = {

		}
	}

}

class VectorDisplayExInput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = true;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VectorDisplayExInput_Vector_V extends ResthopperParameter {

	public name: string = "Vector";
	public nickName: string = "V";
	public isOptional: boolean = true;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VectorDisplayExInput_Colour_C extends ResthopperParameter {

	public name: string = "Colour";
	public nickName: string = "C";
	public isOptional: boolean = true;
	public typeName: string = "Colour;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VectorDisplayExInput_Width_W extends ResthopperParameter {

	public name: string = "Width";
	public nickName: string = "W";
	public isOptional: boolean = true;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
