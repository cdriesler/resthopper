import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Rectangle extends ResthopperComponent {

	public guid: string = "d93100b6-d50b-40b2-831a-814659dc38e3";
	public name: string = "Rectangle";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create a rectangle on a plane";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"plane_p": RectangleInput_plane_p,
		"xsize_x": RectangleInput_xsize_x,
		"ysize_y": RectangleInput_ysize_y,
		"radius_r": RectangleInput_radius_r,
	}

	public output:
	{
		"rectangle_r": RectangleOutput_rectangle_r,
		"length_l": RectangleOutput_length_l,
	}

	constructor() {
		super();
		this.input = {
			"plane_p": new RectangleInput_plane_p(),
			"xsize_x": new RectangleInput_xsize_x(),
			"ysize_y": new RectangleInput_ysize_y(),
			"radius_r": new RectangleInput_radius_r(),
		}
		this.output = {
			"rectangle_r": new RectangleOutput_rectangle_r(),
			"length_l": new RectangleOutput_length_l(),
		}
	}

}

class RectangleInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangleInput_xsize_x extends ResthopperParameter {

	public name: string = "XSize";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Domain"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangleInput_ysize_y extends ResthopperParameter {

	public name: string = "YSize";
	public nickName: string = "Y";
	public isOptional: boolean = false;
	public typeName: string = "Domain"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangleInput_radius_r extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangleOutput_rectangle_r extends ResthopperParameter {

	public name: string = "Rectangle";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangleOutput_length_l extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
