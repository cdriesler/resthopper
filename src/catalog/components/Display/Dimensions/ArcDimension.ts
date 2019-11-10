import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ArcDimension extends ResthopperComponent {

	public guid: string = "1bd97813-4fec-4453-9645-4ac920844f9d";
	public name: string = "ArcDimension";
	public category: string = "Display";
	public subCategory: string = "Dimensions";
	public description: string = "Create an angle annotation based on an arc.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"arc_a": ArcDimensionInput_arc_a,
		"offset_o": ArcDimensionInput_offset_o,
		"text_t": ArcDimensionInput_text_t,
		"size_s": ArcDimensionInput_size_s,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"arc_a": new ArcDimensionInput_arc_a(),
			"offset_o": new ArcDimensionInput_offset_o(),
			"text_t": new ArcDimensionInput_text_t(),
			"size_s": new ArcDimensionInput_size_s(),
		}
		this.output = {

		}
	}

}

class ArcDimensionInput_arc_a extends ResthopperParameter {

	public name: string = "Arc";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Arc"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ArcDimensionInput_offset_o extends ResthopperParameter {

	public name: string = "Offset";
	public nickName: string = "O";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ArcDimensionInput_text_t extends ResthopperParameter {

	public name: string = "Text";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ArcDimensionInput_size_s extends ResthopperParameter {

	public name: string = "Size";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
