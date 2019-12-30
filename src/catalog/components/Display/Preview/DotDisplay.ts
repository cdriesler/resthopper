import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DotDisplay extends ResthopperComponent {

	public guid: string = "6b1bd8b2-47a4-4aa6-a471-3fd91c62a486";
	public name: string = "Dot Display";
	public nickName: string = "Dots";
	public category: string = "Display";
	public subCategory: string = "Preview";
	public description: string = "Draw a collection of coloured dots";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"point_p": DotDisplayInput_point_p,
		"colour_c": DotDisplayInput_colour_c,
		"size_s": DotDisplayInput_size_s,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"point_p": new DotDisplayInput_point_p(),
			"colour_c": new DotDisplayInput_colour_c(),
			"size_s": new DotDisplayInput_size_s(),
		}
		this.output = {

		}
	}

}

class DotDisplayInput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public description: string = "Dot location"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DotDisplayInput_colour_c extends ResthopperParameter {

	public name: string = "Colour";
	public nickName: string = "C";
	public description: string = "Dot colour"
	public isOptional: boolean = false;
	public typeName: string = "Colour"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DotDisplayInput_size_s extends ResthopperParameter {

	public name: string = "Size";
	public nickName: string = "S";
	public description: string = "Dot size"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
