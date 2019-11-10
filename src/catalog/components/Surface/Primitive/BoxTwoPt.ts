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
		"pointa_a": BoxTwoPtInput_pointa_a,
		"pointb_b": BoxTwoPtInput_pointb_b,
		"plane_p": BoxTwoPtInput_plane_p,
	}

	public output:
	{
		"box_b": BoxTwoPtOutput_box_b,
	}

	constructor() {
		super();
		this.input = {
			"pointa_a": new BoxTwoPtInput_pointa_a(),
			"pointb_b": new BoxTwoPtInput_pointb_b(),
			"plane_p": new BoxTwoPtInput_plane_p(),
		}
		this.output = {
			"box_b": new BoxTwoPtOutput_box_b(),
		}
	}

}

class BoxTwoPtInput_pointa_a extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxTwoPtInput_pointb_b extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxTwoPtInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxTwoPtOutput_box_b extends ResthopperParameter {

	public name: string = "Box";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Box;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
