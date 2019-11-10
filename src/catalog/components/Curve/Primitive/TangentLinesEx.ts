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
		"circlea_a": TangentLinesExInput_circlea_a,
		"circleb_b": TangentLinesExInput_circleb_b,
	}

	public output:
	{
		"tangent1_t1": TangentLinesExOutput_tangent1_t1,
		"tangent2_t2": TangentLinesExOutput_tangent2_t2,
	}

	constructor() {
		super();
		this.input = {
			"circlea_a": new TangentLinesExInput_circlea_a(),
			"circleb_b": new TangentLinesExInput_circleb_b(),
		}
		this.output = {
			"tangent1_t1": new TangentLinesExOutput_tangent1_t1(),
			"tangent2_t2": new TangentLinesExOutput_tangent2_t2(),
		}
	}

}

class TangentLinesExInput_circlea_a extends ResthopperParameter {

	public name: string = "CircleA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Circle"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TangentLinesExInput_circleb_b extends ResthopperParameter {

	public name: string = "CircleB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Circle"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TangentLinesExOutput_tangent1_t1 extends ResthopperParameter {

	public name: string = "Tangent1";
	public nickName: string = "T1";
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TangentLinesExOutput_tangent2_t2 extends ResthopperParameter {

	public name: string = "Tangent2";
	public nickName: string = "T2";
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
