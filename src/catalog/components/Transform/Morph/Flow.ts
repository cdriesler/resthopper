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

	public library: string = "Transform Components";

	public input:
	{
		"Geometry_G": FlowInput_Geometry_G,
		"Base_C0": FlowInput_Base_C0,
		"Target_C1": FlowInput_Target_C1,
		"ReverseBase_R0": FlowInput_ReverseBase_R0,
		"ReverseTarget_R1": FlowInput_ReverseTarget_R1,
		"Stretch_S": FlowInput_Stretch_S,
		"Rigid_R": FlowInput_Rigid_R,
	}

	public output:
	{
		"Geometry_G": FlowOutput_Geometry_G,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new FlowInput_Geometry_G(),
			"Base_C0": new FlowInput_Base_C0(),
			"Target_C1": new FlowInput_Target_C1(),
			"ReverseBase_R0": new FlowInput_ReverseBase_R0(),
			"ReverseTarget_R1": new FlowInput_ReverseTarget_R1(),
			"Stretch_S": new FlowInput_Stretch_S(),
			"Rigid_R": new FlowInput_Rigid_R(),
		}
		this.output = {
			"Geometry_G": new FlowOutput_Geometry_G(),
		}
	}

}

class FlowInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlowInput_Base_C0 extends ResthopperParameter {

	public name: string = "Base";
	public nickName: string = "C0";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlowInput_Target_C1 extends ResthopperParameter {

	public name: string = "Target";
	public nickName: string = "C1";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlowInput_ReverseBase_R0 extends ResthopperParameter {

	public name: string = "ReverseBase";
	public nickName: string = "R0";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlowInput_ReverseTarget_R1 extends ResthopperParameter {

	public name: string = "ReverseTarget";
	public nickName: string = "R1";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlowInput_Stretch_S extends ResthopperParameter {

	public name: string = "Stretch";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlowInput_Rigid_R extends ResthopperParameter {

	public name: string = "Rigid";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlowOutput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
