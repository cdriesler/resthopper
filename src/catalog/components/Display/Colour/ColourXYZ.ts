import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ColourXYZ extends ResthopperComponent {

	public guid: string = "77185dc2-2f18-469d-9686-00f5b6049195";
	public name: string = "ColourXYZ";
	public nickName: string = "XYZ";
	public category: string = "Display";
	public subCategory: string = "Colour";
	public description: string = "Create a colour from floating point {XYZ} channels (CIE 1931 spec).";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"alpha_a": ColourXYZInput_alpha_a,
		"x_x": ColourXYZInput_x_x,
		"y_y": ColourXYZInput_y_y,
		"z_z": ColourXYZInput_z_z,
	}

	public output:
	{
		"colour_c": ColourXYZOutput_colour_c,
	}

	constructor() {
		super();
		this.input = {
			"alpha_a": new ColourXYZInput_alpha_a(),
			"x_x": new ColourXYZInput_x_x(),
			"y_y": new ColourXYZInput_y_y(),
			"z_z": new ColourXYZInput_z_z(),
		}
		this.output = {
			"colour_c": new ColourXYZOutput_colour_c(),
		}
	}

}

class ColourXYZInput_alpha_a extends ResthopperParameter {

	public name: string = "Alpha";
	public nickName: string = "A";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourXYZInput_x_x extends ResthopperParameter {

	public name: string = "X";
	public nickName: string = "X";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourXYZInput_y_y extends ResthopperParameter {

	public name: string = "Y";
	public nickName: string = "Y";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourXYZInput_z_z extends ResthopperParameter {

	public name: string = "Z";
	public nickName: string = "Z";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ColourXYZOutput_colour_c extends ResthopperParameter {

	public name: string = "Colour";
	public nickName: string = "C";
	public description: string = "Empty Colour parameter"
	public isOptional: boolean = false;
	public typeName: string = "Colour"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
