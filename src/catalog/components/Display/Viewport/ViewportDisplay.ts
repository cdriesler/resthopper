import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ViewportDisplay extends ResthopperComponent {

	public guid: string = "b78d95bc-dffb-414c-b177-c611c92580b9";
	public name: string = "ViewportDisplay";
	public category: string = "Display";
	public subCategory: string = "Viewport";
	public description: string = "Display viewport on canvas";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Visible_V": ViewportDisplayInput_Visible_V,
		"Left_L": ViewportDisplayInput_Left_L,
		"Top_T": ViewportDisplayInput_Top_T,
		"Width_W": ViewportDisplayInput_Width_W,
		"Height_H": ViewportDisplayInput_Height_H,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"Visible_V": new ViewportDisplayInput_Visible_V(),
			"Left_L": new ViewportDisplayInput_Left_L(),
			"Top_T": new ViewportDisplayInput_Top_T(),
			"Width_W": new ViewportDisplayInput_Width_W(),
			"Height_H": new ViewportDisplayInput_Height_H(),
		}
		this.output = {

		}
	}

}

class ViewportDisplayInput_Visible_V extends ResthopperParameter {

	public name: string = "Visible";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ViewportDisplayInput_Left_L extends ResthopperParameter {

	public name: string = "Left";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ViewportDisplayInput_Top_T extends ResthopperParameter {

	public name: string = "Top";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ViewportDisplayInput_Width_W extends ResthopperParameter {

	public name: string = "Width";
	public nickName: string = "W";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ViewportDisplayInput_Height_H extends ResthopperParameter {

	public name: string = "Height";
	public nickName: string = "H";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
