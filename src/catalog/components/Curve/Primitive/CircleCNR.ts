import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CircleCNR extends ResthopperComponent {

	public guid: string = "d114323a-e6ee-4164-946b-e4ca0ce15efa";
	public name: string = "CircleCNR";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create a circle defined by center, normal and radius.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Center_C": CircleCNRInput_Center_C,
		"Normal_N": CircleCNRInput_Normal_N,
		"Radius_R": CircleCNRInput_Radius_R,
	}

	public output:
	{
		"Circle_C": CircleCNROutput_Circle_C,
	}

	constructor() {
		super();
		this.input = {
			"Center_C": new CircleCNRInput_Center_C(),
			"Normal_N": new CircleCNRInput_Normal_N(),
			"Radius_R": new CircleCNRInput_Radius_R(),
		}
		this.output = {
			"Circle_C": new CircleCNROutput_Circle_C(),
		}
	}

}

class CircleCNRInput_Center_C extends ResthopperParameter {

	public name: string = "Center";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircleCNRInput_Normal_N extends ResthopperParameter {

	public name: string = "Normal";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircleCNRInput_Radius_R extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircleCNROutput_Circle_C extends ResthopperParameter {

	public name: string = "Circle";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Circle;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
