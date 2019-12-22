import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CloudDisplay extends ResthopperComponent {

	public guid: string = "059b72b0-9bb3-4542-a805-2dcd27493164";
	public name: string = "Cloud Display";
	public nickName: string = "Cloud";
	public category: string = "Display";
	public subCategory: string = "Preview";
	public description: string = "Draw a collection of points as a fuzzy cloud";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"points_p": CloudDisplayInput_points_p,
		"colours_c": CloudDisplayInput_colours_c,
		"size_s": CloudDisplayInput_size_s,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"points_p": new CloudDisplayInput_points_p(),
			"colours_c": new CloudDisplayInput_colours_c(),
			"size_s": new CloudDisplayInput_size_s(),
		}
		this.output = {

		}
	}

}

class CloudDisplayInput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = true;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CloudDisplayInput_colours_c extends ResthopperParameter {

	public name: string = "Colours";
	public nickName: string = "C";
	public description: string = "Empty Colour parameter"
	public isOptional: boolean = true;
	public typeName: string = "Colour"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CloudDisplayInput_size_s extends ResthopperParameter {

	public name: string = "Size";
	public nickName: string = "S";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = true;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
