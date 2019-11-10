import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TangentLines extends ResthopperComponent {

	public guid: string = "ea0f0996-af7a-481d-8099-09c041e6c2d5";
	public name: string = "TangentLines";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create tangent lines between a point and a circle";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Point_P": TangentLinesInput_Point_P,
		"Circle_C": TangentLinesInput_Circle_C,
	}

	public output:
	{
		"Tangent1_T1": TangentLinesOutput_Tangent1_T1,
		"Tangent2_T2": TangentLinesOutput_Tangent2_T2,
	}

	constructor() {
		super();
		this.input = {
			"Point_P": new TangentLinesInput_Point_P(),
			"Circle_C": new TangentLinesInput_Circle_C(),
		}
		this.output = {
			"Tangent1_T1": new TangentLinesOutput_Tangent1_T1(),
			"Tangent2_T2": new TangentLinesOutput_Tangent2_T2(),
		}
	}

}

class TangentLinesInput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TangentLinesInput_Circle_C extends ResthopperParameter {

	public name: string = "Circle";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Circle;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TangentLinesOutput_Tangent1_T1 extends ResthopperParameter {

	public name: string = "Tangent1";
	public nickName: string = "T1";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TangentLinesOutput_Tangent2_T2 extends ResthopperParameter {

	public name: string = "Tangent2";
	public nickName: string = "T2";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
