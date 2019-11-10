import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Taper extends ResthopperComponent {

	public guid: string = "ad0ee51e-c86f-4668-8de5-b55b850f6001";
	public name: string = "Taper";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Deforms objects toward or away from an axis";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"geometry_g": TaperInput_geometry_g,
		"axis_x": TaperInput_axis_x,
		"start_r0": TaperInput_start_r0,
		"end_r1": TaperInput_end_r1,
		"flat_f": TaperInput_flat_f,
		"infinite_i": TaperInput_infinite_i,
		"rigid_r": TaperInput_rigid_r,
	}

	public output:
	{
		"geometry_g": TaperOutput_geometry_g,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new TaperInput_geometry_g(),
			"axis_x": new TaperInput_axis_x(),
			"start_r0": new TaperInput_start_r0(),
			"end_r1": new TaperInput_end_r1(),
			"flat_f": new TaperInput_flat_f(),
			"infinite_i": new TaperInput_infinite_i(),
			"rigid_r": new TaperInput_rigid_r(),
		}
		this.output = {
			"geometry_g": new TaperOutput_geometry_g(),
		}
	}

}

class TaperInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TaperInput_axis_x extends ResthopperParameter {

	public name: string = "Axis";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TaperInput_start_r0 extends ResthopperParameter {

	public name: string = "Start";
	public nickName: string = "R0";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TaperInput_end_r1 extends ResthopperParameter {

	public name: string = "End";
	public nickName: string = "R1";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TaperInput_flat_f extends ResthopperParameter {

	public name: string = "Flat";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TaperInput_infinite_i extends ResthopperParameter {

	public name: string = "Infinite";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TaperInput_rigid_r extends ResthopperParameter {

	public name: string = "Rigid";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TaperOutput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
