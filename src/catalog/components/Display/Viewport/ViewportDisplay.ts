import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ViewportDisplay extends ResthopperComponent {

	public guid: string = "b78d95bc-dffb-414c-b177-c611c92580b9";
	public name: string = "Viewport Display";
	public nickName: string = "ViewportDisplay";
	public category: string = "Display";
	public subCategory: string = "Viewport";
	public description: string = "Display viewport on canvas";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"visible_v": ViewportDisplayInput_visible_v,
		"left_l": ViewportDisplayInput_left_l,
		"top_t": ViewportDisplayInput_top_t,
		"width_w": ViewportDisplayInput_width_w,
		"height_h": ViewportDisplayInput_height_h,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"visible_v": new ViewportDisplayInput_visible_v(),
			"left_l": new ViewportDisplayInput_left_l(),
			"top_t": new ViewportDisplayInput_top_t(),
			"width_w": new ViewportDisplayInput_width_w(),
			"height_h": new ViewportDisplayInput_height_h(),
		}
		this.output = {

		}
	}

}

class ViewportDisplayInput_visible_v extends ResthopperParameter {

	public name: string = "Visible";
	public nickName: string = "V";
	public description: string = "Empty Boolean parameter"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ViewportDisplayInput_left_l extends ResthopperParameter {

	public name: string = "Left";
	public nickName: string = "L";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ViewportDisplayInput_top_t extends ResthopperParameter {

	public name: string = "Top";
	public nickName: string = "T";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ViewportDisplayInput_width_w extends ResthopperParameter {

	public name: string = "Width";
	public nickName: string = "W";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ViewportDisplayInput_height_h extends ResthopperParameter {

	public name: string = "Height";
	public nickName: string = "H";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
