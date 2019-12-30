import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CircleTanTan extends ResthopperComponent {

	public guid: string = "50b204ef-d3de-41bb-a006-02fba2d3f709";
	public name: string = "Circle TanTan";
	public nickName: string = "CircleTT";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create a circle tangent to two curves.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curvea_a": CircleTanTanInput_curvea_a,
		"curveb_b": CircleTanTanInput_curveb_b,
		"point_p": CircleTanTanInput_point_p,
	}

	public output:
	{
		"circle_c": CircleTanTanOutput_circle_c,
	}

	constructor() {
		super();
		this.input = {
			"curvea_a": new CircleTanTanInput_curvea_a(),
			"curveb_b": new CircleTanTanInput_curveb_b(),
			"point_p": new CircleTanTanInput_point_p(),
		}
		this.output = {
			"circle_c": new CircleTanTanOutput_circle_c(),
		}
	}

}

class CircleTanTanInput_curvea_a extends ResthopperParameter {

	public name: string = "CurveA";
	public nickName: string = "A";
	public description: string = "First curve for tangency constraint"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircleTanTanInput_curveb_b extends ResthopperParameter {

	public name: string = "CurveB";
	public nickName: string = "B";
	public description: string = "Second curve for tangency constraint"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircleTanTanInput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public description: string = "Circle center point guide"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircleTanTanOutput_circle_c extends ResthopperParameter {

	public name: string = "Circle";
	public nickName: string = "C";
	public description: string = "Resulting circle"
	public isOptional: boolean = false;
	public typeName: string = "Circle"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
