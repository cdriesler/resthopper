import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Flow extends ResthopperComponent {

	public guid: string = "c3249da4-3f8e-4400-833e-e4e984d28657";
	public name: string = "Flow";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Re-aligns objects from a base curve to a target curve.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"geometry_g": FlowInput_geometry_g,
		"base_c0": FlowInput_base_c0,
		"target_c1": FlowInput_target_c1,
		"reversebase_r0": FlowInput_reversebase_r0,
		"reversetarget_r1": FlowInput_reversetarget_r1,
		"stretch_s": FlowInput_stretch_s,
		"rigid_r": FlowInput_rigid_r,
	}

	public output:
	{
		"geometry_g": FlowOutput_geometry_g,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new FlowInput_geometry_g(),
			"base_c0": new FlowInput_base_c0(),
			"target_c1": new FlowInput_target_c1(),
			"reversebase_r0": new FlowInput_reversebase_r0(),
			"reversetarget_r1": new FlowInput_reversetarget_r1(),
			"stretch_s": new FlowInput_stretch_s(),
			"rigid_r": new FlowInput_rigid_r(),
		}
		this.output = {
			"geometry_g": new FlowOutput_geometry_g(),
		}
	}

}

class FlowInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlowInput_base_c0 extends ResthopperParameter {

	public name: string = "Base";
	public nickName: string = "C0";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlowInput_target_c1 extends ResthopperParameter {

	public name: string = "Target";
	public nickName: string = "C1";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlowInput_reversebase_r0 extends ResthopperParameter {

	public name: string = "ReverseBase";
	public nickName: string = "R0";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlowInput_reversetarget_r1 extends ResthopperParameter {

	public name: string = "ReverseTarget";
	public nickName: string = "R1";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlowInput_stretch_s extends ResthopperParameter {

	public name: string = "Stretch";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlowInput_rigid_r extends ResthopperParameter {

	public name: string = "Rigid";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlowOutput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
