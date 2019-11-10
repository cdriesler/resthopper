import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BoxTwoPt extends ResthopperComponent {

	public guid: string = "2a43ef96-8f87-4892-8b94-237a47e8d3cf";
	public name: string = "Box2Pt";
	public category: string = "Surface";
	public subCategory: string = "Primitive";
	public description: string = "Create a box defined by two points.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"PointA_A": BoxTwoPtInput_PointA_A,
		"PointB_B": BoxTwoPtInput_PointB_B,
		"Plane_P": BoxTwoPtInput_Plane_P,
	}

	public output:
	{
		"Box_B": BoxTwoPtOutput_Box_B,
	}

	constructor() {
		super();
		this.input = {
			"PointA_A": new BoxTwoPtInput_PointA_A(),
			"PointB_B": new BoxTwoPtInput_PointB_B(),
			"Plane_P": new BoxTwoPtInput_Plane_P(),
		}
		this.output = {
			"Box_B": new BoxTwoPtOutput_Box_B(),
		}
	}

}

class BoxTwoPtInput_PointA_A extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxTwoPtInput_PointB_B extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxTwoPtInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxTwoPtOutput_Box_B extends ResthopperParameter {

	public name: string = "Box";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Box;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
