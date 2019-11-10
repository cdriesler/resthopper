import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TangentLinesEx extends ResthopperComponent {

	public guid: string = "d6d68c93-d00f-4cd5-ba89-903c7f6be64c";
	public name: string = "TangentLinesEx";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create external tangent lines between circles";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"CircleA_A": TangentLinesExInput_CircleA_A,
		"CircleB_B": TangentLinesExInput_CircleB_B,
	}

	public output:
	{
		"Tangent1_T1": TangentLinesExOutput_Tangent1_T1,
		"Tangent2_T2": TangentLinesExOutput_Tangent2_T2,
	}

	constructor() {
		super();
		this.input = {
			"CircleA_A": new TangentLinesExInput_CircleA_A(),
			"CircleB_B": new TangentLinesExInput_CircleB_B(),
		}
		this.output = {
			"Tangent1_T1": new TangentLinesExOutput_Tangent1_T1(),
			"Tangent2_T2": new TangentLinesExOutput_Tangent2_T2(),
		}
	}

}

class TangentLinesExInput_CircleA_A extends ResthopperParameter {

	public name: string = "CircleA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Circle;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TangentLinesExInput_CircleB_B extends ResthopperParameter {

	public name: string = "CircleB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Circle;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TangentLinesExOutput_Tangent1_T1 extends ResthopperParameter {

	public name: string = "Tangent1";
	public nickName: string = "T1";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TangentLinesExOutput_Tangent2_T2 extends ResthopperParameter {

	public name: string = "Tangent2";
	public nickName: string = "T2";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
