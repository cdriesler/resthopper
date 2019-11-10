import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Circle extends ResthopperComponent {

	public guid: string = "807b86e3-be8d-4970-92b5-f8cdcb45b06b";
	public name: string = "Circle";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create a circle defined by base plane and radius.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Plane_P": CircleInput_Plane_P,
		"Radius_R": CircleInput_Radius_R,
	}

	public output:
	{
		"Circle_C": CircleOutput_Circle_C,
	}

	constructor() {
		super();
		this.input = {
			"Plane_P": new CircleInput_Plane_P(),
			"Radius_R": new CircleInput_Radius_R(),
		}
		this.output = {
			"Circle_C": new CircleOutput_Circle_C(),
		}
	}

}

class CircleInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircleInput_Radius_R extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircleOutput_Circle_C extends ResthopperParameter {

	public name: string = "Circle";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Circle;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
