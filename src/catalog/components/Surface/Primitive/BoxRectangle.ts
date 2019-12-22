import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BoxRectangle extends ResthopperComponent {

	public guid: string = "d0a56c9e-2483-45e7-ab98-a450b97f1bc0";
	public name: string = "Box Rectangle";
	public nickName: string = "BoxRec";
	public category: string = "Surface";
	public subCategory: string = "Primitive";
	public description: string = "Create a box defined by a rectangle and a height.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"rectangle_r": BoxRectangleInput_rectangle_r,
		"height_h": BoxRectangleInput_height_h,
	}

	public output:
	{
		"box_b": BoxRectangleOutput_box_b,
	}

	constructor() {
		super();
		this.input = {
			"rectangle_r": new BoxRectangleInput_rectangle_r(),
			"height_h": new BoxRectangleInput_height_h(),
		}
		this.output = {
			"box_b": new BoxRectangleOutput_box_b(),
		}
	}

}

class BoxRectangleInput_rectangle_r extends ResthopperParameter {

	public name: string = "Rectangle";
	public nickName: string = "R";
	public description: string = "Empty Rectangle parameter"
	public isOptional: boolean = false;
	public typeName: string = "Rectangle"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxRectangleInput_height_h extends ResthopperParameter {

	public name: string = "Height";
	public nickName: string = "H";
	public description: string = "Empty Domain parameter"
	public isOptional: boolean = false;
	public typeName: string = "Domain"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxRectangleOutput_box_b extends ResthopperParameter {

	public name: string = "Box";
	public nickName: string = "B";
	public description: string = "Empty Box parameter"
	public isOptional: boolean = false;
	public typeName: string = "Box"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
