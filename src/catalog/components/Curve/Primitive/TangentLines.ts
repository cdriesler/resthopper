import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TangentLines extends ResthopperComponent {

	public guid: string = "ea0f0996-af7a-481d-8099-09c041e6c2d5";
	public name: string = "TangentLines";
	public nickName: string = "Tan";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create tangent lines between a point and a circle";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"point_p": TangentLinesInput_point_p,
		"circle_c": TangentLinesInput_circle_c,
	}

	public output:
	{
		"tangent1_t1": TangentLinesOutput_tangent1_t1,
		"tangent2_t2": TangentLinesOutput_tangent2_t2,
	}

	constructor() {
		super();
		this.input = {
			"point_p": new TangentLinesInput_point_p(),
			"circle_c": new TangentLinesInput_circle_c(),
		}
		this.output = {
			"tangent1_t1": new TangentLinesOutput_tangent1_t1(),
			"tangent2_t2": new TangentLinesOutput_tangent2_t2(),
		}
	}

}

class TangentLinesInput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TangentLinesInput_circle_c extends ResthopperParameter {

	public name: string = "Circle";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Circle"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TangentLinesOutput_tangent1_t1 extends ResthopperParameter {

	public name: string = "Tangent1";
	public nickName: string = "T1";
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TangentLinesOutput_tangent2_t2 extends ResthopperParameter {

	public name: string = "Tangent2";
	public nickName: string = "T2";
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
