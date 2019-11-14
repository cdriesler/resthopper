import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class AlignedDimension extends ResthopperComponent {

	public guid: string = "3de3d3a0-1a1b-488c-b3d9-3fba0fdf07a8";
	public name: string = "AlignedDimension";
	public nickName: string = "AlignDim";
	public category: string = "Display";
	public subCategory: string = "Dimensions";
	public description: string = "Create a distance annotation between two points";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"plane_p": AlignedDimensionInput_plane_p,
		"pointa_a": AlignedDimensionInput_pointa_a,
		"pointb_b": AlignedDimensionInput_pointb_b,
		"offset_o": AlignedDimensionInput_offset_o,
		"text_t": AlignedDimensionInput_text_t,
		"size_s": AlignedDimensionInput_size_s,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"plane_p": new AlignedDimensionInput_plane_p(),
			"pointa_a": new AlignedDimensionInput_pointa_a(),
			"pointb_b": new AlignedDimensionInput_pointb_b(),
			"offset_o": new AlignedDimensionInput_offset_o(),
			"text_t": new AlignedDimensionInput_text_t(),
			"size_s": new AlignedDimensionInput_size_s(),
		}
		this.output = {

		}
	}

}

class AlignedDimensionInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AlignedDimensionInput_pointa_a extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AlignedDimensionInput_pointb_b extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AlignedDimensionInput_offset_o extends ResthopperParameter {

	public name: string = "Offset";
	public nickName: string = "O";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AlignedDimensionInput_text_t extends ResthopperParameter {

	public name: string = "Text";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AlignedDimensionInput_size_s extends ResthopperParameter {

	public name: string = "Size";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
