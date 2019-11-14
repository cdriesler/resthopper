import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DeconstuctRectangle extends ResthopperComponent {

	public guid: string = "e5c33a79-53d5-4f2b-9a97-d3d45c780edc";
	public name: string = "DeconstuctRectangle";
	public nickName: string = "DRec";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Retrieve the base plane and side intervals of a rectangle.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"rectangle_r": DeconstuctRectangleInput_rectangle_r,
	}

	public output:
	{
		"baseplane_b": DeconstuctRectangleOutput_baseplane_b,
		"xinterval_x": DeconstuctRectangleOutput_xinterval_x,
		"yinterval_y": DeconstuctRectangleOutput_yinterval_y,
	}

	constructor() {
		super();
		this.input = {
			"rectangle_r": new DeconstuctRectangleInput_rectangle_r(),
		}
		this.output = {
			"baseplane_b": new DeconstuctRectangleOutput_baseplane_b(),
			"xinterval_x": new DeconstuctRectangleOutput_xinterval_x(),
			"yinterval_y": new DeconstuctRectangleOutput_yinterval_y(),
		}
	}

}

class DeconstuctRectangleInput_rectangle_r extends ResthopperParameter {

	public name: string = "Rectangle";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Rectangle"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstuctRectangleOutput_baseplane_b extends ResthopperParameter {

	public name: string = "BasePlane";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstuctRectangleOutput_xinterval_x extends ResthopperParameter {

	public name: string = "XInterval";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Domain"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstuctRectangleOutput_yinterval_y extends ResthopperParameter {

	public name: string = "YInterval";
	public nickName: string = "Y";
	public isOptional: boolean = false;
	public typeName: string = "Domain"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
