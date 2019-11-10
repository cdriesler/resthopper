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
		"CircleA_A": TangentLinesInInput_CircleA_A,
		"CircleB_B": TangentLinesInInput_CircleB_B,
	}

	public output:
	{
		"Tangent1_T1": TangentLinesInOutput_Tangent1_T1,
		"Tangent2_T2": TangentLinesInOutput_Tangent2_T2,
	}

	constructor() {
		super();
		this.input = {
			"CircleA_A": new TangentLinesInInput_CircleA_A(),
			"CircleB_B": new TangentLinesInInput_CircleB_B(),
		}
		this.output = {
			"Tangent1_T1": new TangentLinesInOutput_Tangent1_T1(),
			"Tangent2_T2": new TangentLinesInOutput_Tangent2_T2(),
		}
	}

}

class TangentLinesInInput_CircleA_A extends ResthopperParameter {

	public name: string = "CircleA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Circle;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TangentLinesInInput_CircleB_B extends ResthopperParameter {

	public name: string = "CircleB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Circle;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TangentLinesInOutput_Tangent1_T1 extends ResthopperParameter {

	public name: string = "Tangent1";
	public nickName: string = "T1";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TangentLinesInOutput_Tangent2_T2 extends ResthopperParameter {

	public name: string = "Tangent2";
	public nickName: string = "T2";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
