import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CircleTanTan extends ResthopperComponent {

	public guid: string = "50b204ef-d3de-41bb-a006-02fba2d3f709";
	public name: string = "CircleTanTan";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create a circle tangent to two curves.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"CurveA_A": CircleTanTanInput_CurveA_A,
		"CurveB_B": CircleTanTanInput_CurveB_B,
		"Point_P": CircleTanTanInput_Point_P,
	}

	public output:
	{
		"Circle_C": CircleTanTanOutput_Circle_C,
	}

	constructor() {
		super();
		this.input = {
			"CurveA_A": new CircleTanTanInput_CurveA_A(),
			"CurveB_B": new CircleTanTanInput_CurveB_B(),
			"Point_P": new CircleTanTanInput_Point_P(),
		}
		this.output = {
			"Circle_C": new CircleTanTanOutput_Circle_C(),
		}
	}

}

class CircleTanTanInput_CurveA_A extends ResthopperParameter {

	public name: string = "CurveA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircleTanTanInput_CurveB_B extends ResthopperParameter {

	public name: string = "CurveB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircleTanTanInput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircleTanTanOutput_Circle_C extends ResthopperParameter {

	public name: string = "Circle";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Circle;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
