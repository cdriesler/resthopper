import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CircleTanTanTan extends ResthopperComponent {

	public guid: string = "dcaa922d-5491-4826-9a22-5adefa139f43";
	public name: string = "CircleTanTanTan";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create a circle tangent to three curves.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"CurveA_A": CircleTanTanTanInput_CurveA_A,
		"CurveB_B": CircleTanTanTanInput_CurveB_B,
		"CurveC_C": CircleTanTanTanInput_CurveC_C,
		"Point_P": CircleTanTanTanInput_Point_P,
	}

	public output:
	{
		"Circle_C": CircleTanTanTanOutput_Circle_C,
	}

	constructor() {
		super();
		this.input = {
			"CurveA_A": new CircleTanTanTanInput_CurveA_A(),
			"CurveB_B": new CircleTanTanTanInput_CurveB_B(),
			"CurveC_C": new CircleTanTanTanInput_CurveC_C(),
			"Point_P": new CircleTanTanTanInput_Point_P(),
		}
		this.output = {
			"Circle_C": new CircleTanTanTanOutput_Circle_C(),
		}
	}

}

class CircleTanTanTanInput_CurveA_A extends ResthopperParameter {

	public name: string = "CurveA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircleTanTanTanInput_CurveB_B extends ResthopperParameter {

	public name: string = "CurveB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircleTanTanTanInput_CurveC_C extends ResthopperParameter {

	public name: string = "CurveC";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircleTanTanTanInput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircleTanTanTanOutput_Circle_C extends ResthopperParameter {

	public name: string = "Circle";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Circle;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
