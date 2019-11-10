import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TangentLinesIn extends ResthopperComponent {

	public guid: string = "e0168047-c46a-48c6-8595-2fb3d8574f23";
	public name: string = "TangentLinesIn";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create internal tangent lines between circles";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"circlea_a": TangentLinesInInput_circlea_a,
		"circleb_b": TangentLinesInInput_circleb_b,
	}

	public output:
	{
		"tangent1_t1": TangentLinesInOutput_tangent1_t1,
		"tangent2_t2": TangentLinesInOutput_tangent2_t2,
	}

	constructor() {
		super();
		this.input = {
			"circlea_a": new TangentLinesInInput_circlea_a(),
			"circleb_b": new TangentLinesInInput_circleb_b(),
		}
		this.output = {
			"tangent1_t1": new TangentLinesInOutput_tangent1_t1(),
			"tangent2_t2": new TangentLinesInOutput_tangent2_t2(),
		}
	}

}

class TangentLinesInInput_circlea_a extends ResthopperParameter {

	public name: string = "CircleA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Circle"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TangentLinesInInput_circleb_b extends ResthopperParameter {

	public name: string = "CircleB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Circle"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TangentLinesInOutput_tangent1_t1 extends ResthopperParameter {

	public name: string = "Tangent1";
	public nickName: string = "T1";
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TangentLinesInOutput_tangent2_t2 extends ResthopperParameter {

	public name: string = "Tangent2";
	public nickName: string = "T2";
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
